function sum(a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p) {
  //   console.log(arguments[-1]);
  //   for (const num in arguments) {
  //     console.log(num, arguments[num]);
  //   }
  const args = [...arguments];
  console.log(args);
  const total = a + b + c;
  return total;
}
// console.log(arguments);
const retult = sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
// console.log(retult);

console.log(sum.length);
