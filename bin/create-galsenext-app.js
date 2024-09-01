#!/usr/bin/env node

const { execSync } = require("child_process");
const path = require("path");
const fs = require("fs");

const projectName = process.argv[2];
if (!projectName) {
  console.log("Veuillez spécifier un nom pour le projet");
  console.log("Par exemple :");
  console.log("  npx galsenext mon-projet");
  process.exit(1);
}

const currentDir = process.cwd();
const projectDir = path.join(currentDir, projectName);

console.log(`Création du projet ${projectName}...`);
execSync(
  `git clone --depth 1 https://github.com/mouhamedhanne/Galsenext ${projectDir}`
);

const gitFolder = path.join(projectDir, ".git");
fs.rmSync(gitFolder, { recursive: true, force: true });

console.log("Installation des dépendances...");
execSync(`cd ${projectDir} && npm install`);

console.log("Le projet a été créé avec succès!");
console.log(`Pour démarrer, exécutez les commandes suivantes:`);
console.log(`  cd ${projectName}`);
console.log("  npm run dev");
