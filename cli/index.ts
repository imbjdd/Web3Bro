#!/usr/bin/env node

import prompts from 'prompts';

async function main() {
  const { framework } = await prompts({
    type: 'select',
    name: 'framework',
    message: 'Quel framework CSS voulez-vous utiliser ?',
    choices: [
      { title: 'Tailwind CSS', value: 'tailwind' },
      { title: 'Bootstrap', value: 'bootstrap' },
      { title: 'None', value: 'none' },
    ],
    initial: 0,
  });

  console.log(`Vous avez choisi : ${framework}`);

  switch (framework) {
    case 'tailwind':
      console.log('Vous avez sélectionné Tailwind CSS.');
      break;
    case 'bootstrap':
      console.log('Vous avez sélectionné Bootstrap.');
      break;
    case 'none':
      console.log('Vous avez choisi aucun framework CSS.');
      break;
    default:
      console.log('Choix invalide.');
  }
}

main();
