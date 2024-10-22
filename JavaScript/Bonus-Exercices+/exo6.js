const trierTableau = (array, ordre = 'croissant') => {
    // Boucle pour passer plusieurs fois sur le tableau
    for (let i = 0; i < array.length; i++) {
      for (let j = 0; j < array.length - 1; j++) {
        // Si l'option est "croissant" et l'élément suivant est plus petit, on échange
        if (ordre === 'croissant' && array[j] > array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]]; // Échange des éléments
        }
        // Si l'option est "décroissant" et l'élément suivant est plus grand, on échange
        if (ordre === 'decroissant' && array[j] < array[j + 1]) {
          [array[j], array[j + 1]] = [array[j + 1], array[j]];
        }
      }
    }
    return array;
  };
  
  // Exemples d'utilisation :
  console.log(trierTableau([5, 3, 8, 4, 1], 'croissant')); // Renvoie [1, 3, 4, 5, 8]
  console.log(trierTableau([5, 3, 8, 4, 1], 'decroissant')); // Renvoie [8, 5, 4, 3, 1]

  

  // Explication :

// Deux boucles imbriquées :
// La première boucle (for (let i = 0; i < array.length; i++)) s'assure que l'on passe plusieurs fois sur tout le tableau.
// La deuxième boucle (for (let j = 0; j < array.length - 1; j++)) compare chaque paire d'éléments consécutifs et les échange si l'ordre doit être modifié.

// Échanges d'éléments :
// Si le tableau doit être trié de façon croissante (ordre === 'croissant'), on compare chaque élément avec le suivant et on les échange si l'élément actuel est plus grand.
// Si le tableau doit être trié de façon décroissante (ordre === 'decroissant'), on compare chaque élément avec le suivant et on les échange si l'élément actuel est plus petit.

// Retourne le tableau trié :
// Après avoir effectué les échanges, le tableau est trié soit en ordre croissant, soit en ordre décroissant, selon l'option choisie.