Purpose
-------
This file guides AI coding agents (Copilot/GitHub Bots) so they can be productive immediately in this repository. Keep instructions concise and actionable — focused on what can be discovered from the repository and what to ask the human when information is missing.

Repository snapshot
-------------------
- Key files present: `README.md`, `LICENSE`.
- `README.md` content: "Personal site - WIP" — there is currently no detected source code, language manifests, or CI config.

How to start (discovery checklist)
---------------------------------
- **Read:** Open `README.md` for the author's intent. In this repo it says a personal site WIP.
- **Look for manifests:** Check for `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`, `Gemfile`, `composer.json`. If none exist, do not assume a stack — ask the maintainer.
- **CI / workflows:** Inspect `.github/workflows/` for build/test commands and environment matrix.
- **Static/site folders:** Search for common site folders like `src/`, `public/`, `pages/`, `content/`, `static/`, `themes/` to infer framework choice.

Common commands to try (only when matching manifests are present)
-----------------------------------------------------------
- Node/npm: `npm install` then `npm run build` or `npm run dev`. If `package-lock.json` present prefer `npm ci` for CI.
- pnpm: `pnpm install` then `pnpm build` / `pnpm dev` if `pnpm-lock.yaml` present.
- yarn: `yarn` then `yarn build` / `yarn dev` if `yarn.lock` present.
- Python: create venv and `pip install -r requirements.txt` or `pip install .` if `pyproject.toml` present; run tests with `pytest` if a `tests/` folder is present.
- Go/Rust/PHP/etc: use the standard toolchain for the language if a module manifest is present.

Project-specific conventions and patterns (discoverable)
------------------------------------------------------
- Currently none enforced by files in the repository. When you add or modify code, prefer conventional layouts for the chosen stack (e.g., Next.js: `pages/` or `app/`, Vite: `index.html` + `src/`).
- When introducing a new stack, add a short `CONTRIBUTING.md` or update `README.md` with build/test commands and preferred Node/Python/Rust versions.

When you cannot infer the stack or tests
--------------------------------------
- Ask one clear question to the repository owner: for example — "This repo currently lacks a language manifest. Which framework/language should I use to build the personal site? (e.g., Next.js, Hugo, plain HTML/CSS, SSG)"
- If the user delegates stack choice to the agent, propose 2 options (lightweight static site vs. React/Next.js) with pros/cons, then implement after confirmation.

Editing policy for this file
---------------------------
- If a `.github/copilot-instructions.md` already exists, merge preserving existing human-written guidance. Do not discard maintainer notes.
- Keep this file short (20–50 lines) and update only when repository signals a stable stack or when maintainers provide preferences.

Examples (apply to this repository)
----------------------------------
- `README.md` shows "Personal site - WIP". Do not scaffold a full app without asking which framework the owner prefers.
- If asked to scaffold, present two concrete starter choices with commands: e.g.,
  - Next.js (TypeScript): `npx create-next-app@latest --typescript` then `npm run dev`.
  - Static site (Hugo): `hugo new site .` then `hugo server`.

Communication & PR notes
------------------------
- Keep PRs small and focused: one feature or scaffold per PR.
- Include a short `README` or `DEVELOPMENT.md` when introducing new stack or build steps.

If anything is unclear
----------------------
- Stop and ask the repository owner one concise question. Examples: "Which framework should I use for the personal site?" or "Do you prefer npm, pnpm, or yarn for Node projects?"

Files to reference when updating these instructions
-------------------------------------------------
- `README.md`, `LICENSE`, `.github/workflows/*`, `package.json`, `pyproject.toml`, `go.mod`, `Cargo.toml`.

End
---
If you'd like, I can (A) detect an intended stack and propose a scaffold, or (B) leave the repo untouched and only add developer docs after you confirm the preferred framework.
