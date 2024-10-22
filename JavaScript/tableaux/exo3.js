const sumFirstLast = array => {
    // début de votre code ici
    return array[0] + array[array.length - 1];
    // fin de votre code ici
  }
  
  console.log(sumFirstLast([1, 3, 5, 2, 5])); // affiche 6
  console.log(sumFirstLast([4, 3, 10])); // affiche 14
  console.log(sumFirstLast(['gre', 3, 'ta'])); // affiche 'greta'
  console.log(sumFirstLast([1, 3])); // affiche 4
  

  // Explication :
// array[0] te donne le premier élément du tableau.
// array[array.length - 1] te donne le dernier élément du tableau.
// Ensuite, tu retournes la somme (ou la concaténation si ce sont des chaînes de caractères) de ces deux éléments.
