import React from 'react';

import ConstructGrafico from './components/constructGrafico';
import SelectDadosUsina from './components/SelectDadosUsina';

const App = () => {
  return (
    <>
      <SelectDadosUsina />
      <ConstructGrafico />
    </>
  )
}

export default App;