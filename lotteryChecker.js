let firstNumber = Math.ceil(Math.random() * 60);
let secondNumber = Math.ceil(Math.random() * 60);
let thirdNumber = Math.ceil(Math.random() * 60);
let fourthNumber = Math.ceil(Math.random() * 60);
let fifthNumber = Math.ceil(Math.random() * 60);
let sixthNumber = Math.ceil(Math.random() * 60);

let lotteryNumbers = [firstNumber, secondNumber, thirdNumber, fourthNumber, fifthNumber, sixthNumber];  // Iterável

let firstGame = [21, 56, 25, 12, 6, 33]
// let secondGame = [23, 45, 57, 12, 6, 33]
// let thirdGame = [45, 33, 55, 12, 6, 33]

// let allGames = [firstGame, secondGame, thirdGame];

let numberOfHits = 0;


for(let indexLottery = 0; indexLottery < lotteryNumbers.length; indexLottery += 1){  // index++
  for(let indexGame = 0; indexGame < firstGame.length; indexGame += 1){  // index++
    if(lotteryNumbers[indexLottery] === firstGame[indexGame]){
      numberOfHits += 1;
    }
  }
}

console.log("Números sorteados:", lotteryNumbers);
console.log("Jogo:", firstGame);
console.log("Acertos:", numberOfHits);


// for(let lotteryNumber of lotteryNumbers){
//   console.log(lotteryNumber);
// }

// console.log("Tamanho do array:", lotteryNumbers.length);

// console.log(lotteryNumbers[0]);
// console.log(lotteryNumbers[1]);
// console.log(lotteryNumbers[2]);
// console.log(lotteryNumbers[3]);
// console.log(lotteryNumbers[4]);
// console.log(lotteryNumbers[5]);