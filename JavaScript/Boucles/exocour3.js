// EXERCICE COURS 3
for (let i = 0; i <= 100; i++) {
    if (i % 11 === 0 || i % 13 === 0) {
      console.log(i);
    }
  }

  
  // Explication :
// let i = 0 : On initialise la variable i à 0.
// i <= 100 : La boucle continue tant que i est inférieur ou égal à 100.
// i++ : On incrémente i de 1 à chaque itération.
// i % 11 === 0 : On vérifie si i est un multiple de 11.
// i % 13 === 0 : On vérifie si i est un multiple de 13.
// onsole.log(i) : Si l'une des conditions est vraie (multiple de 11 ou 13), on affiche i.
