const pyramid = (tail) => {
    for (let i = 1; i <= tail; i++) {
      let spaces = ' '.repeat(tail - i);  // Crée les espaces avant les "X"
      let stars = 'X'.repeat(2 * i - 1);  // Crée les "X" pour chaque niveau
      console.log(spaces + stars);        // Affiche la ligne
    }
  }
  
  // Test de la fonction
  pyramid(5);
  // Affiche :
  //     X
  //    XXX
  //   XXXXX
  //  XXXXXXX
  // XXXXXXXXX
  
  pyramid(1);
  // Affiche :
  // X
  
  pyramid(3);
  // Affiche :
  //   X
  //  XXX
  // XXXXX
  pyramid(10);
  pyramid(50);


  

 // Explication:
// Boucle for : La boucle parcourt chaque niveau de la pyramide, de 1 à tail.
// spaces : Pour chaque niveau, la fonction crée un nombre d'espaces correspondant à la différence entre tail et l'indice courant i. Cela permet de centrer la pyramide.
// stars : Les "X" sont répétés un nombre de fois égal à 2 * i - 1, afin d'augmenter progressivement le nombre de "X" à chaque ligne.
// Affichage : On combine les espaces et les "X" pour chaque ligne, puis on les affiche 