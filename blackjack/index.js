let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

const messageEl = document.querySelector(".message-el");
const cardsEl = document.querySelector(".cards-el");
const sumEl = document.querySelector(".sum-el");

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
	hasBlackJack = false;
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
		isAlive = false;
	} else {
		message = "You're out of the game!";
		isAlive = false;
	}
	messageEl.textContent = message;
}

function newCard() {
	if (isAlive && !hasBlackJack) {
		let card = getRandomCard();
		while (cards.includes(card)) {
			card = getRandomCard();
		}
		sum += card;
		cards.push(card);
		renderGame();
	}
	if (cards.length === 3 && sum === 21) {
		message = "You've got Blackjack!";
		hasBlackJack = true;
		isAlive = false;
		messageEl.textContent = message;
	}
}
