/**
 * This function takes an array of flash cards and
 * assigns each of them a new random index in their randomIndex property
 *
 * @param {[FlashCard]} flashCards array of flash card
 * to change the randomIndex property
 */
export function randomizeFlashCards(flashCards) {
  flashCards.forEach((flashCard) => {
    flashCard.randomIndex = Math.random();
  });
}
