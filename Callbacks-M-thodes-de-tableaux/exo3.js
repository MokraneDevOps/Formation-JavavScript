const arr = [10, 3, 15, 0, 555];

// Tri par ordre croissant
const sortedAsc = arr.slice().sort((a, b) => a - b);
console.log("Ordre croissant :", sortedAsc);  // [0, 3, 10, 15, 555]

// Tri par ordre décroissant
const sortedDesc = arr.slice().sort((a, b) => b - a);
console.log("Ordre décroissant :", sortedDesc);  // [555, 15, 10, 3, 0]
