const convert = (binaryString) => {
    let decimalValue = 0; // Initialise la valeur décimale à 0
    const length = binaryString.length; // Longueur de la chaîne binaire
  
    // Parcourt chaque chiffre de la chaîne binaire
    for (let i = 0; i < length; i++) {
      // Récupère le chiffre actuel (0 ou 1)
      const bit = binaryString[length - 1 - i]; // Prend le bit de droite à gauche
  
      // Si le bit est '1', on ajoute la puissance de 2 correspondante
      if (bit === '1') {
        decimalValue += Math.pow(2, i); // Ajoute 2 à la puissance i
      }
    }
  
    return decimalValue; // Renvoie la valeur décimale
  };
  
  // Exemples d'utilisation :
  console.log(convert('1'));          // Renvoie 1
  console.log(convert('10'));         // Renvoie 2
  console.log(convert('101'));        // Renvoie 5
  console.log(convert('101010'));     // Renvoie 42
  console.log(convert('1111101000')); // Renvoie 1000
  

  // Explication :

// Initialisation :
// decimalValue est initialisé à 0 pour stocker le résultat final.
// La longueur de la chaîne binaire est stockée dans length.

//Boucle for :
// On parcourt chaque bit de la chaîne binaire de droite à gauche.
// Pour chaque bit, on utilise length - 1 - i pour accéder au bon index (car le bit le plus à droite est le plus faible).

// Vérification du bit :
// Si le bit est '1', on calcule la puissance de 2 correspondante à sa position et on l'ajoute à decimalValue.
// Math.pow(2, i) calcule 2 puissance i

// Retourner la valeur :

// Après avoir traité tous les bits, on renvoie decimalValue, qui contient la valeur décimale.
