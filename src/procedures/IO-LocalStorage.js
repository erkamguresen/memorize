export function saveDataSet(dataSetName, dataObjects) {
  // Save data object to local storage
  let dataJSON = JSON.stringify(dataObjects);
  localStorage.setItem(`${dataSetName} Data`, dataJSON);
}

export function getDataSet(dataSetName) {
  return JSON.parse(localStorage.getItem(dataSetName));
}
