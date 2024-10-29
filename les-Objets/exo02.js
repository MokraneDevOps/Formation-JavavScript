/*
EXERCICE 02
  Objectif :
  Créer un objet `user` contenant les propriétés (clés) suivantes :
    - `name` ayant pour valeur `Farid`
    - `date of birth` ayant pour valeur `1987-02-14` (remarquez la présence d'espaces dans le nom de la clé)
*/

// Début de votre code
const user = {
    name: "Farid",
    "date of birth": "1987-02-14"
};
// Fin de votre code

console.log(user.name); // Doit afficher 'Farid'


// Explications :
// Création de l'objet : L'objet user est défini avec deux propriétés.
// Ajout de propriétés :
// name est une clé classique, donc elle peut être définie sans guillemets.
// date of birth, ayant des espaces, doit être entourée de guillemets pour être un nom de clé valide.
// Affichage : La ligne console.log(user.name); affichera la valeur de la propriété name, qui est 'Farid'.