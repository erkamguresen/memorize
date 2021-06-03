import { handleDataPreparation } from '../handlers/dataPrepareHandler.js';
let itemList = document.getElementById('file-list');

//delete event
itemList.addEventListener('click', handleDataPreparation);
