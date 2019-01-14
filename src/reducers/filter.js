import types from '../actions/types';

const {SET_TEXT_FILTER,SORT_BY_NAME} = types;

const defaultFiltertState = {
  text : '',
  sortBy : 'name'  
};

export const filterReducer = (state = defaultFiltertState, action = {}) => {
  switch(action.type){
    case SET_TEXT_FILTER :
      return {...state, text : action.text} 
    case SORT_BY_NAME :
      return {...state, sortBy : action.sortBy}     
    default :
      return state;
  }
}