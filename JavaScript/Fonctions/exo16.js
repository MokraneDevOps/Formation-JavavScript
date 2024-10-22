/* EXERCICE 16
  Dans cet exercice vous devrez appeler trois fois la fonction sum avec 3 paramètres afin d'afficher 3 résultats différents.
*/

const sum = (a, b, c) => {
    return a + b + c; // Renvoie la somme des trois paramètres
  };
  
  // Déclaration des variables pour stocker les résultats
  let result1; // Pour stocker le premier résultat
  let result2; // Pour stocker le deuxième résultat
  let result3; // Pour stocker le troisième résultat
  
  // Début de votre code
  result1 = sum(10, 15, 10); // Appel de la fonction avec des paramètres qui donneront 35
  result2 = sum(30, 40, 30); // Appel de la fonction avec des paramètres qui donneront 100
  result3 = sum(1, 2, 4);    // Appel de la fonction avec des paramètres qui donneront 7
  // Fin de votre code
  
  console.log(result1); // Doit afficher `35` dans le terminal
  console.log(result2); // Doit afficher `100` dans le terminal
  console.log(result3); // Doit afficher `7` dans le terminal
  