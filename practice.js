/* if ("true" === true) {
  console.log("true");
} else {
  console.log("false");
}
 */
/* const number = "50";

const ifNumber = (number) => {
  if (typeof number === "number") {
    console.log("value is a number");
  } else {
    console.log("not a number");
  }
};

ifNumber(number); */

/* let storeFalsyValue = true;
if (!storeFalsyValue) {
  console.log("Nothing to show");
} else {
  console.log("You are Amazing");
} */

const mathMeticks = (callbackFunction, number1 = 0, number2 = 0) => {
  if (callbackFunction) {
    const output = callbackFunction(number1, number2);
    console.log(output);
    return output;
  } else {
    console.log("invalid oparation");
  }
};

const add = (number1, number2) => {
  return number1 + number2;
};

const subtrack = (number1, number2) => {
  return number1 - number2;
};

const multiply = (number1, number2) => {
  return number1 * number2;
};

const divide = (number1, number2) => {
  return number1 / number2;
};

const modulus = (number1, number2) => {
  return number1 % number2;
};

// const math = mathMeticks(modulus, 10, 1);
let p = "Javascript";
let q = p;
p = "React";
console.log(q);
