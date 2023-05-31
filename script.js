'use strict';

const btnRollDice = document.querySelector('.btn--roll');
const dice = document.querySelector('.dice');

// The function that roll the dice
const rollDice = function () {
  let randomDice = Math.trunc(Math.random() * 6) + 1;
  dice.setAttribute('src', `dice${[randomDice]}.png`);
};

btnRollDice.addEventListener('click', rollDice);
