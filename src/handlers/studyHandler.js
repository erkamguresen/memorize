import { memorizeDataBase } from '../data/data.js';
import { loadFlashCards } from '../procedures/flash-cards.js';
import { hideAside } from '../procedures/hide-side-panel.js';
import { setupMainPanelToStudy } from '../procedures/prepare-main-panel.js';

export function studyHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const setName = document.querySelector('#data-name').textContent;

  //construct the data name to get it from localStorage
  const dataSetName = `${setName} Data`;

  // const dataSet = getDataSet(dataSetName);
  const dataSet = memorizeDataBase.dataSetList.filter(
    (element) => (element.dataSetName = dataSetName)
  );

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanelToStudy(setName);

  //load flash cards to study
  loadFlashCards(dataSet[0]);
}
