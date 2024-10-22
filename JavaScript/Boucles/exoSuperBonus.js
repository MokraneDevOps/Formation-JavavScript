// Fonction pour vérifier si un nombre est premier
const isPrime = (num) => {
    if (num < 2) return false; // Les nombres inférieurs à 2 ne sont pas premiers
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false; // Si le nombre est divisible par i, il n'est pas premier
    }
    return true; // Le nombre est premier
  }
  
  // Fonction pour afficher les nombres premiers jusqu'à un certain nombre
  const displayPrimes = (limit) => {
    for (let i = 0; i <= limit; i++) {
      if (isPrime(i)) {
        console.log(i); // Affiche le nombre s'il est premier
      }
    }
  }
  
  // Exemple d'utilisation
  const number = 50; // Remplace ce nombre par le nombre de ton choix
  displayPrimes(number);

  // Explication :
// isPrime : C'est une fonction qui vérifie si un nombre donné est premier. 
// Elle retourne false si le nombre est inférieur à 2, et utilise une boucle pour tester les diviseurs de 2 jusqu'à la racine carrée du nombre.
// displayPrimes : C'est la fonction principale qui parcourt tous les nombres de 0 à limit.
// Pour chaque nombre, elle appelle isPrime et affiche le nombre s'il est premier.
// Exemple d'utilisation : En appelant displayPrimes(50), la fonction affichera tous les nombres premiers entre 0 et 50.
  