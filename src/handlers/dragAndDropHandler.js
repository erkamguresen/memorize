import { uploadFile } from '../procedures/upload-files.js';

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

  [...files].forEach(uploadFile);
}

//without previewFile
export function handleFiles(event) {
  const files = event.currentTarget.files;
  [...files].forEach(uploadFile);
}
