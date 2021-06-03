import { studyHandler } from '../handlers/studyHandler.js';

export function prepareStudyListeners(studyButton) {
  studyButton.addEventListener('click', studyHandler);
}
