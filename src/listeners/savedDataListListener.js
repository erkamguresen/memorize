import { handleSavedDataPreparation } from '../handlers/savedDataPreparationHandler.js';

let savedDataList = document.getElementById('existing-dataSet-list');

savedDataList.addEventListener('click', handleSavedDataPreparation);
