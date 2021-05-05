let itemList = document.getElementById("file-list");

//delete event
itemList.addEventListener("click", prepareData);

function prepareData(e) {
  if (e.target.classList.contains("play")) {
    let dataSetName = getDataSetName(e);

    //TODO :make objects
    let dataObjects = getDataObject(dataSetName);

    // let dataJSON = JSON.stringify(dataObject);

    //TODO: Save data object to local storage
    localStorage.setItem(`${dataSetName}Data`, dataObjects);
    // localStorage.setItem(`${dataSetName}Data`, dataJSON);

    console.log(localStorage.getItem(`${dataSetName}Data`));

    //TODO: Main panel content

    //TODO: H1 data set name

    //TODO: Button for study button

    //TODO: Button for quiz

    // console.log(sessionStorage.getItem(dataSetName));

    //     //there is formatting and extra X so use first child which is the only tex node :-)
    //     let text = currentLi.firstChild.textContent.trim();

    //     let isConfirmed = confirm(`Are you sure you want to delete:    ${text} ?`);

    //     if (isConfirmed) {
    //       itemList.removeChild(currentLi);
    //     }
  }
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

    console.log(lines);
  } catch (e) {
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
      line += char;
      returnArray.push(line);
      break;
    }

    if (char !== "\n") {
      line += char;
      continue;
    } else {
      // char === "\n"
      returnArray.push(line);

      line = "";
    }
  }

  return returnArray;
}

function getWordTokens(textLineToTokenize) {
  let returnArray = [];
  let word = "";

  for (let i = 0; i < textLineToTokenize.length; i++) {
    let char = textLineToTokenize[i];

    if (i === textLineToTokenize.length - 1) {
      if (char !== " " && char !== "" && char !== "\n") word += char;

      returnArray.push(word);

      break;
    }

    if (
      char !== "\n" &&
      char !== "\t" &&
      char !== " " &&
      char !== "\r" &&
      char !== "\f"
    ) {
      word += char;

      continue;
    } else {
      if (word !== " " && word !== "" && word !== "\n") returnArray.push(word);

      word = "";
      continue;
    }
  }

  return returnArray;
}
