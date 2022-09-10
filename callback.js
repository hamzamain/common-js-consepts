function greeting(functionName, name) {
  const taka = functionName(name);
  //   console.log(taka);
}

function greetingEvening(name) {
  console.log("good evening " + name);
}

function greetingMorning(name) {
  console.log("good morning " + name);
  return 500;
}
function greetingNight(name) {
  console.log("good night " + name);
}

greeting(greetingMorning, "kamal");
greeting(greetingMorning, "jamal");
greeting(greetingEvening, "kashem");
greeting(greetingNight, "mehedi hasan hawladar");
