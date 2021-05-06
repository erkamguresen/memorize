function study() {
  let dataSetName = document.querySelector("#data-name").textContent;
  dataSetName = `${dataSetName} Data`;

  let dataSet = JSON.parse(localStorage.getItem(dataSetName));

  //   console.log(dataSetName);
  //   console.log(typeof dataSet);
  //   console.log(dataSet[0]);
  // console.log(dataSet);
  // console.log(`Study`);

  //hide aside
  hideAside();

  //setup main panel
  setupMainPanel();

  //load flash cards to study
  loadFlashCards(dataSet);
}

function hideAside() {
  const aside = document.querySelector("aside");
  aside.style.display = "none";
}

function setupMainPanel() {
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
  h1.textContent = "Study";
  display.appendChild(h1);

  const studyDiv = document.createElement("div");
  studyDiv.setAttribute("id", "study");
  display.appendChild(studyDiv);

  mainTag.appendChild(display);
}

function loadFlashCards(dataSet) {}
