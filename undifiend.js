//8 ways of get undifined
let a;
function b(a, b, c) {
  console.log(a, b, c);
}
const result = b(1, 2);
console.log(result);

// you should not do delete . Insted you can use splice to remove something from array
const array = [1, 2, 3, 4, 5, 6];
delete array[0];
console.log(array[1], array[6], array);

const x = undefined;
const y = null;
console.log(typeof x, typeof y);
