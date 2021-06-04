//Name of the main save in the local storage system
const localStorageMainSave = 'Memorize DataBase';

// Name format for each data set in the local storage system:
// `${dataSetName} Data`

export function saveDataSet(dataSetName, dataObjects) {
  // Save data object to local storage
  let dataJSON = JSON.stringify(dataObjects);
  localStorage.setItem(`${dataSetName} Data`, dataJSON);

  updateDataSetList(`${dataSetName} Data`);
}

export function getDataSet(dataSetName) {
  return JSON.parse(localStorage.getItem(dataSetName));
}

export function getMemorizeDataSetList() {
  const dataList = [];

  if (localStorage.getItem(localStorageMainSave) !== null) {
    //read data list from localStorage
    const dataSetList = JSON.parse(localStorage.getItem(localStorageMainSave));

    //check JSON add each dataSet to the list
    dataSetList.forEach((dataSetName) => {
      dataList.push(getDataSet(dataSetName));
    });
  }

  return dataList;
}
/**
 * The main function to set and update the data set list in the local storage
 *
 * @param {string} dataSetName name of the dataSet
 * to add the main dataset list
 */
function updateDataSetList(dataSetName) {
  if (localStorage.getItem(localStorageMainSave) === null) {
    localStorage.setItem(localStorageMainSave, JSON.stringify([]));
  }

  debugger;
  const dataSetList = JSON.parse(localStorage.getItem(localStorageMainSave));
  console.log(localStorage.getItem(localStorageMainSave));

  if (!dataSetList.includes(dataSetName)) {
    dataSetList.push(dataSetName);
    localStorage.setItem(localStorageMainSave, JSON.stringify(dataSetList));
  }
}
