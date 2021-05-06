function study() {
  const setName = document.querySelector("#data-name").textContent;
  const dataSetName = `${setName} Data`;

  let dataSet = JSON.parse(localStorage.getItem(dataSetName));

  //   console.log(dataSetName);
  //   console.log(typeof dataSet);
  //   console.log(dataSet[0]);
  // console.log(dataSet);
  // console.log(`Study`);

  //hide aside
  hideAside();

  //setup main panel
  setupMainPanel(setName);

  //load flash cards to study
  loadFlashCards(dataSet);
}

function hideAside() {
  const aside = document.querySelector("aside");
  aside.style.display = "none";
}

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
      const element = dataSet[i][j];

      const card = document.createElement("div");
      card.className = "card";
      card.style.display = "none";
      card.setAttribute("index", index);

      const question = document.createElement("question");
      question.style.display = "block";
      question.innerHTML = `<p>${questionPreFix}</p>
      <p>${element.header} ${questionPostFix}</p>`;
      card.appendChild(question);

      const answer = document.createElement("answer");
      answer.style.display = "block";
      answer.style.visibility = "hidden";
      answer.textContent = element.value;
      card.appendChild(answer);

      studyDiv.appendChild(card);
      // console.log(element);
      card.addEventListener("click", showAnswer(index));
    }
  }

  // display index 0 card
  let startCard = document.querySelector(`div[index= '0']`);
  console.log(startCard);
  startCard.style.display = "block";

  //add next button
  const nextButton = document.createElement("button");
  nextButton.setAttribute("id", "next");
  nextButton.className = "icon-btn";
  const rightIcon = document.createElement("i");
  rightIcon.className = "fa fa-chevron-right fa-3x";
  nextButton.appendChild(rightIcon);
  studyDiv.appendChild(nextButton);

  //TODO: add event listeners
  // previousButton;
  // nextButton;
}

function showAnswer(event) {
  // event.preventDefault();
  console.log("object");
  // let answer = document.querySelector(`div[index= '${cardIndex}'] answer`);
  // console.log(answer);
}
