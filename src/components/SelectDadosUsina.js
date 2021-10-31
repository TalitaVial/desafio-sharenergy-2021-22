import React, { useState, useEffect } from 'react'

import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

export default function SelectDadosUsina(props) {
  const [selected, setSelected] = useState('tensao_V')

  const handleChange = event => {
    setSelected(event.target.value)
  }
  useEffect(() => {
    props.onChange(selected)
  }, [selected])

  return (
    <>
      <FormControl variant="standard" sx={{ m: 5, minWidth: 120 }}>
        <InputLabel id="selectd-standard">Selecione</InputLabel>
        <Select
          labelId="selectd-standard"
          id="selectd-standard"
          value={selected}
          onChange={handleChange}
        >
          <MenuItem value="tensao_v">Tensão</MenuItem>
          <MenuItem value="potencia_kW">Potência</MenuItem>
          <MenuItem value="corrente_A">Corrente</MenuItem>
          <MenuItem value="temperatura_C">Temperatura</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
