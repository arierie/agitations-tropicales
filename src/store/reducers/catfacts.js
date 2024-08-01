import {FETCH_FACTS} from '../actions/fetchCats';

const initialState = {
  fact: '',
  length: 0,
  isLoading: false,
  error: null,
};

const catfactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${FETCH_FACTS}_PENDING`:
      return {...state, isLoading: true};
    case `${FETCH_FACTS}_FULFILLED`:
      return {
        ...state,
        isLoading: false,
        fact: action.payload.data.fact,
        length: action.payload.data.length,
      };
    case `${FETCH_FACTS}_REJECTED`:
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default catfactsReducer;
