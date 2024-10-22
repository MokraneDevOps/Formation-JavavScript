const howManyOccurences = (str, subStr) => {
    let count = 0;
    let subStrLength = subStr.length;
    
    // Parcourir la chaîne de caractères principale
    for (let i = 0; i <= str.length - subStrLength; i++) {
      let match = true;
      
      // Vérifier si la sous-chaîne correspond
      for (let j = 0; j < subStrLength; j++) {
        if (str[i + j] !== subStr[j]) {
          match = false;
          break;
        }
      }
      
      // Si correspondance trouvée, incrémenter le compteur
      if (match) {
        count++;
      }
    }
    
    return count;
  };
  
  // Exemples
  console.log(howManyOccurences("j'aime les fraises et les framboises !", "fr")); // retourne 2
  console.log(howManyOccurences("j'aime les fraises et les framboises !", "j'aime")); // retourne 1
  console.log(howManyOccurences("verser de l'eau dans un verre vert", "ver")); // retourne 3

  

  // Explication :
// Variables :

// count : compteur des occurrences trouvées.
// subStrLength : longueur de la sous-chaîne à chercher.
// Boucle principale :

// La boucle parcourt la chaîne principale str, vérifiant à chaque index si la sous-chaîne subStr correspond à une partie de la chaîne.

//Boucle imbriquée :

// Cette boucle interne vérifie caractère par caractère si une sous-chaîne correspond à partir de la position courante.
// Si tous les caractères correspondent, on incrémente count.

// Retour :

// Le nombre total d'occurrences de la sous-chaîne dans la chaîne principale est retourné.