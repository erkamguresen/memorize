import { Memo } from './Memo';

export class FlashCard extends Memo {
  constructor(
    index,
    memo,
    questionPreFix = 'What is the answer ?',
    questionPostFix
  ) {
    this.index = index;
    this.randomIndex = Math.random();
    this.creationDate = Date.now();
  }
}
