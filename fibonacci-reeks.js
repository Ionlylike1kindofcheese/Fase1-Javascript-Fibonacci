function steps(numA,numB) {
  let numC = numA + numB;
  console.log(numA+" + "+numB+" = "+numC);
  return numC;
}

let numA = 1;
let numB = 1;

for (let count = 1; count <= 20; count++) {
  let numC = steps(numA,numB);
  numA = numB;
  numB = numC;
}