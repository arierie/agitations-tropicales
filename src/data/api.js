import axios from 'axios';

export const fetchData = async () => {
  const response = await axios.get('https://catfact.ninja/fact');
  return response.data;
};

export const handleFetch = async dispatch => {
  dispatch({type: 'FETCH_FACTS_REQUEST'});
  try {
    const data = await fetchData();
    dispatch({type: 'FETCH_FACTS_SUCCESS', payload: data});
  } catch (error) {
    dispatch({type: 'FETCH_FACTS_FAILURE', payload: error});
  }
};
