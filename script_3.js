let number = prompt("Combien d'étages à la pyramide ?");
for (let count = 1; count <= number; count ++) {
  let space = " ";
	let block ="#";
  console.log(`${space.repeat(number - count) + block.repeat(count)}`);
  };