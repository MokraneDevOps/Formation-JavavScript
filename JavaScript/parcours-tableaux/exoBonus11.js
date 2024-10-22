// Fonction de permutation circulaire simple
const circularPermutation = (array) => {
    if (array.length === 0) return array;
  
    let lastElement = array.pop();
    array.unshift(lastElement);
  
    return array;
  };
  
  // Fonction pour réaliser une permutation circulaire de rang num
  const circularPermutationByNum = (array, num) => {
    for (let i = 0; i < num; i++) {
      array = circularPermutation(array); // Appel de la fonction précédente à chaque itération
    }
  
    return array;
  };
  
  // Tests de la fonction
  console.log(circularPermutationByNum([12, 'toto', 13, 'titi'], 2)); // affiche [13,'titi',12,'toto']
  console.log(circularPermutationByNum([12, 'toto', 13, 'titi'], 4)); // affiche [12,'toto',13,'titi'] (inchangé)

  
  // Explication :
// Fonction circularPermutationByNum :

// Prend en entrée un tableau et un nombre num qui détermine le nombre de permutations circulaires à effectuer.
// Utilise une boucle for pour appeler la fonction de permutation simple autant de fois que nécessaire.



