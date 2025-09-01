require("dotenv").config({ path: ".env.deploy" }); // load deploy-specific env
const express = require("express");
const { status } = require("minecraft-server-util");

const app = express();

// API port
const PORT = process.env.API_PORT || 3001;

// Minecraft server host and port
const MC_HOST =
  process.env.MC_HOST || process.env.DEPLOY_HOST || "fwbudtke.zapto.org";
const MC_PORT = Number(process.env.MC_PORT) || 25565;

app.get("/mc-status", async (req, res) => {
  try {
    const response = await status(MC_HOST, MC_PORT, { timeout: 1000 });
    res.json({
      online: true,
      players: response.players.online,
      maxPlayers: response.players.max,
    });
  } catch (err) {
    res.json({ online: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`Minecraft API running on port ${PORT}`);
  console.log(`Checking Minecraft server at ${MC_HOST}:${MC_PORT}`);
});
