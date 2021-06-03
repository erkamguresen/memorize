export function getNewDataSetElement(dataSetName, data) {
  console.log('getNewDataSetElement');
  let newDataSet = document.createElement('li');

  newDataSet.appendChild(document.createTextNode(dataSetName));
  newDataSet.className = 'list-group-item';

  let playButton = document.createElement('button');

  playButton.className = 'btn success btn-sm float-right play';

  let icon = document.createElement('i');
  icon.className = 'fa fa-play play';

  playButton.appendChild(icon);

  newDataSet.appendChild(playButton);

  return newDataSet;
}
