/**
 *
 * @param {string} dataSetName name of the data set which is also the file name
 * @returns a <li> element with dataset name and button for data preparation
 */
export function getNewDataSetElement(dataSetName) {
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
