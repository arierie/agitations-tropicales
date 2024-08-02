import React from 'react';
import {CatFactsProvider} from './hooks/catfactsContext';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import MainComponent from './components/MainComponent';

const queryClient = new QueryClient();

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <CatFactsProvider>
        <MainComponent />
      </CatFactsProvider>
    </QueryClientProvider>
  );
};

export default App;
