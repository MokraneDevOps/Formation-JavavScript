const isPalindrome = (str) => {
    // Supprimer les espaces et convertir la chaîne en minuscule
    const cleanStr = str.toLowerCase().replace(/\s+/g, '');
  
    // Comparer la chaîne originale avec sa version inversée
    const reversedStr = cleanStr.split('').reverse().join('');
    
    return cleanStr === reversedStr;
  }
  
  console.log(isPalindrome('kayak')); // Affiche true
  console.log(isPalindrome('Bonjour')); // Affiche false
  console.log(isPalindrome('A man a plan a canal Panama')); // Affiche true (en ignorant les espaces et la casse)
  console.log(isPalindrome('Ana')); // Affiche true


  // Explication :
// Conversion en minuscule et suppression des espaces :
// On convertit la chaîne de caractères en minuscules pour que la comparaison ne soit pas sensible à la casse, et on retire les espaces avec replace(/\s+/g, '') pour ne pas les prendre en compte.

// Inversion de la chaîne :
// On utilise split('') pour transformer la chaîne en tableau de caractères, reverse() pour inverser le tableau, et join('') pour recréer une chaîne de caractères à partir du tableau inversé.

// Comparaison :
// On compare la chaîne originale nettoyée avec sa version inversée. Si elles sont identiques, la fonction retourne true (c'est un palindrome), sinon false.

// Exemples :
// "kayak" est un palindrome, donc la fonction retourne true.
// "Bonjour" n'est pas un palindrome, donc la fonction retourne false.
// "A man a plan a canal Panama" est un palindrome (sans tenir compte des espaces et de la casse), donc la fonction retourne true.