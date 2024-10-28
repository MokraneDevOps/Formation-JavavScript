const totalVotes = (arr) => {
    // Filtrer les votants qui ont voté et retourner leur nombre
    return arr.filter(voter => voter.voted).length;
};

const voters = [
    { name: 'Bob',   age: 30, voted: true },
    { name: 'Jake',  age: 32, voted: true },
    { name: 'Kate',  age: 25, voted: false },
    { name: 'Sam',   age: 20, voted: false },
    { name: 'Phil',  age: 21, voted: true },
    { name: 'Ed',    age: 55, voted: true },
    { name: 'Tami',  age: 54, voted: true },
    { name: 'Mary',  age: 31, voted: false },
    { name: 'Becky', age: 43, voted: false },
    { name: 'Joey',  age: 41, voted: true },
    { name: 'Jeff',  age: 30, voted: true },
    { name: 'Zack',  age: 19, voted: false }
];

console.log(totalVotes(voters)); // 7


// Explication :

// Fonction totalVotes :
// La fonction prend un tableau d'objets arr en entrée.

//Filtrage des votants :
//La méthode filter est utilisée pour créer un nouveau tableau contenant uniquement les objets des votants dont la propriété voted est true.
//La méthode length est ensuite utilisée pour obtenir le nombre d'éléments dans le tableau filtré, ce qui correspond au nombre de votants.
