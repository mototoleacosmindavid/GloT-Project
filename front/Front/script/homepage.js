const textHello = document.getElementById("textHelloUser");

document.addEventListener("DOMContentLoaded", () => {
    displayUsername();
});


function displayUsername() {
    const username = localStorage.getItem("username");
    if (username) {
        textHello.innerHTML = "Salut, " + username;
    }

}

