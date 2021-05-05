let itemList = document.getElementById("file-list");

//delete event
itemList.addEventListener("click", prepareData);

function prepareData(e) {
  if (e.target.classList.contains("play")) {
    let currentLi = e.target.parentElement;
    console.log(currentLi);

    //     //there is formatting and extra X so use first child which is the only tex node :-)
    //     let text = currentLi.firstChild.textContent.trim();

    //     let isConfirmed = confirm(`Are you sure you want to delete:    ${text} ?`);

    //     if (isConfirmed) {
    //       itemList.removeChild(currentLi);
    //     }
  }
}
