export class FlashCard {
  constructor(index, memo, questionPreFix = '', questionPostFix) {
    this.memo = memo;
    this.index = index;
    this.randomIndex = Math.random();
    this.creationDate = Date.now();

    this.question = `<p>${questionPreFix}</p>
    <p>${memo.header} ${questionPostFix}</p>`;

    this.answer = `<p>${memo.value}</p>`;
  }
}
