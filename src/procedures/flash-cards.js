import { currentData } from '../data/data.js';

import {
  addAnswerListener,
  addNextListener,
  addPreviousListener,
} from '../listeners/flashCardListener.js';

/**
 * This function prepares and displays the flash cards
 *
 *
 */
export function loadFlashCards() {
  const studyDiv = document.getElementById('study');

  //add previous button
  const previousButton = document.createElement('button');
  previousButton.id + 'previous';
  previousButton.className = 'icon-btn';
  const leftIcon = document.createElement('i');
  leftIcon.className = 'fa fa-chevron-left fa-3x';
  previousButton.appendChild(leftIcon);
  studyDiv.appendChild(previousButton);

  // add a flash card template
  const card = document.createElement('div');
  card.className = 'card';
  card.id = 'flash-card-template';
  card.setAttribute('index', -1);

  //question part of the flash card
  const question = document.createElement('question');
  question.className = 'unselectable';
  question.style.display = 'block';
  card.appendChild(question);

  //answer part of the flash card
  const answer = document.createElement('answer');
  answer.className = 'unselectable';
  answer.style.display = 'block';
  answer.style.visibility = 'hidden';

  card.appendChild(answer);

  //add  flash card to display panel
  studyDiv.appendChild(card);

  //add a click even to show the answer
  addAnswerListener(card);

  //initialize card with the first card
  updateTheFlashCardElement();

  //add next button
  const nextButton = document.createElement('button');
  nextButton.id = 'next';
  nextButton.className = 'icon-btn';
  const rightIcon = document.createElement('i');
  rightIcon.className = 'fa fa-chevron-right fa-3x';
  nextButton.appendChild(rightIcon);
  studyDiv.appendChild(nextButton);

  addPreviousListener(previousButton);
  addNextListener(nextButton);
}

export function updateTheFlashCardElement(flashCardArrayIndex = 0) {
  if (
    flashCardArrayIndex >= 0 &&
    flashCardArrayIndex < currentData.currentFlashCardList.length
  ) {
    document.querySelector('answer').style.visibility = 'hidden';

    document.querySelector('question').innerHTML =
      currentData.currentFlashCardList[flashCardArrayIndex].question;
    document.querySelector('answer').innerText =
      currentData.currentFlashCardList[flashCardArrayIndex].answer;

    document
      .getElementById('flash-card-template')
      .setAttribute('index', flashCardArrayIndex);
  }
}
