'use strict';
/*console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'correct number ';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 22;
let a = document.querySelector('.guess');
a.value = 21;
a.value = 1;
console.log(a);
let b = document.addEventListener(onclick('.btn check'));*/
let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();
document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number enter it!!!!';
  } else {
    document.querySelector('.message').textContent = `you entered ${guess}`;

    console.log(document.querySelector('.guess').value, typeof guess);
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = `GZ U WIN`;
      let score = Number(document.querySelector('.score').textContent);
      let highScore = Number(document.querySelector('.highscore').textContent);
      if (score > highScore) {
        document.querySelector('.highscore').textContent = `${Number(
          document.querySelector('.score').textContent
        )}`;
      }
      document.querySelector('.score').textContent = `${20}`;
      document.querySelector('.number').textContent = `${guess}`;
      secretNumber = randomNumber();
    } /* else if (guess < secretNumber) {
    value--;
    document.querySelector('.score').textContent = `${Number(value)}`;
    document.querySelector('.message').textContent =
      'the number you have entered is too small';
  }*/ else if (guess < secretNumber) {
      document.querySelector('.message').textContent = `Number too small`;
      let a = Number(document.querySelector('.score').textContent);
      //parseInt(a);
      a--;
      document.querySelector('.score').textContent = `${a}`;
      console.log(a, typeof a);
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = `Number too High`;
      let a = Number(document.querySelector('.score').textContent);
      //parseInt(a);
      a--;
      document.querySelector('.score').textContent = `${a}`;
      console.log(a, typeof a);
    }
  }
});
let guess = Number(document.querySelector('.guess').value);
//console.log(guess);
