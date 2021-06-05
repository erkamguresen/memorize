import { currentData } from '../data/data.js';

export function updateCurrentData(dataSet) {
  currentData.currentDataSetName = dataSet.dataSetName;
  currentData.currentFlashCardList = dataSet.flashCards;
  currentData.currentMemorizeQuizCardList = dataSet.memorizeQuizCards;
}
