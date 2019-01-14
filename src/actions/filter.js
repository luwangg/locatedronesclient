import types from './types';

const {SET_TEXT_FILTER,SORT_BY_NAME} = types;

//SET_TEXT_FILTER 
export const setTextFilter = (text) => ({
  type : SET_TEXT_FILTER,
  text
});
//SORT_BY_NAME
export const setSortByNameFilter = () => ({
  type : SORT_BY_NAME,
  sortBy : 'name'
});
