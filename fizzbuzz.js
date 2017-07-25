// "Write a program that prints the numbers from 1 to 100.
// But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”.
// For numbers which are multiples of both three and five print “FizzBuzz”."

let message = ""; //this will what prints each time we try a new number

for(i = 1; i<= 100; i++){ // simpler notation
  message = ""; //clear the slate
  if(i%3 == 0){message += "Fizz"}; //if it's Fizzy, add "Fizz"
  if(i%5 == 0){message += "Buzz"}; //if it's Buzzy, add "Buzz"
  if(i%3 != 0 && i%5 != 0){message=i}; //if it's neither, just say it straight
  console.log(message); //play the message
}
