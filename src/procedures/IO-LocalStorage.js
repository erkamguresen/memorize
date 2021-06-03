export function saveData(dataSetName, dataObjects) {
  // Save data object to local storage
  let dataJSON = JSON.stringify(dataObjects);
  localStorage.setItem(`${dataSetName} Data`, dataJSON);
}
