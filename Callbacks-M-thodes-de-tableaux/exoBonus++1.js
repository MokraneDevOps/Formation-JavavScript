const hasAtLeastTwoMatching = (arr, callback) => {
    let count = 0;

    // Boucle sur tous les éléments du tableau
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            // Vérifie si la callback retourne true pour ces deux éléments
            if (callback(arr[i], arr[j])) {
                // console.log(`Matching pair found: ${arr[i]} and ${arr[j]}`);
                count++;

                // Retourner true dès que deux paires correspondantes sont trouvées
                if (count >= 1) {
                    return true;
                }
            }
        }
    }
    
    // Retourner false si moins de deux paires correspondent
    return false;
};


// Vérification si deux chaînes sont des anagrammes
const areAnagrams = (str1, str2) => {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
};


// Exemple de callback : vérifie si deux chaînes sont égales
const areEqual = (str1, str2) => str1 === str2;

// Exemple de callback : vérifie si le premier nombre est le double du second
const isDouble = (num1, num2) => num1 === 2 * num2 || num2 === 2 * num1;

// Vérification si deux nombres sont premiers entre eux
const gcd = (a, b) => {
    if (!b) {
        return a;
    }
    return gcd(b, a % b);
};

const areCoprime = (num1, num2) => gcd(num1, num2) === 1;

// Exemple d'utilisation

const words = ["listen", "silent", "enlist", "hello"];
console.log("Anagrams:", hasAtLeastTwoMatching(words, areAnagrams)); // true

const strings = ["hello", "world", "hello", "test"];
console.log("Test avec strings:", hasAtLeastTwoMatching(strings, areEqual)); // true 

const numbers = [1, 2, 2, 4, 6, 8];
console.log("Test avec numbers:", hasAtLeastTwoMatching(numbers, isDouble)); // true 

const coprimeNumbers = [5, 9, 12, 15, 18];
console.log("Coprime numbers:", hasAtLeastTwoMatching(coprimeNumbers, areCoprime)); // true



// La fonction hasAtLeastTwoMatching
// Cette fonction prend deux paramètres :
// arr : un tableau d'éléments (peut contenir des nombres, des chaînes, etc.).
// callback : une fonction de comparaison qui prend deux éléments en paramètres et retourne true ou false.
// Elle retourne true si au moins une paire d'éléments satisfait la condition de callback, sinon elle retourne false.

// Étapes de la fonction

//Initialisation de count :
// Ce compteur sert à suivre le nombre de paires d'éléments qui répondent à la condition de callback.

// Double boucle pour comparer chaque paire :
// La première boucle (i) parcourt chaque élément du tableau.
// La deuxième boucle (j) commence juste après i (d’où j = i + 1), ce qui permet de comparer arr[i] avec chaque élément suivant dans le tableau, 
// évitant ainsi les comparaisons redondantes.

// Utilisation de la callback :
//On appelle callback avec chaque paire (arr[i], arr[j]).
// Si la callback retourne true, cela signifie que la paire satisfait la condition.
// Un message est affiché en console pour indiquer les paires correspondantes, et count est incrémenté.

// Condition de sortie :
// Dès que count atteint 1 (donc au moins une paire correspondante), la fonction retourne immédiatement true car la condition est remplie.
// Si la boucle se termine sans atteindre au moins une paire correspondante, la fonction retourne false.

// Exemples de callback
// Nous avons deux fonctions de rappel qui servent de conditions dans les exemples :

// areEqual : Vérifie si deux chaînes sont identiques
// isDouble : Vérifie si un nombre est le double de l'autre