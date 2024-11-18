// Sélection des éléments
const questionContainer = document.querySelector(".click_event");
console.log(questionContainer);

const btn1 = document.querySelector("#btn_1");
console.log(btn1);

const btn2 = document.querySelector("#btn_2");
console.log(btn2);

const pBonneReponse = document.querySelector(".bonne_reponse");
console.log(pBonneReponse);

const pMauvaiseReponse = document.querySelector(".mauvaise_reponse");
console.log(pMauvaiseReponse);

// Fonction pour désactiver les boutons
function disableButtons() {
    btn1.disabled = true;
    btn2.disabled = true;
}

// Gestion des événements pour les boutons
btn1.addEventListener("click", () => {
    console.log("Click sur le bouton Paris");
    pBonneReponse.style.visibility = "visible";
    pMauvaiseReponse.style.visibility = "hidden";
    btn1.style.background = "green";
    btn2.style.background = "lightgray";
    disableButtons(); // Désactiver les boutons après le clic
});

btn2.addEventListener("click", () => {
    console.log("Click sur le bouton Lyon");
    pBonneReponse.style.visibility = "hidden";
    pMauvaiseReponse.style.visibility = "visible";
    btn2.style.background = "red";
    btn1.style.background = "lightgray";
    disableButtons(); // Désactiver les boutons après le clic
});

// [event mousemove] Ajouter un gestionnaire d'événement pour le mouvement de la souris
const mousemove = document.querySelector(".mousemove");
console.log(mousemove);

if (mousemove) {
    window.addEventListener("mousemove", (e) => {
        mousemove.style.left = `${e.pageX}px`;
        mousemove.style.top = `${e.pageY}px`;
    });
}

// [event keypress] Ajouter un gestionnaire d'événement pour la touche appuyée
const keypress = document.querySelector(".keypress");
const key = document.querySelector(".key");
console.log(key);

// Charger le fichier audio
const audio = new Audio("./Exemple-5/CRWDCheer_Cris et applaudissements d ados 2 (ID 0237)_LS.mp3");

document.addEventListener("keypress", (e) => {
    console.log(e);
    if (key) {
        key.textContent = e.key; // Affiche la touche pressée
    }

    // Changement de couleur selon la touche pressée
    if (e.key === "1") {
        questionContainer.style.background = "pink";
    } else if (e.key === "2") {
        questionContainer.style.background = "yellow";
    } else if (e.key === "3") {
        questionContainer.style.background = "blue";
    } else {
        questionContainer.style.background = "red";
        audio.play(); // Jouer l'audio si la touche ne correspond pas
    }
});

