// FIZZ BUZZ - INTERVIEW

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz"); // Pour les multiples de 3 et 5
    } else if (i % 3 === 0) {
      console.log("Fizz"); // Pour les multiples de 3
    } else if (i % 5 === 0) {
      console.log("Buzz"); // Pour les multiples de 5
    } else {
      console.log(i); // Pour tous les autres nombres
    }
  }

  


  // Explication :
// for (let i = 1; i <= 100; i++) : On boucle de 1 à 100.
// if (i % 3 === 0 && i % 5 === 0) : On vérifie si i est un multiple de 3 et de 5 en utilisant l'opérateur modulo (%). Si c'est le cas, on affiche "FizzBuzz".
// else if (i % 3 === 0) : Si i est un multiple de 3, on affiche "Fizz".
// else if (i % 5 === 0) : Si i est un multiple de 5, on affiche "Buzz".
// else : Pour tous les autres nombres, on affiche simplement la valeur de i.