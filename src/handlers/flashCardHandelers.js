import { currentData } from '../data/data.js';
import { randomizeFlashCards } from '../logic/randomize.js';
import { updateTheFlashCardElement } from '../procedures/flash-cards.js';

/**
 * This function show the hidden answer part of the flash card
 *
 * @param {object} event  the click event
 */
export function showAnswer(event) {
  event.preventDefault();

  let currentElement = event.target;

  while (currentElement.tagName.toLowerCase() !== 'div') {
    currentElement = currentElement.parentElement;
  }

  let answerElement = currentElement.lastChild;

  const isVisible = answerElement.style.visibility === 'visible';

  if (isVisible) {
    // const clickEvent = new Event('click');
    document.getElementById('next').dispatchEvent(new Event('click'));
  } else {
    answerElement.style.visibility = 'visible';
  }
}

/**
 * This function shows the previous flash card if there is any
 *
 * @param {object} event the previous flash card click event
 */
export function previousFlashCard(event) {
  event.preventDefault();

  //select the visible-card
  const currentElement = document.querySelector('#visible-card');

  //get the index of the  current flash card
  const currentIndex = currentElement.getAttribute('index');

  // check if there is a previous flash card
  // note that all html element attributes are strings
  if (Number(currentIndex) !== 0) {
    //get previous flash card
    let previousElement = currentElement.previousSibling;

    // make it visible
    previousElement.style.display = 'block';

    //add the id "visible-card" to select this card easily in the future
    previousElement.id = 'visible-card';

    //hide the current flash card
    currentElement.style.display = 'none';
    //remove add id of visible-card
    currentElement.id = '';
    //hide the display of the answer: return to default 'visibility: hidden'
    currentElement.lastChild.style.visibility = 'hidden';
  }
}

/**
 * This function shows the next flash card if there is any
 *
 * @param {object} event click event that is fired to request the next flash card
 */
export function nextFlashCard(event) {
  event.preventDefault();

  //select the visible-card
  const currentElement = document.querySelector('#visible-card');

  //get the next sibling
  const nextElement = currentElement.nextSibling;

  // check if there is a next flash card
  // note that all html element attributes are strings
  if (nextElement.classList.contains('card')) {
    // make next element visible
    nextElement.style.display = 'block';

    //add the id "visible-card" to select this card easily in the future
    nextElement.id = 'visible-card';

    //hide the current flash card
    currentElement.style.display = 'none';
    //remove add id of visible-card
    currentElement.id = '';
    //hide the display of the answer: return to default 'visibility: hidden'
    currentElement.lastChild.style.visibility = 'hidden';
  }
}

export function toggleRandomFlashCard(event) {
  event.preventDefault();
  event.stopPropagation();

  const isRandomFlash = event.target.checked;

  const label = event.target.parentElement.parentElement.firstChild;
  // console.log(label);

  const flashCards = currentData.currentFlashCardList;

  if (isRandomFlash) {
    label.style.fontWeight = 'bold';
    //random order the flash Cards
    randomizeFlashCards(flashCards);
    flashCards.sort((a, b) => a.randomIndex - b.randomIndex);

    updateTheFlashCardElement();
  } else {
    label.style.fontWeight = 'normal';
    //order by index the flash cards
    flashCards.sort((a, b) => a.index - b.index);

    updateTheFlashCardElement();
  }
}
