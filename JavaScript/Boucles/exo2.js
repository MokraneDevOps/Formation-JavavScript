// EXERCICE 2
const generateString = (height) => {
    let str = "";
  
    // Début de votre code
    for (let i = 0; i < height; i++) {
      str += "o---o\n"; // Ajoute "o---o" suivi d'un retour à la ligne
    }
    // Fin de votre code
  
    return str;
  };
  
  console.log(generateString(4)); // Affiche "o---o" 4 fois sur des lignes séparées


 // Explication :
// let str = ""; : On initialise une chaîne vide pour construire le résultat.
// for (let i = 0; i < height; i++) : On boucle de 0 jusqu'à height - 1.
// str += "o---o\n"; : On ajoute la chaîne "o---o" suivie d'un retour à la ligne (\n) à chaque itération.
// return str; : La chaîne finale, contenant "o---o" répété, est renvoyée.
  