import { DataSet } from '../data/DataSet.js';
import { Memo } from '../data/Memo.js';
import { MemoSet } from '../data/MemoSet.js';
import { getDataSet, saveDataSet } from '../procedures/IO-LocalStorage.js';
import { prepareMainPanelToChoose } from '../procedures/prepare-main-panel.js';
import { Tokenizer } from '../procedures/Tokenizer.js';
import { updateCurrentData } from './currentData.js';

/**
 * This function will be use for making a dataset from a file content.
 * File content will be revived  from Session Storage.
 *
 * @param {string} dataSetName name of the data set without "... Data"
 * in the end. This name will be used to revive the file content.
 */
export function prepareDataFromFileContent(dataSetName) {
  // make dataset
  let dataSet = getDataSetFromFileContent(dataSetName);

  //update the current data
  updateCurrentData(dataSet);

  // Save data object to local storage
  saveDataSet(dataSet);

  prepareMainPanelToChoose(dataSetName);
}

/**
 * This function will be use for making a dataset from a memory.
 *
 * @param {string} dataSetName name of the data set without "... Data"
 * in the end
 * which will be revived from memory(data.js)
 */
export function prepareDataFromMemory(dataSetName) {
  //update the current data
  updateCurrentData(getDataSet(`${dataSetName} Data`));

  prepareMainPanelToChoose(dataSetName);
}

/**
 * This function will return a full dataset from a recently read file.
 * File content wil be revived from the sessionStorage based on
 * the dataset name
 *
 * @param {string} dataSetName name of the data set
 * @returns {DataSet} returns a new dataset object
 */
function getDataSetFromFileContent(dataSetName) {
  const dataSet = new DataSet(dataSetName);

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

  dataSet.prepareFlashCards();
  dataSet.prepareMemorizeQuizCards();

  return dataSet;
}
