
const keyName = "name";

const user = {
  name: "Brice"
};

// Sans exécuter ce fichier, devinez lequel de ces 3 `console.log` est correct ?

// 1
console.log(user.keyName);

// 2
console.log(user[keyName]);

// 3
console.log(user["keyName"]);

// Vérifiez votre réponse


// Analysons chaque console.log pour déterminer lequel est correct :

// console.log(user.keyName);
// Cela renvoie undefined car keyName est une variable locale et n'est pas une propriété de l'objet user. 
// Pour accéder à la propriété name, il faudrait écrire user.name.

// console.log(user[keyName]);
// Ceci est correct. keyName est une variable qui contient la chaîne "name". 
// En utilisant la notation par crochets, on accède à la propriété name de l'objet user, ce qui affichera "Brice".

// console.log(user["keyName"]);
// Cela renvoie également undefined, car "keyName" est traité comme une chaîne de caractères littérale et n'est pas une clé existante dans l'objet user.
// Pour accéder à la propriété name, il faudrait utiliser user["name"].