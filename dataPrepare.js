let itemList = document.getElementById("file-list");

//delete event
itemList.addEventListener("click", prepareData);

function prepareData(e) {
  if (e.target.classList.contains("play")) {
    let dataSetName = getDataSetName(e);

    //TODO :make objects

    //TODO: Save data object to local storage

    console.log(sessionStorage.getItem(dataSetName));

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
