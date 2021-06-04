import { MemoSet } from '../data/MemoSet.js';
export class DataSet {
  constructor(memoSets = [], flashCards = [], memorizeQuizCards = []) {
    this.creationDate = Date.now();
    this.memoSetList = memoSets;
    this.flashCards = flashCards;
    this.memorizeQuizCards = memorizeQuizCards;
  }
}
