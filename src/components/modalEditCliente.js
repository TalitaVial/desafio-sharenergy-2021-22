import React from 'react'

import { Box } from '@material-ui/system'
import Edit from '@material-ui/icons/Edit'
import Cancel from '@material-ui/icons/Cancel'
import TextField from '@material-ui/core/TextField'
import { Button, Modal } from '@material-ui/core'
import CheckIcon from '@material-ui/icons/Check'

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  height: '50%',
  bgcolor: 'white',
  border: '1px solid rgba(25, 118, 210, 0.5)',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3
}

export default function ModalEditCliente({ cliente, usina }) {
  const [open, setOpen] = React.useState(false)

  const handleOpenModal = () => {
    setOpen(true)
  }
  const handleCloseModal = () => {
    setOpen(false)
  }

  return (
    <>
      <Button
        onClick={handleOpenModal}
        variant="outlined"
        startIcon={<Edit />}
      ></Button>
      <Modal hideBackdrop open={open} onclose={handleCloseModal}>
        <Box sx={{ ...style }}>
          <Button
            variant="outlined"
            onClick={handleCloseModal}
            startIcon={<Cancel />}
          ></Button>
          <TextField id="fullWidth" value={cliente.nomeCliente} />
          {cliente.usinas.map(usina => (
            <TextField id="fullWidth" value={usina.percentualDeParticipacao} />
          ))}
          <Button variant="outlined" startIcon={<CheckIcon />}>
            Salvar Alterações
          </Button>
        </Box>
      </Modal>
    </>
  )
}
