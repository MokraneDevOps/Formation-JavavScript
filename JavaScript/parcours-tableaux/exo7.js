const biggestNum = (array) => {
    // Initialiser la variable max avec le premier élément du tableau
    let max = array[0];
  
    // Parcourir le tableau avec une boucle for
    for (let i = 1; i < array.length; i++) {
      // Si l'élément actuel est plus grand que max, on met à jour max
      if (array[i] > max) {
        max = array[i];
      }
    }
  
    return max; // Retourner le plus grand nombre trouvé
  };
  
  // Tests de la fonction
  console.log(biggestNum([1, 18, 3, 5])); // affichera 18
  console.log(biggestNum([1, 1, 3, 5])); // affichera 5
  console.log(biggestNum([10, 24, 3, 56, 1])); // affichera 56
  console.log(biggestNum([-1, -3, -5, 0])); // affichera 0
  


  // Explication :
// Initialisation : On initialise la variable max avec la première valeur du tableau. Cela nous permet d'avoir une base de comparaison.
// Boucle for : La boucle commence à l'indice 1 (le deuxième élément du tableau), et à chaque itération, elle compare l'élément actuel avec la valeur stockée dans max.
// Si l'élément actuel est plus grand que max, on met à jour max avec cette nouvelle valeur.
// Résultat : À la fin de la boucle, max contiendra le plus grand nombre trouvé dans le tableau.