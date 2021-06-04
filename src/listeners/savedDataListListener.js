import { handleSavedDataPreparation } from '../handlers/savedDataPreparationHandler';

let savedDataList = document.getElementById('existing-dataSet-list');

savedDataList.addEventListener('click', handleSavedDataPreparation);
