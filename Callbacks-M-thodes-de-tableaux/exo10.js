const sumOfEvenNumbers = (arr) => {
    // Filtrer les nombres pairs
    const evenNumbers = arr.filter(num => num % 2 === 0);
    // Calculer la somme des nombres pairs
    return evenNumbers.reduce((accumulator, current) => accumulator + current, 0);
};

// Test
console.log(sumOfEvenNumbers([1, 2, 3, 4, 5, 6])); // Résultat attendu : 12 (2 + 4 + 6)


// Explication :

//Fonction fléchée :
// La fonction sumOfEvenNumbers est définie comme une fonction fléchée qui prend un tableau arr en entrée.

//Filtrage des nombres pairs :
//La méthode filter est utilisée pour créer un nouveau tableau evenNumbers qui ne contient que les nombres pairs. La condition num % 2 === 0 vérifie si un nombre est pair.

//Calcul de la somme :
// La méthode reduce est utilisée pour calculer la somme des nombres dans le tableau evenNumbers.
// L'accumulateur (accumulator) est initialisé à 0 et il s'ajoute à chaque nombre pair (current).