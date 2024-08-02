import React from 'react';
import {CatFactsProvider} from './store/hooks/catfactsContext';
import MainComponent from './components/MainComponent';

const App = () => {
  return (
    <CatFactsProvider>
      <MainComponent />
    </CatFactsProvider>
  );
};

export default App;
