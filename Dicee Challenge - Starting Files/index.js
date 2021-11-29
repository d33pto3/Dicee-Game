const player1Name = document.getElementById('player1'); // replace player1 by player1Name
const player2Name = document.getElementById('player2');


const p1RandomNumber = Math.floor((Math.random() * 6) + 1); // 1-6

let imgSrc1 = 'images/dice' + p1RandomNumber + '.png'; // images/dice1.png - images/dice6.png

const img1 = document.querySelectorAll('img')[0]; //

img1.setAttribute('src', imgSrc1);



const p2RandomNumber = Math.floor((Math.random() * 6) + 1); // 1-6

let imgSrc2 = 'images/dice' + p2RandomNumber + '.png';

const img2 = document.querySelectorAll('img')[1]; //

img2.setAttribute('src', imgSrc2);


 // if player1 wins
  if(p1RandomNumber > p2RandomNumber) {
    document.querySelector('h1').innerHTML = '🚩 Player 1 Wins!';
  } else if(p2RandomNumber > p1RandomNumber) {  // if player2 wins
    document.querySelector('h1').innerHTML = 'Player 2 Wins! 🚩';
  } else {
    document.querySelector('h1').innerHTML = '🚩 Draw 🚩';
  }
