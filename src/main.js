import { getPasswordBySite } from './controller/passwordController.js';

export function start() {
    window.addEventListener('load', async () => {
        getPasswordBySite();
    });
}