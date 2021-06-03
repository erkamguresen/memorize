import { memorizeQuizHandler } from '../handlers/memorizeQuizHandler.js';

export function prepareMemorizeListeners(memorizeQuizButton) {
  memorizeQuizButton.addEventListener('click', memorizeQuizHandler);
}
