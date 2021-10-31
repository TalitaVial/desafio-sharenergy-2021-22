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
import { Paper } from '@material-ui/core'

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
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
