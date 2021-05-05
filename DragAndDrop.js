let dropArea = document.getElementById("drop-area");

["dragenter", "dragover", "dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

["dragenter", "dragover"].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight);
});
["dragleave", "drop"].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight);
});

function highlight(e) {
  dropArea.classList.add("highlight");
}

function unhighlight(e) {
  dropArea.classList.remove("highlight");
}

dropArea.addEventListener("drop", handleDrop);

function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

//without previewFile
function handleFiles(files) {
  [...files].forEach(uploadFile);
}

function uploadFile(file) {
  let textFromFile = "";
  let dataSetName = getFileName(file);
  let reader = new FileReader();

  reader.readAsText(file);
  //async problem code executes while file loading so when the console tries
  //to log the text from file it was not completed yet
  //Thus write into onload function

  reader.onload = function () {
    textFromFile = reader.result;

    let dataSetList = document.getElementById("file-list");

    let newDataSetElement = getNewDataSetElement(dataSetName, textFromFile);

    dataSetList.appendChild(newDataSetElement);

    sessionStorage.setItem(dataSetName, textFromFile);
  };

  reader.onerror = function () {
    console.log(reader.error);
  };

  console.log("hi 2");
}

function getFileName(file) {
  if (file.name.includes(".")) {
    let fileName = "";

    for (let i = 0; i < file.name.length; i++) {
      const char = file.name[i];

      if (char === ".") break;

      fileName += char;
    }

    return fileName;
  }

  return file.name;
}

function getNewDataSetElement(dataSetName, data) {
  let newDataSet = document.createElement("li");

  newDataSet.appendChild(document.createTextNode(dataSetName));
  newDataSet.className = "list-group-item";

  let playButton = document.createElement("button");

  playButton.className = "btn btn-success btn-sm float-right play";

  let icon = document.createElement("i");
  icon.className = "fa fa-play play";

  playButton.appendChild(icon);

  newDataSet.appendChild(playButton);

  return newDataSet;
}
