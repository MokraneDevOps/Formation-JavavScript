// Trier en ordre croissant
let array = [5, 3, 8, 4, 1];
array.sort((a, b) => a - b); // compare les valeurs de 'a' et 'b'
console.log(array); // Affiche [1, 3, 4, 5, 8]

// Trier en ordre décroissant
array.sort((a, b) => b - a);
console.log(array); // Affiche [8, 5, 4, 3, 1]



// Explication de sort() :
// Fonction de comparaison : sort() prend une fonction de comparaison comme argument. Cette fonction compare deux éléments à la fois (a et b).
// Si a - b est négatif, a est placé avant b (tri croissant).
// Si b - a est positif, b est placé avant a (tri décroissant).