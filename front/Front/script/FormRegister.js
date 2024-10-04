"use strict";

import { BackendApi } from './BackendApi.js';

document
    .getElementById('form')
    .addEventListener('submit', preventSubmit);

document
    .getElementById('buttonRegister')
    .addEventListener('click', buttonRegisterOnClick);

async function buttonRegisterOnClick() {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;

    try {
        const rights = "";
        const backendApi = new BackendApi();
        const res = await backendApi.RegisterUser(username, password, rights);
        console.log(JSON.stringify(res));
        if (res.error) {
            console.log("Failed to register: " + res.error);
            alert("Date invalide pentru a crea utilizator!");
            return;
        }
        alert("Contul a fost creat cu succes!");
        window.location.replace("/");
    } catch (error) {
        alert("Inregistrarea a esuat!");
        console.log(error);
        return;
    }
}

function preventSubmit(event) {
    event.preventDefault();
    return false;
}
