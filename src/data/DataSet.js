import { MemoSet } from '../data/MemoSet.js';
export class DataSet {
  constructor(
    dataSetName,
    memoSets = [],
    flashCards = [],
    memorizeQuizCards = []
  ) {
    this.dataSetName = dataSetName;
    this.creationDate = Date.now();
    this.memoSetList = memoSets;
    this.flashCards = flashCards;
    this.memorizeQuizCards = memorizeQuizCards;
  }
}
