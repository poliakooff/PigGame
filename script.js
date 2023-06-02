'use strict';

// Element selection
const score0Element = document.getElementById('score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnRollDice = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
const playerActive = document.querySelector('.player--active');

// Game intial conditions

score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');

const totalScores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let isPlaying = true;

const switchActivePlayer = function () {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`).textContent =
    currentScore;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};

// Roll the dice
const rollDice = function () {
  if (isPlaying) {
    // 1. Generate a random number
    const diceNumber = Math.trunc(Math.random() * 6) + 1;

    // 2. Display number on the dice
    diceElement.classList.remove('hidden');
    diceElement.setAttribute('src', `dice${[diceNumber]}.png`);

    // 3. If the player class contains a player--active class, assign all values to it
    if (diceNumber !== 1) {
      currentScore += diceNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchActivePlayer();
    }
  }
};
btnRollDice.addEventListener('click', rollDice);

const pressHold = function () {
  if (!diceElement.classList.contains('hidden')) {
    if (isPlaying) {
      // 1. Add current score to active player total score
      totalScores[activePlayer] += currentScore;
      document.getElementById(`score--${activePlayer}`).textContent =
        totalScores[activePlayer];

      // 2. If total score of active player >= 100, active player won, if not - swich active player
      if (totalScores[activePlayer] >= 20) {
        isPlaying = false;
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.add('player--winner');
        document
          .querySelector(`.player--${activePlayer}`)
          .classList.remove('player--active');
        diceElement.classList.add('hidden');
      } else {
        switchActivePlayer();
      }
    }
  }
};
btnHold.addEventListener('click', pressHold);

// const playerPressHold = function () {};

// const playerLost = function () {
//   currentScore = 0;
//   current0Element.textContent = 0;
//   current1Element.textContent = 0;

//   for (let i = 0; i < player.length; i++) {
//     if (player[i].classList.contains('player--active')) {
//       player[i].classList.remove('player--active');
//     } else {
//       player[i].classList.add('player--active');
//     }
//   }
// };
// const changePlayer = function () {
//   if (player[0].classList.contains('player--active')) {
//     score0Element.textContent =
//       Number(score0Element.textContent) + currentScore;
//     currentScore = 0;
//   } else {
//     score1Element.textContent =
//       Number(score1Element.textContent) + currentScore;
//     currentScore = 0;
//   }
//   current0Element.textContent = 0;
//   current1Element.textContent = 0;

//   for (let i = 0; i < player.length; i++) {
//     if (player[i].classList.contains('player--active')) {
//       player[i].classList.remove('player--active');
//     } else {
//       player[i].classList.add('player--active');
//     }
//   }
// };
