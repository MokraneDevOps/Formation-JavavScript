const flatten = (arr) => {
    return arr.reduce((accumulator, currentArray) => {
        return accumulator.concat(currentArray);
    }, []);
};

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6]


// Explication du code :

// La fonction flatten :
//Prend un tableau de tableaux (arr) comme argument.
// Utilise reduce() pour accumuler les éléments de chaque sous-tableau dans un tableau unique.

//reduce() :
// L'accumulateur (accumulator) commence comme un tableau vide [].
// Pour chaque tableau (currentArray) dans l'entrée, concat() est utilisé pour combiner l'accumulateur avec le tableau actuel.

// Sortie :
// La fonction retourne un tableau aplati contenant tous les éléments des sous-tableaux.