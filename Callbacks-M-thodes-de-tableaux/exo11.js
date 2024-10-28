 //Fonction qui récupère tous les nombres impairs d'un tableau
function getOddNumbers(arr) {
    // Utiliser filter pour créer un nouveau tableau avec uniquement les nombres impairs
    return arr.filter(isOdd);
}

// Fonction qui vérifie si un nombre est impair
function isOdd(num) {
    return num % 2 !== 0; // Retourne true si le nombre est impair
}

// Exemple d'utilisation
const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // Renommé en myNumbers
const oddNumbers = getOddNumbers(myNumbers);

console.log(oddNumbers); // Affiche : [1, 3, 5, 7, 9]



// Explications :
// getOddNumbers(arr) : Cette fonction prend un tableau arr et utilise la méthode filter pour créer un nouveau tableau qui contient uniquement les nombres impairs, en passant chaque élément à la fonction isOdd.
// isOdd(num) : Cette fonction vérifie si un nombre est impair (c'est-à-dire qu'il n'est pas divisible par 2).
// Le tableau résultant oddNumbers contiendra uniquement les nombres impairs extraits du tableau d'origine.