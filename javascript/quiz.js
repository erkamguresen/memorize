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
  setupMainPanel(setName);

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
function loadQuestionCards(dataSets) {}
