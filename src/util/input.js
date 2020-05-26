function getInput(name) {
    return document.querySelector(`input[name="${name}"]`);
}

function getInputByType(type) {
    return document.querySelector(`input[type="${type}"]`);
}

function setValues(emailField, passwordField, data) {
    var ev = simulateInputEvent();
    emailField.value = data[0].user;
    emailField.dispatchEvent(ev);
    passwordField.value = data[0].pw;
    passwordField.dispatchEvent(ev);
}

function simulateInputEvent() {
    var ev = new Event('input', { bubbles: true });
    ev.simulated = true;
    return ev;
}

export { getInput, getInputByType, setValues };