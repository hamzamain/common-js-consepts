/* 
truty:
1.true
2.any number (+ve, or -ve) is true exept Ziro(0)
3.any string exept or other then ('') empty string
4."0", "false", "null", "undifined"
5.{} ---->> empty Object
6.[] ---->> empty Array

falsy:
1.false
2.Ziro(0)
3.Empty string ('')
4.undifined
5.null

*/

const x = [];
if (x) {
  console.log("value of x is truty");
} else {
  console.log("value of x is falsy");
}

//Optional
// check value is falsy or not (NOTE:falsy mean any false value like ["", null, 0]);

const Y = 0;
if (!!!!!!Y) {
  console.log("value of Y is falsy");
}
