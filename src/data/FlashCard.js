import { Memo } from './Memo.js';

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

    this.question = `<p>${questionPreFix}</p>
    <p>${memo.header} ${questionPostFix}</p>`;

    this.answer = memo.value;
  }
}
