console.log("JS file is connected to HTML! Woo!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";



var gameBoard = document.getElementById('game-board');

var createCards = function() {
  for (var i = 0; i < 4; i++) {
  var newCard = document.createElement('div');
  newCard.className = 'card';
  gameBoard.appendChild(newCard);
}
};

createCards();


var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

var createBoard = function() {
  for (var i=0; i < cards.length; i++) {
    document.querySelectorAll(".card")[i].setAttribute('data-card', cards[i]);
  }
};

createBoard();

for (var i=0; i<cards.length; i++) {
  document.querySelectorAll(".card")[i].addEventListener('click', isTwoCards);
}

function isTwoCards() {
  cardsInPlay.push(this.getAttribute('data-card'));
  if(cardsInPlay.length === 2) {
    isMatch(cardsInPlay);
    cardsInPlay = [];
  }
}

function isMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
    return alert('good job!');
  }
  else {
    return alert('Try again!');
  }
}