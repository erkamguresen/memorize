import { handleDataPreparation } from '../handlers/newDataFromFileHandler.js';
let itemList = document.getElementById('file-list');

itemList.addEventListener('click', handleDataPreparation);
