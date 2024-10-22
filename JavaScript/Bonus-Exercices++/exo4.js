const fibonacci = (n) => {
    // Vérifie si n est inférieur à 0
    if (n < 0) {
      throw new Error("L'indice doit être un nombre entier positif.");
    }
    // Condition de base : les deux premières valeurs de la suite de Fibonacci
    if (n === 0) {
      return 0; // F(0) = 0
    } else if (n === 1) {
      return 1; // F(1) = 1
    }
    // Appel récursif pour les autres valeurs
    return fibonacci(n - 1) + fibonacci(n - 2);
  };
  
  // Exemples d'utilisation
  console.log(fibonacci(0)); // Affiche 0
  console.log(fibonacci(1)); // Affiche 1
  console.log(fibonacci(2)); // Affiche 1
  console.log(fibonacci(3)); // Affiche 2
  console.log(fibonacci(4)); // Affiche 3
  console.log(fibonacci(5)); // Affiche 5
  console.log(fibonacci(6)); // Affiche 8
  console.log(fibonacci(10)); // Affiche 55
  