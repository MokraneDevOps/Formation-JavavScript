/*
EXERCICE 03
  Objectif :
  Créer un objet `message` contenant les propriétés (clés) suivantes :
    - `text` ayant pour valeur `Hello, how are you?`
    - `date` ayant pour valeur `2019-01-11`
*/

// Début de votre code
const message = {
    text: "Hello, how are you?",
    date: "2019-01-11"
};
// Fin de votre code

const keyName = "text";

// Notez la présence de crochets dans la ligne suivante. Les crochets ne sont pas utilisés que pour les tableaux.
console.log(message[keyName]); // Doit afficher `Hello, how are you?`


// Explications :
// Création de l'objet : L'objet message est défini avec deux propriétés : text et date.
// Accès à la propriété : La valeur de text est récupérée en utilisant la syntaxe de crochets message[keyName], où keyName contient la chaîne "text".
// Affichage : La ligne console.log(message[keyName]); affichera la valeur de la propriété text, qui est 'Hello, how are you?'