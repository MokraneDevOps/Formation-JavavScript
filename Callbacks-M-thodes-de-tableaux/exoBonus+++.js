const myReduce = (array, callback, initialValue) => {
    let accumulator = initialValue !== undefined ? initialValue : array[0];
    let startIndex = initialValue !== undefined ? 0 : 1;

    for (let i = startIndex; i < array.length; i++) {
        accumulator = callback(accumulator, array[i], i, array);
    }

    return accumulator;
};

// Exemple d'utilisation
const numbers = [1, 2, 3, 4, 5];

// Somme des éléments du tableau
const sum = myReduce(numbers, (acc, curr) => acc + curr, 0);
console.log(sum); // 15

// Produit des éléments du tableau
const product = myReduce(numbers, (acc, curr) => acc * curr, 1);
console.log(product); // 120
