import { prepareData } from '../logic/data-preparation.js';

export function handleSavedDataPreparation(event) {
  if (event.target.classList.contains('play')) {
    let currentElement = event.target.parentElement;

    while (currentElement.tagName.toLowerCase() !== 'li') {
      currentElement = currentElement.parentElement;
    }

    let dataSetName = currentElement.firstChild.textContent;

    prepareData(dataSetName);
  }
}
