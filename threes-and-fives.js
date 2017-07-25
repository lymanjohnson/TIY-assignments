// If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
//
// Find the sum of all the multiples of 3 or 5 below 1000.

const maxVal = 1000; //our maximum value
let x = 0; //this will be the number under examination
let sum = 0; //this will be our running tally

while (x < maxVal){ //this will look at all x values less than 1000
  if (x%3 == 0 || x%5 == 0){ //if it's a valid multiple
    sum += x; //it gets added to the total
  }
  x+=1 // then moves onto the next x
}

console.log(sum); //spits out the final tally
