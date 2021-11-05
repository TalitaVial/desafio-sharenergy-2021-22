import React, { useState } from 'react'

import ConstructGrafico from './components/constructGrafico'
import SelectDadosUsina from './components/SelectDadosUsina'
import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

export default function App() {
  const history = useHistory()

  const [dados, setDados] = useState()
  function onChange(value) {
    setDados(value)
  }

  return (
    <>
      <SelectDadosUsina onChange={onChange} />
      <ConstructGrafico dados={dados} />
      <Button
        variant="outlined"
        onClick={() => {
          history.push('./tabela')
        }}
      >
        Tabela
      </Button>
    </>
  )
}
