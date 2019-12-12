import { combineReducers } from 'redux';

const breeds = (state = {}, action) => {
  let filteredList;
  switch (action.type) {

    case 'SET_DOG_LIST':
      const dogList = action.payload;
      filteredList = action.payload;
      return {
          ...state,
          dogList,
          filteredList
      };

    case 'CHANGE_ACTIVE_BREED':
      const activeDogBreed = action.payload;
      return {
          ...state,
          activeDogBreed
      }

    case 'FILTER_LIST':
      const filter = action.payload;
      let filteredList = state.dogList.filter((item) => {
        return item.toLowerCase().search(
          filter.toLowerCase()) !== -1;
      });
      return {
        ...state,
        filteredList
      }
  
    default:
      return state;
  }
};

export default breeds;
