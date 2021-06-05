import { currentData, memorizeDataBase } from '../data/data.js';
import { loadFlashCards } from '../procedures/flash-cards.js';
import { hideAside } from '../procedures/hide-side-panel.js';
import { setupMainPanelToStudy } from '../procedures/prepare-main-panel.js';

export function studyHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  // const setName = document.querySelector('#data-name').textContent;

  // //construct the data name to get it from localStorage
  // const dataSetName = `${setName} Data`;

  const dataSetName = currentData.currentDataSetName;

  // // const dataSet = getDataSet(dataSetName);
  // const dataSets = memorizeDataBase.dataSetList.filter(
  //   (elementName) => (elementName = dataSetName)
  // );

  // const firstDataSet = dataSets[0];

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanelToStudy(dataSetName);

  // //assign current flash card list
  // console.log(currentData.currentFlashCardList);

  // currentData.currentFlashCardList = firstDataSet.flashCards;

  // console.log(currentData.currentFlashCardList);

  //load flash cards to study
  loadFlashCards();
}
