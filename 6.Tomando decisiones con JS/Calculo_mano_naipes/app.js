let cardOne = 7;
let cardTwo = 5;
let sum = cardOne + cardTwo; // 15

let cardThree = 7;
sum += cardThree;
if (sum > 21) {
  console.log('You lost');
  process.exit(1); // exit program
}
console.log(`You have ${sum} points`);


// Adicion de un adversario
