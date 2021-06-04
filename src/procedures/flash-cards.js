import { flashCardList } from '../data/data.js';

import {
  addAnswerListener,
  addNextListener,
  addPreviousListener,
} from '../listeners/flashCardListener.js';

/**
 * This function prepares and displays the flash cards
 *
 * @param {object} dataSet is the data set from which the flash
 * cards are generated. Received data will have the following properties:
 *
 *  { 'header': valueOfHeader,
 * 'value': valueOfTheElement,
 * 'progress': valueOfTheProgress,}
 *
 */
export function loadFlashCards(dataSet) {
  const studyDiv = document.getElementById('study');

  //add previous button
  const previousButton = document.createElement('button');
  previousButton.id + 'previous';
  previousButton.className = 'icon-btn';
  const leftIcon = document.createElement('i');
  leftIcon.className = 'fa fa-chevron-left fa-3x';
  previousButton.appendChild(leftIcon);
  studyDiv.appendChild(previousButton);

  // add flash cards
  let index = 0;

  for (let i = 0; i < dataSet.memoSetList.length; i++) {
    const questionPreFix = 'What is the correct answer ?';

    const questionPostFix = ` (${dataSet.memoSetList[i].memoList[0].value})`;

    for (let j = 1; j < dataSet.memoSetList[i].memoList.length; j++) {
      //for each element in the matrix
      const element = dataSet.memoSetList[i].memoList[j];

      //generate a flash card
      const card = document.createElement('div');
      card.className = 'card';
      card.style.display = 'none';
      card.setAttribute('index', index);

      //question part of the flash card
      const question = document.createElement('question');
      question.style.display = 'block';
      question.innerHTML = `<p>${questionPreFix}</p>
        <p>${element.header} ${questionPostFix}</p>`;
      card.appendChild(question);

      //answer part of the flash card
      const answer = document.createElement('answer');
      answer.style.display = 'block';
      answer.style.visibility = 'hidden';
      answer.textContent = element.value;
      card.appendChild(answer);

      //add  flash card to display panel
      studyDiv.appendChild(card);

      //add a click even to show the answer
      addAnswerListener(card);

      //increment index
      index++;
    }
  }

  /*
   * all flash cards are hidden. each time only one of them will be shown.
   * initialize the index 0 card as the default displayed card
   */
  let startCard = document.querySelector(`div[index= '0']`);

  startCard.style.display = 'block';
  //add an id to select this card easily in the future
  startCard.id = 'visible-card';

  //add next button
  const nextButton = document.createElement('button');
  nextButton.id = 'next';
  nextButton.className = 'icon-btn';
  const rightIcon = document.createElement('i');
  rightIcon.className = 'fa fa-chevron-right fa-3x';
  nextButton.appendChild(rightIcon);
  studyDiv.appendChild(nextButton);

  addPreviousListener(previousButton);
  addNextListener(nextButton);

  console.log(flashCardList);
}
