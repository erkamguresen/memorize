import { getMemorizeDataSetList } from '../procedures/IO-LocalStorage.js';
//TODO:explain data structure
/*
 * Data Structure
 * ----------------
 * Raw data comes as an matrix (n x m) with the first row as the headers.
 * Headers are used as property in object and question in quiz
 *
 * Values in a rows are related to each other and will used for
 * question pairs or study pairs.
 *
 * Each row must have same size with header (row 0)
 *
 * Final data matrix will have size (n-1 x m).
 * Each element of the matrix will be an object
 * { 'header': valueOfHeader,
 * 'value': valueOfTheElement,
 * 'progress': valueOfTheProgress,}
 *
 * Progress value is the # of correct answers.
 * Progress value will represent knowledge level.
 * Progress value can be at least 0: meaning first level.
 *
 * If answer is correct progress will be increased by 1,
 * if answer is wrong progress will be decreased by 1.
 */

export const memorizeDataBase = {
  dataSetList: getMemorizeDataSetList() || [],
};

//global flash card list
export let currentFlashCardList = [];
