/*
Write an anonymous function expression that stores a function in a variable called "laugh" and outputs the number of "ha"s that you pass in as an argument.

laugh(3);
Returns: hahaha!
*/


const laugh = function(num){
  let output = "";
  for(let i = 0; i < num; i++){
    output += "ha";
  }
  return  output + "!";
}

console.log(laugh(3)); // hahaha!
console.log(laugh(5)); // hahahahaha!