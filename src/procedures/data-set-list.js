import { memorizeDataBase } from '../data/data.js';

export function loadExistingData() {
  //   memorizeDataBase.dataSetList = getMemorizeDataSetList();
  const dataSetList = memorizeDataBase.dataSetList;

  if (dataSetList !== null) {
    const dataSetListElement = document.getElementById('existing-dataSet-list');

    dataSetList.forEach((dataSet) => {
      let newDataSetElement = getNewDataSetElement(dataSetName);

      dataSetList.appendChild(newDataSetElement);
    });
  }
}
