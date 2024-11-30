#!/usr/bin/env node

import { exec } from 'child_process';
import fs from 'fs';
import path from 'path';
import prompts from 'prompts';

const createProject = async () => {
  const { projectName } = await prompts({
    type: 'text',
    name: 'projectName',
    message: 'Quel est le nom du projet ?',
    initial: 'my-web3-project'
  });

  const projectDir = path.join(process.cwd(), projectName);

  if (fs.existsSync(projectDir)) {
    console.log('Le dossier existe déjà.');
    return;
  }

  fs.mkdirSync(projectDir);

  exec(`git init`, { cwd: projectDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de l'initialisation de git: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  const createNextAppCmd = `npx create-next-app frontend --use-npm --yes`;

  exec(createNextAppCmd, { cwd: projectDir }, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erreur lors de la création du projet Next.js: ${error.message}`);
      return;
    }
    if (stderr) {
      console.error(`stderr: ${stderr}`);
      return;
    }
    console.log(`stdout: ${stdout}`);
  });

  const readmeTemplatePath = path.join(process.cwd(), 'templates', 'README.md');
  const projectReadmePath = path.join(projectDir, 'README.md');

  fs.copyFileSync(readmeTemplatePath, projectReadmePath);
};

createProject().catch((err) => {
  console.error('Erreur:', err);
});
