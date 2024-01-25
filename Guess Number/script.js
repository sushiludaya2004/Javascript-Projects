'use strict';

let num = Math.trunc(Math.random() * 20 + 1);
document.querySelector('.number').textContent = '?';

//storing the score in variable to decrease if user enters wrong answer
let score = Number(document.querySelector('.score').textContent);
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const x = function () {
  //input received from user will always be string so convert it to number
  let y = Number(document.querySelector('.guess').value);

  if (score > 0) {
    if (!y) {
      displayMessage('No Number!!!');
      //alert('Enter a Number!!!');
    } else if (y == num) {
      displayMessage(' 🥳🥳 Correct Number!!!');

      if (highscore < score) highscore = score;
      document.querySelector('.highscore').textContent = highscore;
      document.querySelector('.number').textContent = num;
      //while implementing css , always use .style and declare values as string in double quotes
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    } else if (y !== num) {
      //optimizing the reppeating code
      //   document.querySelector('.message').textContent =
      //     y > num ? '📈Too High!!!' : '📉Too Low!!!';
      displayMessage(y > num ? '📈Too High!!!' : '📉Too Low!!!');
      score--;
      document.querySelector('.score').textContent = score;
    }
    // else if (y > num) {
    //   document.querySelector('.message').textContent = '📈Too High!!!';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    // } else {
    //   document.querySelector('.message').textContent = '📉Too Low!!!';
    //   score--;
    //   document.querySelector('.score').textContent = score;
    //}
  } else {
    document.querySelector('.score').textContent = score;
    displayMessage('🥲🥲You lost the game!!!');
    alert('You loss!!! Score :' + score);
  }
};
document.querySelector('.check').addEventListener('click', x);

const z = function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  num = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.highscore').textContent = highscore;
  document.querySelector('.guess').value = '';

  document.querySelector('body').style.backgroundColor = '#222222';
  document.querySelector('.number').style.width = '15rem';
};

document.querySelector('.again').addEventListener('click', z);
