import axios from 'axios';

export const FETCH_FACTS = 'FETCH_FACTS';

export const fetchFacts = () => ({
  type: FETCH_FACTS,
  payload: axios.get('https://catfact.ninja/fact'),
});
