// Fonction qui retire tous les nombres pairs d'un tableau
function removeEvenNumbers(arr) {
    return arr.filter(function(num) {
        return num % 2 !== 0; // Garder seulement les nombres impairs
    });
}

// Exemple d'utilisation
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const oddNumbers = removeEvenNumbers(numbers);

console.log(oddNumbers); // Affiche : [1, 3, 5, 7, 9]



// Explications :
// La fonction removeEvenNumbers prend un tableau arr en entrée.
// Elle utilise la méthode filter pour créer un nouveau tableau qui ne contient que les nombres qui ne sont pas pairs (num % 2 !== 0).
// Le tableau résultant contient donc uniquement les nombres impairs.



