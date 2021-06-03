import { DataSet } from '../data/DataSet.js';
import { Memo } from '../data/Memo.js';
import { MemoSet } from '../data/MemoSet.js';
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
  const dataSet = new DataSet();
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
      // let dataRaw = [];

      if (headers.length !== row.length)
        throw new Error(
          'RangeError',
          `${i}th row of data table does not have same length with header row`
        );

      //Correct answer level will be stored in the progress variable

      for (let j = 0; j < headers.length; j++) {
        const memo = new Memo(headers[j], row[j]);
        // let newObject = {
        //   header: headers[j],
        //   value: row[j],
        //   progress: 0,
        // };

        // dataRaw.push(newObject);
        memoSet.memoList.push(memo);
      }

      // returnArray.push(dataRaw);
      dataSet.memoSetList.push(memoSet);
    }

    // console.log(lines);
  } catch (e) {
    console.error(e.message);
    console.error(e);
  }

  return dataSet;
}
