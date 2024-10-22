const circularPermutation = (array) => {
    if (array.length === 0) return array; // Si le tableau est vide, on retourne directement le tableau
  
    // Retirer le dernier élément du tableau et le placer au début
    let lastElement = array.pop(); // Pop enlève le dernier élément du tableau
    array.unshift(lastElement); // Unshift place cet élément au début du tableau
  
    return array;
  };
  
  // Tests de la fonction
  console.log(circularPermutation([1, 2, 3])); // affiche [3,1,2]
  console.log(circularPermutation([12, 'toto', 13, 'titi'])); // affiche ['titi', 12, 'toto', 13]

  
  // Explication :
// Vérification du tableau : Si le tableau est vide, on retourne directement le tableau.
// pop() : Cette méthode enlève le dernier élément du tableau et le retourne.
// unshift() : Cette méthode ajoute l'élément retiré au début du tableau.
// Résultat : Le tableau est alors permuté circulairement.





