/* EXERCICE 07
  Output :
  Ce fruit est une pomme
*/

let fruit;

// Début de votre code
fruit = "pomme"; // Assigne la valeur "pomme" à la variable fruit
// Fin de votre code

if (fruit === "poire") {
  console.log("Ce fruit est une poire");
} else if (fruit === "pomme") {
  // Il est possible d'enchaîner un `if` avec un `else if`
  console.log("Ce fruit est une pomme"); // Affiche ce message si fruit est égal à "pomme"
} else {
  console.log("Je ne connais pas ce fruit"); // Affiche ce message si fruit n'est ni "poire" ni "pomme"
}
