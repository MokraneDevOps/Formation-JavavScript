const display4elementsLoop = (arr) => {
    // Utilisation d'une boucle for pour parcourir le tableau
    for (let i = 0; i < arr.length; i++) {
      console.log(arr[i]); // Affiche chaque élément sur une nouvelle ligne
    }
  };
  
  const arr = ['navet', 'brocolis', 'concombre', 'oignon'];
  
  // Appel de la fonction
  display4elementsLoop(arr); // doit afficher
  // navet
  // brocolis
  // concombre
  // oignon

  
  // Explication :
// Fonction display4elementsLoop : Cette fonction prend un tableau arr comme argument.
// Boucle for : La boucle parcourt chaque élément du tableau en utilisant l'index i. 
// La condition i < arr.length assure que nous ne dépassons pas la taille du tableau.
// console.log(arr[i]) : Pour chaque itération, elle affiche l'élément correspondant de l'index i.