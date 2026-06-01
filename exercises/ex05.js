/*

Size	Width	Length	Sleeve
S	    18"	    28"	    8.13"
M	    20"	    29"	    8.38"
L	    22"	    30"	    8.63"
XL	    24"	    31"	    8.88"
2XL	    26"	    33"	    9.63"
3XL	    28"	    34"	    10.13"

Use the sizing chart above, create a series of logical expressions that prints the size of a t-shirt based on the measurements of shirtWidth, shirtLength, and shirtSleeve. Valid sizes include S, M, L, XL, 2XL, and 3XL.

For example, if...

const shirtWidth = 23; // size L (large)
const shirtLength = 30; // size L (large)
const shirtSleeve = 8.71; // size L (large)

Then print L to the console. 

If shirtWidth, shirtLength, and shirtSleeve don't fit within the range of acceptable values for a specific size, then print NA to the console. For example, if...

const shirtWidth = 18; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.47; // size M (medium)
Then print N/A to the console because the measurements don't all match up with one particular size.

*/

const shirtWidth = 18; // size S (small)
const shirtLength = 29; // size M (medium)
const shirtSleeve = 8.47; // size M (medium)

function getTshirtsSize(w,l,s){
  if( w >= 18 && w < 20 && l >= 28 && l < 29 && s >= 8.13 && s < 8.38) return "S";
  if( w >= 20 && w < 22 && l >= 29 && l < 30 && s >= 8.38 && s < 8.63) return "M";
  if( w >= 22 && w < 24 && l >= 30 && l < 31 && s >= 8.63 && s < 8.88) return "L";
  if( w >= 24 && w < 26 && l >= 31 && l < 33 && s >= 8.88 && s < 9.63) return "XL";
  if( w >= 26 && w < 28 && l >= 33 && l < 34 && s >= 9.63 && s < 10.13) return "2XL";
  if( w >= 28 && l >= 34 && s >= 10.13 ) return "3XL";
  
  return "N/A";
}


console.log(getTshirtsSize(shirtWidth,shirtLength,shirtSleeve))



