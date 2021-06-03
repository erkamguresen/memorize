import { prepareMemorizeListeners } from '../listeners/memorizeListener.js';
import { prepareStudyListeners } from '../listeners/studyListener.js';

export function prepareMainPanel(title) {
  const dataSetName = `${title} Data`;
  let mainPanel = document.querySelector('main');
  // console.log(mainPanel);

  //H1 data set name and span for data set name

  const h1Element = document.createElement('h1');
  h1Element.innerHTML = `"<span id='data-name'>${title}</span>" is ready!`;
  //clear mainPanel if there is stg
  mainPanel.innerHTML = '';
  mainPanel.appendChild(h1Element);

  //Buttons Div
  const buttonsDiv = document.createElement('div');
  buttonsDiv.className = 'buttons-div';
  mainPanel.appendChild(buttonsDiv);

  // Button for study button
  let studyButton = document.createElement('button');
  studyButton.className = 'btn info';
  studyButton.textContent = 'Study';
  studyButton.id = 'study-button';
  // studyButton.setAttribute('onclick', 'study()');
  buttonsDiv.appendChild(studyButton);

  prepareStudyListeners(studyButton);

  // Button for quiz
  let quizButton = document.createElement('button');
  quizButton.className = 'btn success';
  quizButton.textContent = `Let's Memorize`;
  // quizButton.setAttribute('onclick', 'quiz()');
  buttonsDiv.appendChild(quizButton);

  prepareMemorizeListeners(quizButton);
}
