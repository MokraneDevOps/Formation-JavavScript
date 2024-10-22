// EXERCICE 4
const factorielle = (num) => {
    let result = 1; // On initialise le résultat à 1, car la factorielle de 0 est 1
  
    // Utilisation d'une boucle for pour calculer la factorielle
    for (let i = 1; i <= num; i++) {
      result *= i; // On multiplie result par i à chaque itération
    }
  
    return result; // On retourne le résultat final
  };
  
  console.log(factorielle(7)); // doit afficher 5040

  
  // Explication :
// let result = 1; : On initialise une variable result à 1. Cela servira à accumuler le produit des nombres.
// for (let i = 1; i <= num; i++) : On boucle de 1 à num inclus.
// result *= i; : On multiplie result par i à chaque itération pour calculer la factorielle.
// return result; : À la fin de la boucle, on retourne la valeur de result, qui est la factorielle de num.
// En exécutant console.log(factorielle(7));, cela affichera 5040, qui est la factorielle de 7 (c'est-à-dire  7×6×5×4×3×2×1).