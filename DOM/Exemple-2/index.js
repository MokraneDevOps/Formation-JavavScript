// Sélection des éléments
const questionContainer = document.querySelector(".click_event");
console.log(questionContainer);

const btn1 = document.querySelector('#btn_1');
console.log(btn1);

const btn2 = document.querySelector('#btn_2');
console.log(btn2);

const pBonneReponse = document.querySelector('.bonne_reponse');
console.log(pBonneReponse);

const pMauvaiseReponse = document.querySelector('.mauvaise_reponse');
console.log(pMauvaiseReponse);

// Gestion des événements
btn1.addEventListener('click', () => {
    console.log("Click sur le bouton Paris");
    pBonneReponse.style.visibility = "visible";
    pMauvaiseReponse.style.visibility = "hidden";
    btn1.style.background = "green";
    btn2.style.background = "lightgray";
});

btn2.addEventListener('click', () => {
    console.log("Click sur le bouton Lyon");
    pBonneReponse.style.visibility = "hidden";
    pMauvaiseReponse.style.visibility = "visible";
    btn2.style.background = "red";
    btn1.style.background = "lightgray";
});

//questionContainer.addEventListener('click' , () => {
  //  questionContainer.style.backgroundColor = "yellow";
  //  questionContainer.style.border-radius = "20px";
//})