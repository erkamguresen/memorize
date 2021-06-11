import { currentData } from '../data/data.js';
import { isMobile } from '../logic/isMobileDevice.js';
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

  if (isVisible && isItAMobileDevice()) {
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

  let currentIndex = parseInt(
    document.getElementById('flash-card-template').getAttribute('index')
  );

  updateTheFlashCardElement(--currentIndex);
}

/**
 * This function shows the next flash card if there is any
 *
 * @param {object} event click event that is fired to request the next flash card
 */
export function nextFlashCard(event) {
  event.preventDefault();

  let currentIndex = parseInt(
    document.getElementById('flash-card-template').getAttribute('index')
  );

  updateTheFlashCardElement(++currentIndex);
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
