import {
  nextFlashCard,
  previousFlashCard,
  showAnswer,
} from '../handlers/flashCardHandelers.js';

export function addAnswerListener(card) {
  card.addEventListener('click', showAnswer);
}

export function addAnswerAndNextListener(card) {
  card.addEventListener('dblclick', nextFlashCard);
}

export function addPreviousListener(previousButton) {
  previousButton.addEventListener('click', previousFlashCard, false);
}

export function addNextListener(nextButton) {
  nextButton.addEventListener('click', nextFlashCard, false);
}
