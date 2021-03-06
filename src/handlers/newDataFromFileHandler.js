import { prepareDataFromFileContent } from '../logic/data-preparation.js';

export function handleDataPreparation(event) {
  if (event.target.classList.contains('play')) {
    let currentElement = event.target.parentElement;

    while (currentElement.tagName.toLowerCase() !== 'li') {
      currentElement = currentElement.parentElement;
    }

    let dataSetName = currentElement.firstChild.textContent;

    prepareDataFromFileContent(dataSetName);
  }
}
