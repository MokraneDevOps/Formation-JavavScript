const peopleWhoBelongToTheIlluminati = (arr) => {
    return arr.filter(person => person.member);
  };
  
  // test
  console.log(peopleWhoBelongToTheIlluminati([
    { name: "Angelina Jolie", member: true },
    { name: "Eric Jones", member: false },
    { name: "Paris Hilton", member: true },
    { name: "Kayne West", member: false },
    { name: "Bob Ziroll", member: true }
  ]));
  

  // Explication du code :
// filter() : Cette méthode crée un nouveau tableau contenant tous les éléments du tableau d'origine qui satisfont la condition spécifiée dans la fonction de rappel.
// Fonction de rappel : Dans ce cas, nous vérifions si person.member est true. Si c'est le cas, l'objet person est inclus dans le tableau retourné.
// Résultat : Lorsque vous exécutez ce code, il affichera le tableau des personnes qui sont membres, comme prévu :