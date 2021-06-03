import { uploadFile } from '../procedures/fileUpload.js';

export function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

export function highlight(e) {
  dropArea.classList.add('highlight');
}

export function unhighlight(e) {
  dropArea.classList.remove('highlight');
}

export function handleDrop(e) {
  let dt = e.dataTransfer;
  let files = dt.files;

  handleFiles(files);
}

//without previewFile
function handleFiles(files) {
  [...files].forEach(uploadFile);
}
