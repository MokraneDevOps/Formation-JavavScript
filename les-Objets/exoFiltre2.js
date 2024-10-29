const ofAge = (arr) => {
    return arr.filter(person => person.age > 18);
  };
  
  // test
  console.log(ofAge([
    { name: "Angelina Jolie", age: 80 },
    { name: "Eric Jones", age: 2 },
    { name: "Paris Hilton", age: 5 },
    { name: "Kayne West", age: 16 },
    { name: "Bob Ziroll", age: 100 }
  ]));

  
  // Explication du code :
// filter() : Comme précédemment, cette méthode crée un nouveau tableau contenant tous les éléments qui satisfont la condition spécifiée.
// Condition de filtrage : Ici, nous vérifions si person.age est supérieur à 18.
// Résultat : Lorsque vous exécutez ce code, il affichera le tableau des personnes qui ont plus de 18 ans :