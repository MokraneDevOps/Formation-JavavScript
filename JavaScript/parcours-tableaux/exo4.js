const myArray = [1, 3, 5, 4];

const arraySum = array => {
  let sum = 0; // Initialiser la variable pour stocker la somme

  // Boucle pour parcourir chaque élément du tableau
  for (let i = 0; i < array.length; i++) {
    sum += array[i]; // Ajouter l'élément courant à la somme
  }

  return sum; // Retourner la somme totale
};

console.log(arraySum(myArray)); // affiche 13
console.log(arraySum([100, 200, 300, 400])); // affiche 1000



// Explication du code :
//Initialisation : La variable sum est initialisée à 0 pour stocker la somme des éléments.
//Boucle for : On parcourt chaque élément du tableau array.
//Addition : À chaque itération, l'élément courant est ajouté à sum.
//Retourner la somme : À la fin, la fonction retourne la somme totale des éléments du tableau.