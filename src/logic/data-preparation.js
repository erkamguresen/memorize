import { DataSet } from '../data/DataSet.js';
import { Memo } from '../data/Memo.js';
import { MemoSet } from '../data/MemoSet.js';
import { saveDataSet } from '../procedures/IO-LocalStorage.js';
import { prepareMainPanelToChoose } from '../procedures/prepare-main-panel.js';
import { Tokenizer } from '../procedures/Tokenizer.js';

/**
 * This function will be use for making a dataset from a file content.
 * File content will be revived  from Session Storage.
 *
 * @param {string} dataSetName name of the data set
 * which will be revived from Session Storage
 */
export function prepareDataFromFileContent(dataSetName) {
  // make objects
  let dataObjects = getDataObject(dataSetName);

  // Save data object to local storage
  saveDataSet(dataSetName, dataObjects);

  prepareMainPanelToChoose(dataSetName);
}

export function prepareDataFromMemory(dataSetName) {
  //TODO:

  prepareMainPanelToChoose(dataSetName);
}

function getDataObject(dataSetName) {
  const dataSet = new DataSet(dataSetName);
  // let returnArray = [];

  try {
    const rawData = sessionStorage.getItem(dataSetName);
    const lines = Tokenizer.getLineTokens(rawData);

    let headers = Tokenizer.getWordTokens(lines[0]);

    if (rawData.length <= 1) {
      throw new ValidationError('Whoops! Data file has problems...');
    }
    //each row will contain related objects
    for (let i = 1; i < lines.length; i++) {
      const row = Tokenizer.getWordTokens(lines[i]);
      const memoSet = new MemoSet();

      if (headers.length !== row.length)
        throw new Error(
          'RangeError',
          `${i}th row of data table does not have same length with header row`
        );

      //Correct answer level will be stored in the progress variable

      for (let j = 0; j < headers.length; j++) {
        const memo = new Memo(headers[j], row[j]);

        memoSet.memoList.push(memo);
      }

      dataSet.memoSetList.push(memoSet);
    }
  } catch (e) {
    console.error(e.message);
    console.error(e);
  }

  return dataSet;
}
