import { memorizeDataBase } from '../data/data.js';
import { getNewDataSetElement } from './update-data-list.js';

export function loadExistingData() {
  // get the main data set list
  const dataSetList = memorizeDataBase.dataSetList;

  const header = document.querySelector('#data-set-list-view h3');

  if (dataSetList.length > 0) {
    // make the list header visible
    header.style.visibility = 'visible';

    // select the list to show existing datasets
    const dataSetListElement = document.getElementById('existing-dataSet-list');

    dataSetList.forEach((dataSet) => {
      //generate a list element for each dataset
      let newDataSetElement = getNewDataSetElement(dataSet.dataSetName);

      //append existing element to saved data lists
      dataSetListElement.appendChild(newDataSetElement);
    });
  }
}
