function quiz() {
  //Button for saving current progress
  document.getElementById("progress-button").style.display = "block";
  let dataSetName = document.querySelector("#data-name").textContent;
  dataSetName = `${dataSetName} Data`;

  let dataSet = JSON.parse(localStorage.getItem(dataSetName));

  //   console.log(dataSetName);
  //   console.log(typeof dataSet);
  //   console.log(dataSet[0]);
  //   console.log(dataSet);

  //   let dataJSON = JSON.stringify(dataSet);
  // localStorage.setItem(`${dataSetName}Data`, dataJSON);
  // console.log(localStorage.getItem(`${dataSetName}Data`));
  //   console.log(dataJSON);
  // console.log(sessionStorage.getItem(dataSetName));
  //     //there is formatting and extra X so use first child which is the only tex node :-)
  //     let text = currentLi.firstChild.textContent.trim();
  //     let isConfirmed = confirm(`Are you sure you want to delete:    ${text} ?`);
  //     if (isConfirmed) {
  //       itemList.removeChild(currentLi);
  //     }

  console.log(`Let's memorize`);

  const aside = document.querySelector("aside");
  aside.style.display = "none";

  const mainTag = document.querySelector("main");
  mainTag.innerHTML = "<h1>Let's memorize</h1>";

  const mainDiv = document.querySelector("#main-container");
  mainDiv.className = "";
  mainTag.style.border = "none";
}