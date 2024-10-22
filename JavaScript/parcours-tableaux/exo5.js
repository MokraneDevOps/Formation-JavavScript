const searchElement = (array, str) => {
    // Boucle pour parcourir chaque élément du tableau
    for (let i = 0; i < array.length; i++) {
      // Vérifier si l'élément courant est égal à la chaîne de caractères
      if (array[i] === str) {
        return true; // Retourner true si trouvé
      }
    }
    return false; // Retourner false si non trouvé
  };
  
  console.log(searchElement(['simon','malika','lilian','hideya','francis'],'hideya')); // affiche TRUE
  console.log(searchElement(['simon','malika','lilian'],'simon')); // affiche TRUE
  console.log(searchElement(['simon','malika','lilian','hideya','francis'],'pierre')); // affiche FALSE
  
  // Bonus : modification de la fonction pour retourner la position
  const searchElementWithIndex = (array, str) => {
    // Boucle pour parcourir chaque élément du tableau
    for (let i = 0; i < array.length; i++) {
      // Vérifier si l'élément courant est égal à la chaîne de caractères
      if (array[i] === str) {
        return i; // Retourner l'index si trouvé
      }
    }
    return -1; // Retourner -1 si non trouvé
  };
  
  console.log(searchElementWithIndex(['simon','malika','lilian'],'lilian')); // retourne 2
  console.log(searchElementWithIndex(['simon','malika','lilian'],'pierre')); // retourne -1

  
  // Explication du code :
// Boucle for : On parcourt chaque élément du tableau array.
// Condition if : On vérifie si l'élément courant est égal à str.
// Retourner true ou false : Si on trouve une correspondance, on retourne true. Si la boucle se termine sans trouver de correspondance, on retourne false.
// Bonus : La version searchElementWithIndex modifie légèrement la logique pour retourner l'index de l'élément trouvé ou -1 si non trouvé.
