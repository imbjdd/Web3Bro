#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prompts from 'prompts';
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const { framework } = yield prompts({
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
    });
}
main();
