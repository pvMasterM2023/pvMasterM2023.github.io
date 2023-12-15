document.addEventListener('DOMContentLoaded', (event) => {
    incrementerCompteur();
    afficherCompteur();
});

function obtenirCompteur() {
    var compteur = lireCookie("compteurVisites");
    return compteur ? parseInt(compteur) : 0;
}

function incrementerCompteur() {
    var compteur = obtenirCompteur();
    compteur++;
    document.cookie = "compteurVisites=" + compteur + ";path=/";
}

function afficherCompteur() {
    var compteur = obtenirCompteur();
    document.getElementById("visiteCount").innerText = compteur;
}

function resetCompteur() {
    document.cookie = "compteurVisites=0;path=/";
    afficherCompteur();
}

function lireCookie(nom) {
    var nomCookie = nom + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(nomCookie) == 0) {
            return c.substring(nomCookie.length, c.length);
        }
    }
    return "";
}

