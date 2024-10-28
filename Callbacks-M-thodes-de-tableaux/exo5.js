function contientPair(tab) {
    // Utiliser map pour transformer le tableau en un tableau de booléens
    const estPair = tab.map(num => num % 2 === 0);

    // Utiliser includes pour vérifier si au moins un élément est vrai
    return estPair.includes(true);
}

// Exemple d'utilisation
const tableau = [1, 3, 5, 7, 8];
const result = contientPair(tableau);
console.log(result); // true, car 8 est pair

const tableau2 = [1, 3, 5, 7];
const result2 = contientPair(tableau2);
console.log(result2); // false, car il n'y a pas de nombres pairs




// Explication :
// Fonction contientPair : La fonction prend en entrée un tableau tab.

// Utilisation de map : 
// La méthode map parcourt chaque élément du tableau et retourne un nouveau tableau où chaque élément est un booléen.
//  Pour chaque nombre dans le tableau d'origine, si le nombre est pair (num % 2 === 0), il renvoie true, sinon il renvoie false. 
// Par exemple, pour le tableau [1, 3, 5, 7, 8], le tableau résultant serait [false, false, false, false, true].

// Utilisation de includes :
// La méthode includes vérifie si le tableau estPair contient au moins un true. 
// Si c'est le cas, cela signifie qu'il y a au moins un nombre pair dans le tableau d'origine.

