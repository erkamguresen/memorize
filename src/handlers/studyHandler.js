import { loadFlashCards } from '../procedures/flash-cards.js';
import { hideAside } from '../procedures/hide-side-panel.js';
import { getDataSet } from '../procedures/IO-LocalStorage.js';
import { setupMainPanelToStudy } from '../procedures/prepare-main-panel.js';

export function studyHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const setName = document.querySelector('#data-name').textContent;

  //construct the data name to get it from localStorage
  const dataSetName = `${setName} Data`;

  const dataSet = getDataSet(dataSetName);

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanelToStudy(setName);

  //load flash cards to study
  loadFlashCards(dataSet);
}
