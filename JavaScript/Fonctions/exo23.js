
// EXERCICE 23
const isMultipleOfThree = (number) => {
    return number % 3 === 0; // Retourne true si le nombre est un multiple de 3, sinon false
  };
  
  // Exemples d'utilisation
  console.log(isMultipleOfThree(9));   // Affiche true, car 9 est un multiple de 3
  console.log(isMultipleOfThree(10));  // Affiche false, car 10 n'est pas un multiple de 3
  console.log(isMultipleOfThree(15));  // Affiche true, car 15 est un multiple de 3
  console.log(isMultipleOfThree(7));   // Affiche false, car 7 n'est pas un multiple de 3
  