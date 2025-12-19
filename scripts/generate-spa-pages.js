#!/usr/bin/env node
const fs = require('fs').promises;
const path = require('path');

async function exists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function walk(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const ent of entries) {
    const res = path.join(dir, ent.name);
    if (ent.isDirectory()) {
      files.push(...(await walk(res)));
    } else if (ent.isFile()) {
      if (/\.(tsx|ts|jsx|js|html)$/.test(ent.name)) files.push(res);
    }
  }
  return files;
}

(async function main() {
  try {
    const root = process.cwd();
    const distDir = path.join(root, 'dist');
    const indexFile = path.join(distDir, 'index.html');

    if (!(await exists(indexFile))) {
      console.error('Error: dist/index.html not found. Run the build first.');
      process.exitCode = 1;
      return;
    }

    const indexHtml = await fs.readFile(indexFile, 'utf8');

    // Write 404.html (same as index)
    await fs.writeFile(path.join(distDir, '404.html'), indexHtml, 'utf8');
    console.log('Wrote dist/404.html');

    // Scan src/routes for route files
    const pagesDir = path.join(root, 'src', 'routes');
    if (!(await exists(pagesDir))) {
      console.warn('No src/pages directory found — skipping SPA copies.');
      return;
    }

    const pageFiles = await walk(pagesDir);

    for (const file of pageFiles) {
      const rel = path.relative(pagesDir, file);
      const parsed = path.parse(rel);

      // build output directory: for 'index' files use the directory, otherwise use dir/name
      let outDir;
      if (parsed.name.toLowerCase() === 'index') {
        outDir = path.join(distDir, parsed.dir);
      } else {
        outDir = path.join(distDir, parsed.dir, parsed.name);
      }

      // normalize to posix-like path segments (lowercase is optional)
      await fs.mkdir(outDir, { recursive: true });
      // Calculate prefix from the generated file back to the dist root so asset links
      // (which are written as "./assets/..." in the original index.html) resolve
      // correctly from nested folders like dist/about/index.html -> ../assets/...
      const relToDist = path.relative(outDir, distDir);
      // Normalize to posix-style and ensure trailing slash when not empty
      const prefix = relToDist === '' ? './' : relToDist.split(path.sep).join('/') + '/';

      // Replace asset references so nested index.html files resolve back to dist root.
      // First, fix ./assets/... which Vite writes in the root index.html.
      let adjusted = indexHtml.replace(/(href|src)=["']\.\/assets\//g, `$1="${prefix}assets/`);

      // Patterns for icons and manifests we commonly include in the head.
      const patterns = [
        'apple-touch-icon[^"\']*',
        'favicon[^"\']*',
        'mstile[^"\']*',
        'site\\.webmanifest',
      ];

      for (const pat of patterns) {
        const re = new RegExp(`(href|src|content)=(\"|\')\\.\/(${pat})\\2`, 'g');
        adjusted = adjusted.replace(re, `$1=$2${prefix}$3$2`);
      }

      await fs.writeFile(path.join(outDir, 'index.html'), adjusted, 'utf8');
      console.log('Wrote', path.join(outDir, 'index.html'));
    }

    console.log('Finished generating SPA page copies.');
  } catch (err) {
    console.error('Error generating SPA pages:', err);
    process.exitCode = 1;
  }
})();
