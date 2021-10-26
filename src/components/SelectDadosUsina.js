import React from "react";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

const SelectDadosUsina= () => {
  const [selected, setSelected] = React.useState('tensao_V');
 
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  return (
    <>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <InputLabel id="selectd-standard">Selecione</InputLabel>
        <Select labelId="selectd-standard" id="selectd-standard" value={selected} onChange={handleChange}>  
        <MenuItem value="tensao_V">Tensão</MenuItem>
        <MenuItem value="potencia_KW">Potência</MenuItem>
        <MenuItem value="corrente_A">Corrente</MenuItem>
        <MenuItem value="temperatura_C">Temperatura</MenuItem>
        </Select>
      </FormControl>
    </>
  )
  
};

export default SelectDadosUsina;
