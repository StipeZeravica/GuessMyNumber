'use strict';
let randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();
document.querySelector('.again').addEventListener('click', () => {
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = `${20}`;
  document.querySelector('.number').textContent = `?`;
  document.querySelector('.message').textContent = `Start guessing...`;
  secretNumber = randomNumber();
});
document.querySelector('.check').addEventListener('click', () => {
  let guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    document.querySelector('.message').textContent = 'no number enter it!!!!';
  } else {
    document.querySelector('.message').textContent = `you entered ${guess}`;

    console.log(document.querySelector('.guess').value, typeof guess);
    if (guess === secretNumber) {
      document.querySelector('.message').textContent = `GZ YOU WIN
       try guessing new number`;
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
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = `Number too small`;
      let score = Number(document.querySelector('.score').textContent);
      score--;
      document.querySelector('.score').textContent = `${score}`;
    } else if (guess > secretNumber) {
      document.querySelector('.message').textContent = `Number too High`;
      let score = Number(document.querySelector('.score').textContent);
      score--;
      document.querySelector('.score').textContent = `${score}`;
    }
  }
});
