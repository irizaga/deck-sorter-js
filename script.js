const CARDS = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const SUITS = ['hearts', 'spades', 'diamonds', 'clubs'];

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

heartsButton.addEventListener('click', () => { showSuit('hearts') })
spadesButton.addEventListener('click', () => { showSuit('spades') })
diamondsButton.addEventListener('click', () => { showSuit('diamonds') })
clubsButton.addEventListener('click', () => { showSuit('clubs') })

showallButton.addEventListener('click', () => {
  const elements = document.querySelectorAll('.singlecard');
  setVisibility(elements, 'visible');
});

function showSuit(suit) {
  const toshow = document.querySelectorAll(`.${suit}`);
  setVisibility (toshow, 'visible');
  const tohide = document.querySelectorAll(`#cards > div:not(.${suit})`); 
  setVisibility(tohide, 'hidden');
}

function setVisibility(elements, visibility) {
  elements.forEach(element => element.style.visibility = visibility);
}

function populateDeck() {
  SUITS.forEach( suit => {
    const cardsNodeList = CARDS.map( card => createNode(card, suit) );
    const container = document.querySelector("#cards");
    container.append(...cardsNodeList);
  });
}

function deleteChildren() {
  const wrapper = document.querySelector("#cards");
  while (wrapper.firstElementChild) {
      wrapper.firstElementChild.remove();
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

function shuffle() {               
  const parent = document.querySelector('#cards');
  const divs = parent.children;
  const fragment = document.createDocumentFragment();
  while (divs.length) {
    fragment.appendChild(divs[Math.floor(Math.random() * divs.length)]);
  }
  parent.appendChild(fragment);
}
