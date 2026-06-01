/*
Write a series of conditional statements that:

- Prints "not a group" if musicians is less than or equal to 0
- Prints "solo" if musicians is equal to 1
- Prints "duet" if musicians is equal to 2
- Prints "trio" if musicians is equal to 3
- Prints "quartet" if musicians is equal to 4
- Prints "this is a large group" if musicians is greater than 4

*/

let numOfGroup = 0;
let message = "";

if(numOfGroup <= 0){
  mesage =  "not a group" ;
}else{
  switch(numOfGroup){

    case 1:
      mesage =  "solo" ;
      break;
    case 2 :
      mesage =  "duet" ;
      break;
    case 3 :
      mesage =  "trio" ;
      break;
    case 4 :
      mesage =  "quartet" ;
      break;
    default:
      mesage =  "this is a large group" ;
  }
}

console.log(mesage);

