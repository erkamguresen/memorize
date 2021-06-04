import { getFileName } from './IO-file.js';
import { getNewDataSetElement } from './update-data-list.js';

export function uploadFile(file) {
  let textFromFile = '';
  let dataSetName = getFileName(file);
  let reader = new FileReader();

  reader.readAsText(file);
  //async problem code executes while file loading so when the console tries
  //to log the text from file it was not completed yet
  //Thus write into onload function

  reader.onload = function () {
    textFromFile = reader.result;

    let dataSetList = document.getElementById('file-list');

    let newDataSetElement = getNewDataSetElement(dataSetName);

    dataSetList.appendChild(newDataSetElement);

    sessionStorage.setItem(dataSetName, textFromFile);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
