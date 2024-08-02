import React, {createContext, useContext} from 'react';
import {useQuery} from '@tanstack/react-query';
import {handleFetch} from '../data/api';
const CatFactsContext = createContext();

export const CatFactsProvider = ({children}) => {
  const {data, error, isLoading} = useQuery({
    queryKey: ['catFacts'],
    queryFn: handleFetch,
  });

  return (
    <CatFactsContext.Provider value={{data, error, isLoading}}>
      {children}
    </CatFactsContext.Provider>
  );
};

export const useCatFacts = () => useContext(CatFactsContext);
