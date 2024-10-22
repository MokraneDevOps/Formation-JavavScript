

const sum = (a, b) => {
    const total = a + b;
    return total; // Renvoie la somme des deux paramètres
  };
  
  let result1; // Variable pour stocker le premier résultat
  let result2; // Variable pour stocker le deuxième résultat
  const num1 = 15; // Premier nombre
  const num2 = 5;  // Deuxième nombre
  const num3 = 1;  // Troisième nombre
  const num4 = 2;  // Quatrième nombre
  
  // Début de votre code
  result1 = sum(num1, num2); // Appel de la fonction avec num1 et num2
  result2 = sum(num3, num4); // Appel de la fonction avec num3 et num4
  // Fin de votre code
  
  console.log(result1); // Doit afficher `20` dans le terminal
  console.log(result2); // Doit afficher `3` dans le terminal
  