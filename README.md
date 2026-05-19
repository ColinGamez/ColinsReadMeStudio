# Colin's README Studio

Build a clean README from the project VS Code already has open. README Studio detects scripts, package metadata, repository links, Marketplace IDs, and project health, then gives you a live Markdown editor and preview.

## Features

- Generate README structure from workspace context.
- Preview headings, badges, links, images, tables, lists, code blocks, and blockquotes.
- Reuse an existing README, copy generated Markdown, open README.md, or save the draft.
- Include install commands, usage commands, support links, and roadmap notes.

## Usage

Open a workspace, then run **Colin's README Studio: Open README Studio** from the Command Palette.

## Local Development

```sh
npm install
npm run build
npx @vscode/vsce package --allow-missing-repository
```
