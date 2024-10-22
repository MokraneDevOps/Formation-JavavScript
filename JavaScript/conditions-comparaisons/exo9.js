/* EXERCICE 08
  Objectif :
  Dans cet exercice vous devrez utiliser l'instruction `else if` afin d'afficher le message suivant :
  Ce fruit est une fraise
*/

let fruit = "fraise";

if (fruit === "citron") {
  console.log("Ce fruit est un citron");
} 
// Début de votre code
else if (fruit === "fraise") { // Vérifie si fruit est égal à "fraise"
  console.log("Ce fruit est une fraise"); // Affiche ce message si la condition est vraie
}
// Fin de votre code
else {
  console.log("Je ne connais pas ce fruit"); // Affiche ce message si aucune condition n'est vraie
}
