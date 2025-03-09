let cardOneBank = 7;
let cardTwoBank = 5;
let cardThreeBank = 6;
let cardFourBank = 4;

let bankSum = cardOneBank + cardTwoBank + cardThreeBank + cardFourBank;
if (bankSum > 21 || (sum <= 21 && sum > bankSum)) {
 console.log('You win');
} else {
  console.log('Bank wins');
}