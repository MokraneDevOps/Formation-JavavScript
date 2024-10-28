const fiveCharactersOrFewerOnly = (arr) => {
    return arr.filter(item => item.length <= 5);
};

// Test
console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); 
// Résultat attendu : ["by", "dog", "wolf", "eaten"]


// Explication :

// Fonction fléchée :
// La fonction fiveCharactersOrFewerOnly est définie comme une fonction fléchée qui prend un tableau arr en entrée.

// Utilisation de filter :
//La méthode filter crée un nouveau tableau contenant uniquement les éléments pour lesquels la fonction de rappel (callback) renvoie true.
// Dans ce cas, pour chaque élément item du tableau arr, on vérifie si sa longueur est inférieure ou égale à 5 (item.length <= 5).