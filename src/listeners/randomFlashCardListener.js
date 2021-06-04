import { toggleRandomFlashCard } from '../handlers/flashCardHandelers.js';

export function addRandomFlashCardEventListener(checkboxInput) {
  checkboxInput.addEventListener('change', toggleRandomFlashCard);
}
