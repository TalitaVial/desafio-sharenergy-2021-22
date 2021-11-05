import React from 'react'

import { Switch, Route } from 'react-router-dom'
import App from './App'
import CreateTableData from './components/createTableData'

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact>
        <App />
      </Route>
      <Route path="/tabela">
        <CreateTableData />
      </Route>
    </Switch>
  )
}
