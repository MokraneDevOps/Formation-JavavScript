const isAnagram = (str1, str2) => {
    // On nettoie les chaînes : suppression des espaces et mise en minuscule
    const cleanStr1 = str1.toLowerCase().replace(/\s+/g, '');
    const cleanStr2 = str2.toLowerCase().replace(/\s+/g, '');
  
    // Si les longueurs sont différentes, ce n'est pas un anagramme
    if (cleanStr1.length !== cleanStr2.length) {
      return false;
    }
  
    // On trie les lettres de chaque chaîne et on compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  
  // Exemples d'utilisation
  console.log(isAnagram('listen', 'silent')); // true
  console.log(isAnagram('hello', 'world')); // false
  console.log(isAnagram('Debit Card', 'Bad Credit')); // true
  console.log(isAnagram('mary', 'army')); // true
  console.log(isAnagram('rat', 'car')); // false
  console.log(isAnagram('Dormitory', 'Dirty room')); // true


  // Explication :
// Nettoyage des chaînes : On utilise la méthode toLowerCase() pour ne pas être sensible à la casse, et replace(/\s+/g, '') pour ignorer les espaces.
// Comparaison des longueurs : Si les chaînes n'ont pas le même nombre de caractères, elles ne peuvent pas être des anagrammes.
// Tri et comparaison : On trie les lettres de chaque chaîne avec split(''), sort(), et join(''), puis on compare les deux chaînes triées.
