document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('usernameForm');
    form.addEventListener('submit', handleFormSubmit);

    afficherMessage();
});

function handleFormSubmit(event) {
    event.preventDefault();
    const username = document.getElementById('username').value;
    if (username) {
        setCookie('username', username, 7);
        afficherMessage();
    }
}

function afficherMessage() {
    const username = getCookie('username');
    const messageElement = document.getElementById('message');
    if (username) {
        messageElement.textContent = `Bonjour, ${username}!`;
        document.getElementById('usernameForm').style.display = 'none';
    } else {
        messageElement.textContent = 'Bienvenue, visiteur!';
    }
}

function setCookie(nom, valeur, joursExpiration) {
    const date = new Date();
    date.setTime(date.getTime() + (joursExpiration * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = nom + "=" + valeur + ";" + expires + ";path=/";
}

function getCookie(nom) {
    const nomCookie = nom + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nomCookie) === 0) {
            return c.substring(nomCookie.length, c.length);
        }
    }
    return "";
}

