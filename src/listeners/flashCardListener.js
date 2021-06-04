import {
  nextFlashCard,
  previousFlashCard,
  showAnswer,
} from '../handlers/flashCardHandelers.js';

export function addAnswerListener(card) {
  card.addEventListener('click', showAnswer);
}

export function addPreviousListener(previousButton) {
  previousButton.addEventListener('click', previousFlashCard, false);
}

export function addNextListener(nextButton) {
  nextButton.addEventListener('click', nextFlashCard, false);
}
