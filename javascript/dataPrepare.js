/*
 * Data Structure
 * ----------------
 * Raw data comes as an matrix (n x m) with the first row as the headers.
 * Headers are used as property in object and question in quiz
 *
 * Values in a rows are related to each other and will used for
 * question pairs or study pairs.
 *
 * Each row must have same size with header (row 0)
 *
 * Final data matrix will have size (n-1 x m).
 * Each element of the matrix will be an object
 * { 'header': valueOfHeader,
 * 'value': valueOfTheElement,
 * 'progress': valueOfTheProgress,}
 *
 * Progress value is the # of correct answers.
 * Progress value will represent knowledge level.
 * Progress value can be at least 0: meaning first level.
 *
 * If answer is correct progress will be increased by 1,
 * if answer is wrong progress will be decreased by 1.
 */

let itemList = document.getElementById("file-list");

//delete event
itemList.addEventListener("click", prepareData);

function prepareData(e) {
  if (e.target.classList.contains("play")) {
    let dataSetName = getDataSetName(e);

    // make objects
    let dataObjects = getDataObject(dataSetName);

    // Save data object to local storage
    let dataJSON = JSON.stringify(dataObjects);
    localStorage.setItem(`${dataSetName} Data`, dataJSON);

    prepareMainPanel(dataSetName);
  }
}

function prepareMainPanel(title) {
  const dataSetName = `${title} Data`;
  let mainPanel = document.querySelector("main");
  // console.log(mainPanel);

  //H1 data set name and span for data set name

  const h1Element = document.createElement("h1");
  h1Element.innerHTML = `"<span id='data-name'>${title}</span>" is ready!`;
  //clear mainPanel if there is stg
  mainPanel.innerHTML = "";
  mainPanel.appendChild(h1Element);

  //Buttons Div
  const buttonsDiv = document.createElement("div");
  buttonsDiv.className = "buttons-div";
  mainPanel.appendChild(buttonsDiv);

  // Button for study button
  let studyButton = document.createElement("button");
  studyButton.className = "btn info";
  studyButton.textContent = "Study";
  studyButton.setAttribute("onclick", "study()");
  buttonsDiv.appendChild(studyButton);

  // Button for quiz
  let quizButton = document.createElement("button");
  quizButton.className = "btn success";
  quizButton.textContent = `Let's Memorize`;
  quizButton.setAttribute("onclick", "quiz()");
  buttonsDiv.appendChild(quizButton);
}

function getDataSetName(event) {
  let currentElement = event.target.parentElement;

  while (currentElement.tagName.toLowerCase() !== "li") {
    currentElement = currentElement.parentElement;
  }

  return currentElement.firstChild.textContent;
}

function getDataObject(dataSetName) {
  let returnArray = [];

  try {
    let rawData = sessionStorage.getItem(dataSetName);
    let lines = getLineTokens(rawData);

    let headers = getWordTokens(lines[0]);

    if (rawData.length <= 1) {
      throw new ValidationError("Whoops! Data file has problems...");
    }
    //each row will contain related objects
    for (let i = 1; i < lines.length; i++) {
      let row = getWordTokens(lines[i]);
      let dataRaw = [];

      if (headers.length !== row.length)
        throw new Error(
          "RangeError",
          `${i}th row of data table does not have same length with header row`
        );

      //Correct answer level will be stored in the progress variable

      for (let j = 0; j < headers.length; j++) {
        let newObject = {
          header: headers[j],
          value: row[j],
          progress: 0,
        };

        dataRaw.push(newObject);
      }

      returnArray.push(dataRaw);
    }

    // console.log(lines);
  } catch (e) {
    console.error(e.message);
    console.error(e);
  }

  return returnArray;
}

function getLineTokens(textToTokenize) {
  let returnArray = [];
  let line = "";

  for (let i = 0; i < textToTokenize.length; i++) {
    let char = textToTokenize[i];

    if (i === textToTokenize.length - 1) {
      if (char !== "\n" && char !== "\r") {
        line += char;
      }

      if (line !== "") returnArray.push(line);

      break;
    }

    if (char !== "\n" && char !== "\r") {
      line += char;
      continue;
    } else {
      // char === "\n" || char === "\r"
      if (line !== "") returnArray.push(line);

      //reset line variable
      line = "";
    }
  }

  return returnArray;
}

function getWordTokens(textLineToTokenize) {
  let returnArray = [];
  let word = "";

  //remove white spaces in the line
  textLineToTokenize = textLineToTokenize.trim();

  for (let i = 0; i < textLineToTokenize.length; i++) {
    let char = textLineToTokenize[i];

    if (i === textLineToTokenize.length - 1) {
      if (
        // char !== " " &&
        char !== "" &&
        char !== "\n"
      )
        word += char;

      returnArray.push(word);

      break;
    }

    if (
      char !== "\n" &&
      char !== "\t" &&
      // char !== " " &&
      char !== "\r" &&
      char !== "\f"
    ) {
      word += char;

      continue;
    } else {
      if (
        // word !== " " &&
        word !== "" &&
        word !== "\n"
      )
        returnArray.push(word);

      word = "";
      continue;
    }
  }

  return returnArray;
}
