import React, {createContext, useReducer, useContext, useEffect} from 'react';

import catFactsReducer, {initialState} from '../reducers/catfactsReducer';
import {handleFetch} from '../../data/api';
const CatFactsContext = createContext(initialState);

export const CatFactsProvider = ({children}) => {
  const [state, dispatch] = useReducer(catFactsReducer, initialState);

  useEffect(() => {
    handleFetch(dispatch);
  }, []);

  return (
    <CatFactsContext.Provider value={{state, dispatch}}>
      {children}
    </CatFactsContext.Provider>
  );
};

export const useCatFacts = () => useContext(CatFactsContext);
