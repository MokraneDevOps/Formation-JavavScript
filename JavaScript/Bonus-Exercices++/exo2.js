const generateAnagrams = (str) => {
    const results = [];
  
    // Fonction récursive pour générer les anagrammes
    const permute = (arr, l, r) => {
      if (l === r) {
        results.push(arr.join(''));
      } else {
        for (let i = l; i <= r; i++) {
          // Échanger les caractères
          [arr[l], arr[i]] = [arr[i], arr[l]];
          // Appel récursif
          permute(arr, l + 1, r);
          // Échanger à nouveau pour revenir à l'état d'origine
          [arr[l], arr[i]] = [arr[i], arr[l]];
        }
      }
    };
  
    // Convertir la chaîne en tableau de caractères et appeler la fonction
    permute(str.split(''), 0, str.length - 1);
    return results;
  };
  
  // Exemple d'utilisation
  const anagrams = generateAnagrams('abc');
  console.log(anagrams);
  