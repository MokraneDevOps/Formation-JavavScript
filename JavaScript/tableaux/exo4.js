const addToArray = (array, element, position) => {
    if (position < 0) {
      position = 0; // Si la position est négative, on commence à l'index 0
    } else if (position > array.length) {
      position = array.length; // Si la position est supérieure à la longueur du tableau, on l'ajoute à la fin
    }
  
    array.splice(position, 0, element); // Insère l'élément à la position spécifiée
  }
  
  const arr = ['pomme', 'poire'];
  const str = 'orange';
  
  // Exemple d'ajout à la position 1
  addToArray(arr, str, 1);
  console.log(arr); // Affichera ['pomme', 'orange', 'poire']
  
  // Exemple d'ajout à la fin
  addToArray(arr, 'banane', arr.length);
  console.log(arr); // Affichera ['pomme', 'orange', 'poire', 'banane']
  
  // Exemple d'ajout à la position 0
  addToArray(arr, 'kiwi', 0);
  console.log(arr); // Affichera ['kiwi', 'pomme', 'orange', 'poire', 'banane']
  