const removeVowels = (str) => {
    let newStr = '';
    
    // Parcourir chaque caractère de la chaîne
    for (let i = 0; i < str.length; i++) {
      // Si le caractère n'est pas un 'e', on l'ajoute à la nouvelle chaîne
      if (str[i] !== 'e') {
        newStr += str[i];
      }
    }
  
    return newStr; // Retourner la chaîne sans 'e'
  };
  
  // Tests de la fonction
  console.log(removeVowels('greta')); // affiche 'grta'
  console.log(removeVowels('repetition')); // affiche 'rptition'

  
  // Explication :
// Initialisation : La variable newStr est utilisée pour construire la nouvelle chaîne sans les caractères e.
// Boucle for : On parcourt la chaîne d'origine caractère par caractère.
// Si le caractère n'est pas un e, on l'ajoute à newStr.
// Si c'est un e, on l'ignore et on continue la boucle.
// Résultat : À la fin de la boucle, la chaîne sans les e est retournée.