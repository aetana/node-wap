const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});
/*
//Answer for the 1
readline.question("What is your name? ", (name) => {
  console.log(`Welcome ${name}`);
  readline.question(`How old are you, ${name}? :`, (age) => {
    if (age < 16) {
      console.log(`${name} , you are not allowed to drive in Iowa!`);
    } else {
      console.log(`${name} , you're allowed to get a drivers license in Iowa!`);
    }
    readline.close();
  });
});
*/
//Answer for 2
var sum = 0;
function getNumber() {
  readline.question("Enter a number? ", (num) => {
    if (num == "stop"){
      readline.close();
      return
    }
    console.log(sum+=parseInt(num));
    getNumber();
  });
}

console.log("The second solution. ");
getNumber();
