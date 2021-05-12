/**
 * This function is the main function for Let's memorize part
 * It starts memorize event and prepares the data and the page
 */
function quiz() {
  //get the selected data name from page
  const setName = document.querySelector("#data-name").textContent;

  //construct the data name to get it from localStorage
  const dataSetName = `${setName} Data`;

  let dataSet = JSON.parse(localStorage.getItem(dataSetName));

  //hide aside panel
  hideAside(); //will load from study

  //setup main panel
  setupMainQuizPanel(setName);

  //TODO: prepare memorize object: this is the whole data which will be saved and downloaded
  /*
   * {
   *  level0: [],
   *  level1: [],
   *  level2: [],
   * }
   * 
   * each inner object will be as follows:
   * {
   * question: '', 
   * optionAnswer : {}|'',
   * option1: '',
   * option2: '',
   * option3: '',
   * option4: '',
   * option5: '',
   * }
   */
  const memorizeObject ;

  //TODO: randomly select level

  //TODO: randomly select a question from the selected level

  //TODO: prepare the question card

  //TODO: Get the answer 

  //TODO: Check the answer and move it to the correct level

  //load flash cards to study
  loadQuestionCards(dataSet);
}

/**
 * This function get the name of the data set and prepares
 * the main panel for studies.
 *
 * @param {string} titleToStudy  name of the data set which
 * will be studied
 */
function setupMainQuizPanel(titleToStudy) {
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
  h1.textContent = `Let's Memorize the ${titleToStudy}`;
  display.appendChild(h1);

  const memorizeDiv = document.createElement("div");
  memorizeDiv.setAttribute("id", "memorize");
  display.appendChild(memorizeDiv);

  mainTag.appendChild(display);
}

/**
 *  This function prepares and displays the questions
 *
 * @param {object} dataSets data object. Received data will
 * have the following properties:
 *
 * { 'header': valueOfHeader,
 * 'value': valueOfTheElement,
 * 'progress': valueOfTheProgress,}
 */
function loadQuestionCards(dataSets) {
  const memorizeDiv = document.getElementById("memorize");



  // add flash cards
  let index = 0;
  for (let i = 0; i < dataSet.length; i++) {
    const questionPreFix = "What is the correct answer ?";
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

      //TODO: answer part of the flash card
      const answer = document.createElement("answer");
      answer.style.display = "block";
      answer.style.visibility = "hidden";
      answer.textContent = element.value;
      card.appendChild(answer);

      //add  flash card to display panel
      studyDiv.appendChild(card);

      //TODO: add a click even to show the answer
      card.addEventListener("click", showAnswer);

      //increment index
      index++;
    }
  }

  /*
   * all flash cards are hidden. each time only one of them will be shown.
   * initialize the index 0 card as the default displayed card
   */
  let startCard = document.querySelector(`div[index= '0']`);

  startCard.style.display = "block";
  //add an id to select this card easily in the future
  startCard.id = "visible-card";

  //add click event listeners to enable navigation between the flash cards
  // previousButton.addEventListener("click", previousFlashCard, false);
  // nextButton.addEventListener("click", nextFlashCard, false);
}
