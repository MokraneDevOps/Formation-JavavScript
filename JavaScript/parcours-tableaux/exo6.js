// Fonction pour compter le nombre de 'e' dans une chaîne
const countE = (str) => {
    const arr = str.split(''); // Convertir la chaîne en tableau
    let count = 0; // Initialiser le compteur
  
    // Boucle pour parcourir le tableau
    for (let i = 0; i < arr.length; i++) {
      // Vérifier si l'élément courant est 'e'
      if (arr[i] === 'e') {
        count++; // Incrémenter le compteur
      }
    }
    
    return count; // Retourner le nombre de 'e'
  };
  
  // Test de la fonction
  console.log(countE("hello there")); // affiche 3
  console.log(countE("example")); // affiche 2
  
  // Bonus : Fonction pour compter les occurrences d'un caractère donné
  const countCharacter = (str, char) => {
    const arr = str.split(''); // Convertir la chaîne en tableau
    let count = 0; // Initialiser le compteur
  
    // Boucle pour parcourir le tableau
    for (let i = 0; i < arr.length; i++) {
      // Vérifier si l'élément courant est égal au caractère recherché
      if (arr[i] === char) {
        count++; // Incrémenter le compteur
      }
    }
    
    return count; // Retourner le nombre d'occurrences du caractère
  };
  
  // Tests de la fonction bonus
  console.log(countCharacter("hello there", 'e')); // affiche 3
  console.log(countCharacter("example", 'a')); // affiche 1
  console.log(countCharacter("banana", 'a')); // affiche 3
  console.log(countCharacter("greta", 'l')); // affiche 0

  

 // Explication du code :

 //countE :
//La fonction countE prend une chaîne str comme argument.
//On utilise split('') pour transformer la chaîne en tableau de caractères.
//Une boucle for parcourt chaque caractère du tableau. Si le caractère est un 'e', le compteur count est incrémenté.
//La fonction retourne le nombre total de 'e' trouvés.

//Bonus - countCharacter :
//Cette fonction prend deux arguments : la chaîne str et le caractère char à compter.
//La logique est similaire à celle de countE, mais on vérifie si le caractère courant est égal à char au lieu de 'e'.
//La fonction retourne le nombre d'occurrences de char dans la chaîne.