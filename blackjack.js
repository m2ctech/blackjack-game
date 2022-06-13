let player = {
  name: "Per",
  chips: 200,
};

let cards = [];
let sum = 0;

let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageDisplay = document.getElementById("message");
let sumDisplay = document.getElementById("sum");
let cardsDisplay = document.getElementById("cards");
let chipsDisplay = document.getElementById("chips");

chipsDisplay.textContent = player.name + ": $" + player.chips;

function getRandomNumber() {
  //if 1 return 11
  //if 11-13 return 10

  let randomNumber = Math.floor(Math.random() * 13) + 1;

  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomNumber();
  let secondCard = getRandomNumber();

  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  //Generate two random numbers
  //Re-assign the cards and sum variable so that the game can start

  renderGame();
}

function renderGame() {
  cardsDisplay.textContent = "Cards: ";

  for (let index = 0; index < cards.length; index++) {
    cardsDisplay.textContent += cards[index] + " ";
  }

  sumDisplay.textContent = "Sum: " + sum;

  if (sum <= 20) {
    message = "Do you want to draw a new a card?";
  } else if (sum == 21) {
    message = "You've got Blackjack!!!!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }

  messageDisplay.textContent = message;
}

function newCard() {
  //Only allow a player to get a new card if he/she is alive and does not have blackjack

  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomNumber();
    sum += card;
    cards.push(card);

    renderGame();
  }
}
