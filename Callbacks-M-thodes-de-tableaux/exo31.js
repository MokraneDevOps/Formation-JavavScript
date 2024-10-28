// Déclaration du tableau
const arr = [10, 3, 15, 0, 555];

// Fonction de tri par sélection (ordre croissant)
const selectionSortAsc = (array) => {
    const sortedArray = array.slice(); // Crée une copie du tableau d'origine
    const length = sortedArray.length;

    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (sortedArray[j] < sortedArray[minIndex]) {
                minIndex = j;
            }
        }

        // Échange des éléments
        if (minIndex !== i) {
            [sortedArray[i], sortedArray[minIndex]] = [sortedArray[minIndex], sortedArray[i]];
        }
    }

    return sortedArray;
};

// Fonction de tri par sélection (ordre décroissant)
const selectionSortDesc = (array) => {
    const sortedArray = array.slice(); // Crée une copie du tableau d'origine
    const length = sortedArray.length;

    for (let i = 0; i < length - 1; i++) {
        let maxIndex = i;

        for (let j = i + 1; j < length; j++) {
            if (sortedArray[j] > sortedArray[maxIndex]) {
                maxIndex = j;
            }
        }

        // Échange des éléments
        if (maxIndex !== i) {
            [sortedArray[i], sortedArray[maxIndex]] = [sortedArray[maxIndex], sortedArray[i]];
        }
    }

    return sortedArray;
};

// Tri par ordre croissant
const sortedAsc = selectionSortAsc(arr);
console.log("Ordre croissant :", sortedAsc);  // [0, 3, 10, 15, 555]

// Tri par ordre décroissant
const sortedDesc = selectionSortDesc(arr);
console.log("Ordre décroissant :", sortedDesc);  // [555, 15, 10, 3, 0]





// Explications

// Fonction selectionSortAsc :
// Cette fonction trie le tableau en ordre croissant.
// Elle parcourt chaque élément du tableau et trouve l'élément le plus petit dans le sous-tableau restant.
// Elle échange cet élément avec l'élément courant.

// Fonction selectionSortDesc :

// Semblable à la fonction précédente, mais elle trouve l'élément le plus grand pour trier en ordre décroissant.

// slice() :
// Utilisé pour créer une copie du tableau d'origine, afin de ne pas modifier le tableau original lors du tri.

// Échange d'Éléments :
// L'échange est effectué en utilisant la destructuration de tableau.