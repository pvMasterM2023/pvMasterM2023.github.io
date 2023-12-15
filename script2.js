document.addEventListener('DOMContentLoaded', () => {
    initialiserPage();
});

function initialiserPage() {
    const username = getCookie('username');
    if (username) {
        document.getElementById('userForm').style.display = 'none';
        document.getElementById('welcomeMessage').style.display = 'block';
        document.getElementById('usernameDisplay').textContent = username;
        incrementerCompteur();
    }
}

function verifierUtilisateur() {
    const inputUsername = document.getElementById('usernameInput').value;
    const cookieUsername = getCookie('username');

    if (inputUsername !== cookieUsername) {
        setCookie('username', inputUsername, 7);
        setCookie('compteurVisites', 0, 7);
    }

    initialiserPage();
}

function incrementerCompteur() {
    let compteur = getCookie('compteurVisites');
    compteur = compteur ? parseInt(compteur) + 1 : 1;
    setCookie('compteurVisites', compteur, 7);
    document.getElementById('visiteCount').textContent = compteur;
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

