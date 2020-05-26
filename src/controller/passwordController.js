import server from '../config/server.js';

import { getInput, getInputByType, setValues } from '../util/input.js';
import { getBaseUrl } from '../util/url.js';

export async function getPasswordBySite() {
    const currentUrl = window.location.href;

    const baseUrl = getBaseUrl(currentUrl);

    const emailField = getInput('login') || getInput('email');
    const passwordField = getInputByType('password') || getInput('password');

    const response = await fetch(`${server.url}/password?site=${baseUrl}`);

    const data = await response.json();

    const responseNotEmpty = Array.isArray(data) && data.length;

    if (responseNotEmpty) {
        setValues(emailField, passwordField, data);
    }
}