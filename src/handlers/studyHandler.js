import { hideAside } from '../procedures/hide-side-panel';
import { getDataSet } from '../procedures/IO-LocalStorage';

export function studyHandler(event) {
  e.preventDefault();
  e.stopPropagation();

  const setName = document.querySelector('#data-name').textContent;

  //construct the data name to get it from localStorage
  const dataSetName = `${setName} Data`;

  const dataSet = getDataSet(dataSetName);

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanel(setName);

  //load flash cards to study
  loadFlashCards(dataSet);
}
