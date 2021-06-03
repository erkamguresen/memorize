import {
  preventDefaults,
  highlight,
  unhighlight,
  handleDrop,
} from '../handlers/dragAndDropHandler.js';

let dropArea = document.getElementById('drop-area');

['dragenter', 'dragover', 'dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach((eventName) => {
  dropArea.addEventListener(eventName, highlight);
});

['dragleave', 'drop'].forEach((eventName) => {
  dropArea.addEventListener(eventName, unhighlight);
});

dropArea.addEventListener('drop', handleDrop);
