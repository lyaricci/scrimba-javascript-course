let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.querySelector(".message-el");
let cardsEl = document.querySelector(".cards-el");
let sumEl = document.querySelector(".sum-el");

const startBtn = document.querySelector(".start-btn");
const newCardBtn = document.querySelector(".new-card-btn");

startBtn.addEventListener("click", startGame);
newCardBtn.addEventListener("click", newCard);

function getRandomCard() {
	let randomCard = Math.floor(Math.random() * 13 + 1);

	if (randomCard === 1) {
		return 11;
	} else if (randomCard > 10) {
		return 10;
	} else {
		return randomCard;
	}
}

function startGame() {
	isAlive = true;
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	cards = [firstCard, secondCard];
	sum = firstCard + secondCard;

	renderGame();
}

function renderGame() {
	cardsEl.textContent = "Cards: ";

	for (let i = 0; i < cards.length; i++) {
		cardsEl.textContent += cards[i] + " ";
	}

	sumEl.textContent = `Sum: ${sum}`;

	if (sum <= 20) {
		message = "Do you want to draw a new card?";
	} else if (sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	let card = getRandomCard();
	sum += card;
	cards.push(card);
	renderGame();
}
