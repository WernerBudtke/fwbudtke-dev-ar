require("dotenv").config({ path: ".env.deploy" });
const shell = require("shelljs");

const SSH_KEY = process.env.DEPLOY_KEY;
const USER = process.env.DEPLOY_USER;
const HOST = process.env.DEPLOY_HOST;
const REMOTE_TMP_FE = process.env.REMOTE_TMP;
const REMOTE_ROOT = process.env.REMOTE_ROOT;
const REMOTE_TMP_API = process.env.REMOTE_TMP_API;
const REMOTE_API = process.env.REMOTE_API;

// Helper to run commands with live output
function run(cmd, description) {
  console.log(`\n➡️ ${description}`);
  const result = shell.exec(cmd, { async: false, silent: false });
  if (result.code !== 0) {
    shell.echo(`❌ Error during: ${description}`);
    shell.exit(1);
  }
}

// 1️⃣ Build React app
run("npm run build", "Building React app");

// 2️⃣ Upload frontend build folder to remote tmp folder
run(
  `scp -i "${SSH_KEY}" -r build/* ${USER}@${HOST}:${REMOTE_TMP_FE}/`,
  "Uploading frontend build to server"
);

// 3️⃣ Deploy frontend: move files to Nginx root, fix permissions, cleanup tmp
const deployFE = `
sudo rm -rf ${REMOTE_ROOT}/* &&
sudo mv ${REMOTE_TMP_FE}/* ${REMOTE_ROOT}/ &&
sudo chown -R www-data:www-data ${REMOTE_ROOT} &&
sudo chmod -R 775 ${REMOTE_ROOT} &&
rm -rf ${REMOTE_TMP_FE}/*
`.replace(/\n/g, " ");

run(
  `ssh -i "${SSH_KEY}" -o LogLevel=ERROR -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no ${USER}@${HOST} "${deployFE}"`,
  "Deploying frontend build on server"
);

// 4️⃣ Upload API folder and .env.deploy
run(
  `scp -i "${SSH_KEY}" -r api/* ${USER}@${HOST}:${REMOTE_TMP_API}/`,
  "Uploading API folder and .env.deploy to server"
);

// 5️⃣ Deploy API: move files, install deps, restart pm2
const deployAPI = `
rm -rf ${REMOTE_API}/* &&
mv ${REMOTE_TMP_API}/* ${REMOTE_API}/ &&
cd ${REMOTE_API} &&
npm install --production &&
pm2 restart mc-api || pm2 start index.js --name mc-api
`.replace(/\n/g, " ");

run(
  `ssh -i "${SSH_KEY}" -o LogLevel=ERROR -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no ${USER}@${HOST} "${deployAPI}"`,
  "Deploying API and restarting pm2 process"
);

console.log("✅ Deployment of frontend and API successful!");
