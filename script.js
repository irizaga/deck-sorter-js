const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const suits = ['hearts', 'spades', 'diamonds', 'clubs'];

const heartsButton = document.getElementById('button-hearts');
const spadesButton = document.getElementById('button-spades');
const diamondsButton = document.getElementById('button-diamonds');
const clubsButton = document.getElementById('button-clubs');
const showallButton = document.getElementById('button-show-all');
const shuffleButton = document.getElementById('shuffle-button');
const resetButton = document.getElementById('reset-button');

populateDeck();

shuffleButton.addEventListener('click', () => { 
  shuffle(); 
});

resetButton.addEventListener('click', () => {
  deleteChildren();
  populateDeck();
});

function showSuit(suit) {
  const toshow = document.querySelectorAll('.' + suit);
  setVisibility (toshow, 'visible');
  const elements = document.querySelectorAll('#cards > div:not(.' + suit + ')'); 
  setVisibility(elements, 'hidden');
}

heartsButton.addEventListener('click', () => { showSuit('hearts') })
spadesButton.addEventListener('click', () => { showSuit('spades') })
diamondsButton.addEventListener('click', () => { showSuit('diamonds') })
clubsButton.addEventListener('click', () => { showSuit('clubs') })

showallButton.addEventListener('click', () => {
  const elements = document.querySelectorAll('.singlecard');
  setVisibility(elements, 'visible');
});

function populateDeck () {
  for (let count = 0; count < 4; count++) {
    const cardsNodeList = cards.map( x => createNode(x, suits[count]));
    const container = document.querySelector("#cards");
    container.append(...cardsNodeList);
  }
}

function deleteChildren() {
  const e = document.querySelector("#cards");
  let first = e.firstElementChild;
  while (first) {
      first.remove();
      first = e.firstElementChild;
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

function setVisibility(elements, visibility) {
  elements.forEach(element => element.style.visibility = visibility);
}

function shuffle() {               
  const parent = document.querySelector('#cards');
  const divs = parent.children;
  const frag = document.createDocumentFragment();
  while (divs.length) {
    frag.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(frag);
}
