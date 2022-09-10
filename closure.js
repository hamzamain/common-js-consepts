/* function kithen() {
  let roast = 0;
  return function () {
    roast++;
    return roast;
  };
}
const firstServer = kithen();
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
console.log(firstServer());
 */

function init() {
  let a = "mozilla";
  let i = 0;
  return function () {
    i++;
    a = a + i;
    console.log(a);
    return a;
  };
}

const mozilla1 = init();
const mozilla2 = init();
mozilla1();
mozilla1();
mozilla1();
mozilla1();
mozilla1();
mozilla2();
mozilla1();
mozilla2();
