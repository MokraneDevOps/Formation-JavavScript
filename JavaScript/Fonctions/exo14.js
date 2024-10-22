/*
EXERCICE 14
  Pas de code à écrire ici.
  Seulement de la compréhension.
*/

const sum = (a, b) => {
    const total = a + b;
    return total; // Ici, l'instruction `return` permet à la fonction `sum` de communiquer la valeur de `total`. Cette valeur sera stocké au moment de l'appel à `sum` dans une variable nommée `result`.
  };
  
  const result1 = sum(10, 20); // Ici, nous récupérons ce qui retourné par la fonction sum avec 10 et 20 en argument
  const result2 = sum(50, 100); // Ici, nous récupérons ce qui retourné par la fonction sum avec 50 et 100 en argument
  const result3 = sum(100, 200); // Ici, nous récupérons ce qui retourné par la fonction sum avec 100 et 200 en argument
  
  console.log(result1); // affichons le premier resultat
  console.log(result2); // affichons le second resultat
  console.log(result3); // affichons le troieiem resultat
  