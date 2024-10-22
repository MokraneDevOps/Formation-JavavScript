// EXERCICE 6
const power = (base, exponent) => {
    let result = 1; // On initialise le résultat à 1
  
    // Début de votre code
    for (let i = 0; i < exponent; i++) { // On boucle exponent fois
      result *= base; // On multiplie le résultat par la base à chaque itération
    }
    // Fin de votre code
  
    return result; // On retourne le résultat final
  }
  
  console.log(power(3, 4)); // affiche 81
  console.log(power(3, 2)); // affiche 9
  console.log(power(2, 5)); // affiche 32
  console.log(power(5, 3)); // affiche 125

  
  // Explication :
// let result = 1; : On initialise une variable result à 1, car tout nombre élevé à la puissance de 0 est 1.
// for (let i = 0; i < exponent; i++) : On utilise une boucle pour multiplier la base exponent fois.
// result *= base; : À chaque itération, on multiplie result par base.
// return result; : On retourne le résultat final.