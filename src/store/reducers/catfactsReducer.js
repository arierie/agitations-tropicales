export const initialState = {
  fact: '',
  length: 0,
  isLoading: false,
  error: null,
};

const catfactsReducer = (state, action) => {
  switch (action.type) {
    case 'FETCH_FACTS_REQUEST':
      return {...state, isLoading: true, error: null};
    case 'FETCH_FACTS_SUCCESS':
      return {
        ...state,
        isLoading: false,
        fact: action.payload.fact,
        length: action.payload.length,
      };
    case 'FETCH_FACTS}_FAILURE':
      return {...state, isLoading: false, error: action.payload};
    default:
      return state;
  }
};

export default catfactsReducer;
