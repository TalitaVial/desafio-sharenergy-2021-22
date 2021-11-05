import React from 'react'
import { dadosClientes } from '../data/dadosClientes.json'

import {
  Table,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody
} from '@material-ui/core'

import ModalEditCliente from './modalEditCliente'
import { Paper } from '@material-ui/core'
import Button from '@material-ui/core/Button'
import Stack from '@material-ui/core/Stack'
import DeleteIcon from '@material-ui/icons/Delete'
import AddBox from '@material-ui/icons/AddBox'

export default function CreateTableData() {
  return (
    <>
      <TableContainer component={Paper} sx={{ width: 500 }}>
        <Table size="small" aria-label="a dense table">
          <TableHead>
            <TableRow>
              <TableCell>Nº</TableCell>
              <TableCell>Nome</TableCell>
              <TableCell>Usina</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dadosClientes.map(cliente => (
              <TableRow>
                <TableCell>{cliente.numeroCliente}</TableCell>
                <TableCell>{cliente.nomeCliente}</TableCell>
                <TableCell>
                  <TableHead>
                    <TableRow>
                      <TableCell>ID</TableCell>
                      <TableCell>Percentual</TableCell>
                    </TableRow>
                  </TableHead>
                  {cliente.usinas.map(usina => (
                    <TableRow>
                      <TableCell>{usina.usinaId}</TableCell>
                      <TableCell>{usina.percentualDeParticipacao}%</TableCell>
                    </TableRow>
                  ))}
                </TableCell>
                <ModalEditCliente cliente={cliente} usina={cliente.usinas} />
                <Stack direction="row" spacing={2}>
                  <Button
                    variant="outlined"
                    startIcon={<DeleteIcon />}
                  ></Button>
                </Stack>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Stack>
          <Button
            sx={{ width: 150 }}
            direction="row"
            variant="outlined"
            startIcon={<AddBox />}
          >
            Adicionar
          </Button>
        </Stack>
      </TableContainer>
    </>
  )
}
