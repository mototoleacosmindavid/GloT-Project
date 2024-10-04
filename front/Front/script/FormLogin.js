"use strict";

import { BackendApi } from './BackendApi.js';

document
    .getElementById('form')
    .addEventListener('submit', preventSubmit);

document
    .getElementById('buttonLogin')
    .addEventListener('click', buttonLoginOnClick);

async function buttonLoginOnClick() {
    const username = document.getElementById('inputUsername').value;
    const password = document.getElementById('inputPassword').value;

    try {
        const backendApi = new BackendApi();
        const res = await backendApi.LoginUser(username, password);
        if (res.error) {
            alert("Credentiale invalide!");
            return;
        }
        localStorage.setItem("username", username);
        window.location.replace("/");
    } catch (error) {
        alert("Autentificarea a esuat!");
        console.log(error);
        return;
    }
}

function preventSubmit(event) {
    event.preventDefault();
    return false;
}