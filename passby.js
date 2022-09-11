//primitive type are pass by value

const num1 = 5;
const num2 = 7;

function multiply(a, b) {
  a = 27;
  const retult = a * b;
  return retult;
}

console.log(num1);
const output = multiply(num1, num2);
console.log(output);
console.log(num1);

// Object and Array are pass by reference
let student1 = { name: "jalil", partner: "barsh" };
let student2 = { name: "raj", partner: "anika" };

function makeMovie(couple1, couple2) {
  couple1.name = "ononto";
  couple2.partner = "mim";
}

console.log(student1, student2);
makeMovie(student1, student2);
console.log(student1, student2);
