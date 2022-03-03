const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

const heartsButton = document.getElementById('button-hearts');
const spadesButton = document.getElementById('button-spades');
const diamondsButton = document.getElementById('button-diamonds');
const clubsButton = document.getElementById('button-clubs');
const showallButton = document.getElementById('button-show-all');
const sortButton = document.getElementById('sort-button');

populateDeck();

sortButton.addEventListener('click', () => {
  shuffle();
});

heartsButton.addEventListener('click', () => {
  const toshow = document.querySelectorAll('.hearts');
  show (toshow);
  const elements = document.querySelectorAll('#cards > div:not(.hearts)'); 
  hide(elements);
});

spadesButton.addEventListener('click', () => {
  const toshow = document.querySelectorAll('.spades');
  show (toshow);
  const elements = document.querySelectorAll('#cards > div:not(.spades)');
  hide(elements);
});

diamondsButton.addEventListener('click', () => {
  const toshow = document.querySelectorAll('.diamonds');
  show (toshow);
  const elements = document.querySelectorAll('#cards > div:not(.diamonds)');
  hide(elements);
});

clubsButton.addEventListener('click', () => {
  const toshow = document.querySelectorAll('.clubs');
  show (toshow);
  const elements = document.querySelectorAll('#cards > div:not(.clubs)');
  hide(elements);
});

showallButton.addEventListener('click', () => {
  const elements = document.querySelectorAll('.hearts, .spades, .diamonds, .clubs');
  show(elements);
});

function populateDeck () {
  for (let count = 0; count < 4; count++) {
    const cardsNodeList = cards.map( x => createNode(x, suits[count]));
    const container = document.querySelector("#cards");
    container.append(...cardsNodeList);
  }
}

function createNode(card, suit) {
  const cardDiv = document.createElement('div');
  cardDiv.classList.add(suit);
  cardDiv.classList.add('singlecard');
  const content = document.createTextNode(card);
  cardDiv.appendChild(content);

  return cardDiv;
}

function hide(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.visibility = 'hidden';
  }
}

function show(elements) {
  elements = elements.length ? elements : [elements];
  for (var index = 0; index < elements.length; index++) {
    elements[index].style.visibility = 'visible';
  }
}

function shuffle() {               
  var parent = document.querySelector('#cards');
  var divs = parent.children;
  var frag = document.createDocumentFragment();
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
}

