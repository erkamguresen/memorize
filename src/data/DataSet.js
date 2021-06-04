import { MemoSet } from '../data/MemoSet.js';
import { FlashCard } from './FlashCard.js';
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

  prepareFlashCards() {
    //TODO: prepare the flash Cards
    let index = 0;

    for (let i = 0; i < memoSets.length; i++) {
      const questionPreFix = 'What is the correct answer ?';

      const questionPostFix = ` (${dataSet.memoSets[i].memoList[0].value})`;

      for (let j = 1; j < dataSet.memoSets[i].memoList.length; j++) {
        //for each element in the data matrix
        const memo = dataSet.memoSets[i].memoList[j];

        //generate a flash card
        const flashCard = new FlashCard(
          index,
          memo,
          questionPreFix,
          questionPostFix
        );

        //add  flash card to the list
        this.flashCards.push(flashCard);

        //increment index
        index++;
      }
    }
  }

  prepareMemorizeQuizCards() {
    //TODO: prepare the memorize Quiz Cards
  }
}
