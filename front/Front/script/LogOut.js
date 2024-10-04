"use strict";
import { BackendApi } from './BackendApi.js';

document.addEventListener("DOMContentLoaded", () => {
    checkUser();
    var logoutElements = document.getElementsByClassName("logout");
    for (var i = 0; i < logoutElements.length; i++) {
        logoutElements[i].addEventListener("click", btnLogOutOnClick);
    }
});

function btnLogOutOnClick() {
    const backend = new BackendApi();
    backend.LogoutUser().then(() => {
        alert('Deconectarea s-a facut cu succes!');
        window.location.replace("/");
        localStorage.removeItem("username");
    }
    )
        .catch(
            err => {
                console.error(err);
                window.location.replace("/GloT_404_page.html");
            });
}
function checkUser() {
    const username = localStorage.getItem('username');
    var logoutIcon= document.getElementsByClassName("logout");
    var iconUser = document.getElementsByClassName('user-icon');
    for (var i = 0; i < iconUser.length; i++) {
        if(username){
            iconUser[i].style.display='none';
            logoutIcon[i].style.display ='block';

        }
        else{
            iconUser[i].style.display='block';
            logoutIcon[i].style.display ='none';
        }
    }

}