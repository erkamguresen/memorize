/**
 * This function is the main function for study
 * It starts study event and prepares the data and the page
 */
function study() {
  //get the selected data name from page
  const setName = document.querySelector("#data-name").textContent;

  //construct the data name to get it from localStorage
  const dataSetName = `${setName} Data`;

  let dataSet = JSON.parse(localStorage.getItem(dataSetName));

  //hide aside panel
  hideAside();

  //setup main panel
  setupMainPanel(setName);

  //load flash cards to study
  loadFlashCards(dataSet);
}

/**
 * This function hides the aside panel
 */
function hideAside() {
  const aside = document.querySelector("aside");
  aside.style.display = "none";
}

/**
 * This function get the name of the data set and prepares
 * the main panel for studies.
 *
 * @param {string} titleToStudy  name of the data set which
 * will be studied
 */
function setupMainPanel(titleToStudy) {
  const mainTag = document.querySelector("main");

  //remove the left border
  const mainDiv = document.querySelector("#main-container");
  mainDiv.className = "";
  mainTag.style.border = "none";

  //empty main panel
  mainTag.innerHTML = "";

  const display = document.createElement("div");
  display.setAttribute("id", "display");

  const h1 = document.createElement("h1");
  h1.textContent = `Study ${titleToStudy}`;
  display.appendChild(h1);

  const studyDiv = document.createElement("div");
  studyDiv.setAttribute("id", "study");
  display.appendChild(studyDiv);

  mainTag.appendChild(display);
}

/**
 *
 * @param {object} dataSet is the data set from which the flash
 * cards are generated
 */
function loadFlashCards(dataSet) {
  const studyDiv = document.getElementById("study");

  //add previous button
  const previousButton = document.createElement("button");
  previousButton.setAttribute("id", "previous");
  previousButton.className = "icon-btn";
  const leftIcon = document.createElement("i");
  leftIcon.className = "fa fa-chevron-left fa-3x";
  previousButton.appendChild(leftIcon);
  studyDiv.appendChild(previousButton);

  // add flash cards
  let index = 0;
  for (let i = 0; i < dataSet.length; i++) {
    const questionPreFix = "What is the answer ?";
    const questionPostFix = `(${dataSet[i][0].value})`;

    for (let j = 1; j < dataSet[i].length; j++) {
      //for each element in the matrix
      const element = dataSet[i][j];

      //generate a flash card
      const card = document.createElement("div");
      card.className = "card";
      card.style.display = "none";
      card.setAttribute("index", index);

      //question part of the flash card
      const question = document.createElement("question");
      question.style.display = "block";
      question.innerHTML = `<p>${questionPreFix}</p>
      <p>${element.header} ${questionPostFix}</p>`;
      card.appendChild(question);

      //answer part of the flash card
      const answer = document.createElement("answer");
      answer.style.display = "block";
      answer.style.visibility = "hidden";
      answer.textContent = element.value;
      card.appendChild(answer);

      //add  flash card to display panel
      studyDiv.appendChild(card);

      //add a click even to show the answer
      card.addEventListener("click", showAnswer);

      //increment index
      index++;
    }
  }

  /*
   * all flash cards are hidden. each time only one of them will be shown.
   * initialize the index 0 card as the default displayed card
   */
  //TODO: reverse to index 0 card
  // let startCard = document.querySelector(`div[index= '0']`);

  let startCard = document.querySelector(`div[index= '3']`);

  console.log(startCard);
  startCard.style.display = "block";
  startCard.id = "visible-card";

  //add next button
  const nextButton = document.createElement("button");
  nextButton.setAttribute("id", "next");
  nextButton.className = "icon-btn";
  const rightIcon = document.createElement("i");
  rightIcon.className = "fa fa-chevron-right fa-3x";
  nextButton.appendChild(rightIcon);
  studyDiv.appendChild(nextButton);

  //add click event listeners to enable navigation between the flash cards
  previousButton.addEventListener("click", previousFlashCard, false);
  nextButton.addEventListener("click", nextFlashCard, false);
}

/**
 * This function show the hidden answer part of the flash card
 *
 * @param {object} event  the click event
 */
function showAnswer(event) {
  event.preventDefault();

  let currentElement = event.target;

  while (currentElement.tagName.toLowerCase() !== "div") {
    currentElement = currentElement.parentElement;
  }

  let answerElement = currentElement.lastChild;

  answerElement.style.visibility = "visible";
}

/**
 * This function shows the previous flash card if there is any
 *
 * @param {object} event the previous flash card click event
 */
function previousFlashCard(event) {
  event.preventDefault();
  //TODO: previous flash card

  //TODO: Bug does not show 0 and continues backwards
  const currentElement = document.querySelector("#visible-card");

  console.log(currentElement);

  //get current flash card index
  const currentIndex = currentElement.getAttribute("index");

  console.log(currentIndex);
  //check if the index is 0
  if (currentIndex !== 0) {
    //get previous flash card
    let previousElement = currentElement.previousSibling;
    previousElement.style.display = "block";
    console.log(previousElement);
    previousElement.id = "visible-card";

    //set current flash card
    currentElement.style.display = "none";
    //display : none & answer visibility: hidden
    currentElement.lastChild.style.visibility = "hidden";
    console.log(currentElement.lastChild);
    //remove add id of visible-card
    currentElement.id = "";
  }

  console.log("pre");
}

/**
 * This function shows the next flash card if there is any
 *
 * @param {object} event click event that is fired to request the next flash card
 */
function nextFlashCard(event) {
  event.preventDefault();
  //TODO next flash card
  console.log("next");
}
