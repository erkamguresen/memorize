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
}

function hideAside() {
  const aside = document.querySelector("aside");
  aside.style.display = "none";

  const mainTag = document.querySelector("main");
  mainTag.innerHTML = "<h1>Study</h1>";

  const mainDiv = document.querySelector("#main-container");
  mainDiv.className = "";
  mainTag.style.border = "none";
}
