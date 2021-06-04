//TODO: write the class

import { FlashCard } from './FlashCard';

export class MemorizeQuiz extends FlashCard {
  constructor(flashCard, progress = 0) {
    this.creationDate = Date.now();

    this.randomIndex = Math.random();
    this.progress = progress;
  }

  getAnswerOptions() {}
}
