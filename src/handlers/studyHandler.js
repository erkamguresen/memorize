import { currentFlashCardList, memorizeDataBase } from '../data/data.js';
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
  const dataSets = memorizeDataBase.dataSetList.filter(
    (element) => (element.dataSetName = dataSetName)
  );

  const firstDataSet = dataSets[0];

  console.log(dataSets);

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanelToStudy(setName);

  //assign current flash card list
  //TODO: Uncaught TypeError: Cannot read property 'flashCards' of undefined
  // at HTMLButtonElement.studyHandler (studyHandler.js:31)
  currentFlashCardList = firstDataSet.flashCards;

  //load flash cards to study
  loadFlashCards(firstDataSet);
}
