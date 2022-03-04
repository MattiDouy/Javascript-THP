let number = prompt("Factorielle de ? (enter any number)");
let factorial = 1;
for (let count = 1; count <= number; count ++) {
  factorial *= count
  };
console.log(`Le résultat est : ${factorial}`);