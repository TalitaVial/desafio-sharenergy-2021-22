import React from 'react'

import { dadosUsina } from '../data/dadosUsina.json'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer
} from 'recharts'

export default function ConstructGrafico({ dados }) {
  return (
    <ResponsiveContainer height={300} width="70%">
      <LineChart
        data={dadosUsina}
        margin={{ top: 75, right: 30, left: 50, bottom: 6 }}
      >
        <XAxis dataKey="tempo_h" />
        <YAxis />
        <CartesianGrid strokeDasharray="5 5" />
        <Tooltip />
        <Legend verticalAling="top" height={300} />
        <Line name={dados} type="monotone" dataKey={dados} stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  )
}
