import React, { useState } from 'react'

import ConstructGrafico from './components/constructGrafico'
import CreateTableData from './components/createTableData'
import SelectDadosUsina from './components/SelectDadosUsina'

const App = () => {
  const [dados, setDados] = useState()
  function onChange(value) {
    setDados(value)
  }

  return (
    <>
      <SelectDadosUsina onChange={onChange} />
      <ConstructGrafico dados={dados} />
      <CreateTableData />
    </>
  )
}

export default App
