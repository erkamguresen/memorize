export class Memo {
  constructor(header, value, questionColumn, isFirstColumn = false) {
    this.creationDate = Date.now();

    this.isFirstColumn = isFirstColumn;

    this.header = header;
    this.value = value;
    this.progress = progress;
    this.questionColumn = questionColumn;
  }
}
