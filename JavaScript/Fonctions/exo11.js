/*
EXERCICE 11
  Dans cet exercice vous devrez afficher dans le terminal :
  Étape 1
  Étape 2
*/

const secondStep = () => {
    console.log("Étape 2");
  };
  
  const firstStep = () => {
    console.log("Étape 1");
    secondStep(); // Appel de la fonction secondStep pour afficher "Étape 2"
  };
  
  // Début de votre code
  firstStep(); // Appel de la fonction firstStep
  // Fin de votre code
  