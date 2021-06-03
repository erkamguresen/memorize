import { getFileName } from '../procedures/file-IO.js';
import { getNewDataSetElement } from '../procedures/update-data-list.js';

export function uploadFile(file) {
  console.log('upload file procedures');

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

    let newDataSetElement = getNewDataSetElement(dataSetName, textFromFile);

    dataSetList.appendChild(newDataSetElement);

    sessionStorage.setItem(dataSetName, textFromFile);

    console.log('onload complete');
  };

  reader.onerror = function () {
    console.log(reader.error);
  };
}
