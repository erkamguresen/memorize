import { currentData, memorizeDataBase } from '../data/data.js';
import { loadFlashCards } from '../procedures/flash-cards.js';
import { hideAside } from '../procedures/hide-side-panel.js';
import { setupMainPanelToStudy } from '../procedures/prepare-main-panel.js';

export function studyHandler(event) {
  event.preventDefault();
  event.stopPropagation();

  const dataSetName = currentData.currentDataSetName;

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanelToStudy(dataSetName);

  //load flash cards to study
  loadFlashCards();
}
