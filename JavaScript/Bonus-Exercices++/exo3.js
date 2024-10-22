const factorial = (n) => {
    // Vérifie si n est inférieur à 0
    if (n < 0) {
      throw new Error("La factorielle n'est pas définie pour les nombres négatifs.");
    }
    // Condition de base : la factorielle de 0 est 1
    if (n === 0) {
      return 1;
    }
    // Appel récursif
    return n * factorial(n - 1);
  };
  
  // Exemples d'utilisation
  console.log(factorial(5)); // Affiche 120
  console.log(factorial(0)); // Affiche 1
  console.log(factorial(6)); // Affiche 720
  