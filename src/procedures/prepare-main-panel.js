import { prepareMemorizeListeners } from '../listeners/memorizeListener.js';
import { addRandomFlashCardEventListener } from '../listeners/randomFlashCardListener.js';
import { prepareStudyListeners } from '../listeners/studyListener.js';

export function prepareMainPanelToChoose(title) {
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

/**
 * This function get the name of the data set and prepares
 * the main panel for studies.
 *
 * @param {string} titleToStudy  name of the data set which
 * will be studied
 */
export function setupMainPanelToStudy(titleToStudy) {
  const mainTag = document.querySelector('main');

  //remove the left border
  const mainDiv = document.querySelector('#main-container');
  mainDiv.className = '';
  mainTag.style.border = 'none';

  //empty main panel
  mainTag.innerHTML = '';

  const display = document.createElement('div');
  display.setAttribute('id', 'display');

  const h1 = document.createElement('h1');
  h1.textContent = `Study ${titleToStudy}`;
  display.appendChild(h1);

  const toggleDiv = document.createElement('div');
  toggleDiv.className = 'flex';
  toggleDiv.style.justifyContent = 'center';

  const toggleLabel = document.createElement('label');
  toggleLabel.id = 'toggle-label';
  toggleLabel.innerText = 'Random Flash Cards';
  toggleLabel.style.marginRight = '10px';
  toggleDiv.appendChild(toggleLabel);

  const toggleButton = document.createElement('label');
  toggleButton.className = 'switch';

  const toggleInput = document.createElement('input');
  toggleInput.id = 'toggle-input';
  toggleInput.type = 'checkbox';
  toggleButton.appendChild(toggleInput);

  const toggleSpan = document.createElement('span');
  toggleSpan.className = 'slider round';
  toggleButton.appendChild(toggleSpan);

  toggleDiv.appendChild(toggleButton);

  display.appendChild(toggleDiv);

  //add event listener for random card toggle
  addRandomFlashCardEventListener(toggleInput);

  const studyDiv = document.createElement('div');
  studyDiv.setAttribute('id', 'study');
  display.appendChild(studyDiv);

  mainTag.appendChild(display);
}
