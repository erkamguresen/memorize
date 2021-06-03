import { saveData } from '../procedures/IO-LocalStorage.js';
import { prepareMainPanel } from '../procedures/prepare-main-panel.js';
import { Tokenizer } from '../procedures/Tokenizer.js';

export function prepareData(dataSetName) {
  // make objects
  let dataObjects = getDataObject(dataSetName);

  // Save data object to local storage
  saveData(dataSetName, dataObjects);

  prepareMainPanel(dataSetName);
}

function getDataObject(dataSetName) {
  let returnArray = [];

  try {
    let rawData = sessionStorage.getItem(dataSetName);
    let lines = Tokenizer.getLineTokens(rawData);

    let headers = Tokenizer.getWordTokens(lines[0]);

    if (rawData.length <= 1) {
      throw new ValidationError('Whoops! Data file has problems...');
    }
    //each row will contain related objects
    for (let i = 1; i < lines.length; i++) {
      let row = Tokenizer.getWordTokens(lines[i]);
      let dataRaw = [];

      if (headers.length !== row.length)
        throw new Error(
          'RangeError',
          `${i}th row of data table does not have same length with header row`
        );

      //Correct answer level will be stored in the progress variable

      for (let j = 0; j < headers.length; j++) {
        let newObject = {
          header: headers[j],
          value: row[j],
          progress: 0,
        };

        dataRaw.push(newObject);
      }

      returnArray.push(dataRaw);
    }

    // console.log(lines);
  } catch (e) {
    console.error(e.message);
    console.error(e);
  }

  return returnArray;
}
