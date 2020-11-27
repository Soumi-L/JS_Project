// le nombre d'essais dans la partie courante
let essais = 0;
// le nombre total d'essais de toutes les parties
let nbEssais = 0;
// le nombre de paties jouées et terminées
let nbParties = 0;
// indique si on est en train de jouer une partie
let partieEnCours = true;
// le nombre à deviner
let secret = generer();
// le nombre d'essais du meilleur jeu
// Number.MAX_SAFE_INTEGER est la plus grande valeur
// entière possible
let meilleurJeu = Number.MAX_SAFE_INTEGER;

// vérifie la proposition de l'utilisateur et :
// - si la proposition est incorrecte, affiche la bonne
//   indication (trop petit ou trop grand)
// - sinon affiche le nombre d'essais qui ont été nécessaires
//   et mets à jour les statistiques

function verifier() {
    var propo = document.getElementById("proposition").value;
    if (partieEnCours) {
        if (propo == "" || Number.isNaN(propo)) {
            alert("Saisir un nombre svp !!!!");
        } else {
            essais++;
            nbEssais++;

            if (secret > propo) {
                alert("Non le nombre Plus petit");

            } else if (secret < propo) {
                alert(" Non le nombre plus grand ");

            } else if (secret == propo) {

                alert("Vous avez gagné");
                afficher();
                afficherStat();
                partieEnCours = false;


            } else {
                alert("saisir un nombre svp !!!");
            }
        }
    }
}

// si 'encore' est vrai, démarre une nouvelle partie
// sinon termine le jeu en affichant le message adéquat
function jouerEncore(encore) {

    if (encore == true) {
        document.getElementById("proposition").value = "";
        secret = generer();
        cacher();
        essais = 0;
        partieEnCours = true;
    } else {
        alert("Bye Bye .....");
    }

}

// affiche un message dans une couleur donnée
// dans l'élément prévu à cet effet
function afficher(message, couleur) {
    var question = document.getElementById("question");
    question.style.visibility = "visible";

}

function cacher() {
    var question = document.getElementById("question");
    question.style.visibility = "hidden";

}

// met à jour les statistiques
function afficherStat() {
    if (essais < meilleurJeu) {
        meilleurJeu = essais;
    }
    document.getElementById("proposition").value = "";
    document.getElementById("nbParties").innerHTML = nbParties;
    document.getElementById("nbMoyenEssais").innerHTML = (nbEssais / nbParties).toFixed(0);
    document.getElementById("meilleurJeu").innerHTML = meilleurJeu;
}

// retourne un nombre aléatoire dans l'intervalle [1, 100]
function generer() {
    nbParties++;
    return nb = Math.floor(Math.random() * 100);

}
