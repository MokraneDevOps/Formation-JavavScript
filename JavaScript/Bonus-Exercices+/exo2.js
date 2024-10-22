const decomposeNumber = (num) => {
    const result = [];
    
    for (; num > 0; num = Math.floor(num / 10)) {
      const digit = num % 10;  // Obtenir le dernier chiffre
      result.unshift(digit);   // Ajouter le chiffre au début du tableau
    }
  
    return result;
  }
  
  // Test de la fonction
  console.log(decomposeNumber(42)); // affiche [4, 2]
  console.log(decomposeNumber(1234)); // affiche [1, 2, 3, 4]
  console.log(decomposeNumber(9876)); // affiche [9, 8, 7, 6]
  console.log(decomposeNumber(10001)); // affiche [1, 0, 0, 0, 1]
  

  // Explication:
// Initialisation : Pas besoin d'initialiser une variable d'itération, on commence directement avec num comme la variable qu'on manipule.
// Condition : La condition est que tant que num est supérieur à 0, la boucle continue.
// Incrémentation : On utilise Math.floor(num / 10) pour diviser num par 10 à chaque itération, ce qui "enlève" le dernier chiffre du nombre.
