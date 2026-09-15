import Head from 'next/head'
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from 'recharts'

import { SectionTitle } from '../components/shared/SectionTitle'

const salaryHistories = [
  { month: '2021/04', salary: 650, bonusScaleFactor: 0.0 },
  { month: '2021/11', salary: 650, bonusScaleFactor: 1.0 },
  { month: '2022/05', salary: 680, bonusScaleFactor: 1.25 },
  { month: '2022/11', salary: 710, bonusScaleFactor: 1.25 },
  { month: '2023/05', salary: 760, bonusScaleFactor: 1.1 },
  { month: '2023/11', salary: 810, bonusScaleFactor: 1.25 },
  { month: '2024/05', salary: 900, bonusScaleFactor: 1.25 },
  { month: '2024/11', salary: 950, bonusScaleFactor: 1.7 },
  { month: '2025/05', salary: 990, bonusScaleFactor: 2.9 },
  { month: '2025/11', salary: 1040, bonusScaleFactor: 1.35 },
  { month: '2026/05', salary: 1110, bonusScaleFactor: 3.1 }
]

export default function Salary() {
  return (
    <>
      <Head>
        <title>salary - p1ass&apos;s portfolio</title>
      </Head>
      <main className="mx-auto max-w-5xl px-4 py-8 sm:py-12">
        <SectionTitle title="Salary" />
        <div className="overflow-x-auto">
          <table className="mx-auto text-body-sm tabular-nums">
            <thead>
              <tr className="border-b border-border">
                <th className="px-4 py-2 text-left">year</th>
                <th className="px-4 py-2 text-right">basic salary + standard bonus</th>
                <th className="px-4 py-2 text-right">bonus scale factor</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistories.map((history) => (
                <tr key={history.month} className="border-b border-border">
                  <td className="px-4 py-2 text-left">{history.month}</td>
                  <td className="px-4 py-2 text-right">
                    {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
                      history.salary * 10000
                    )}
                  </td>
                  <td className="px-4 py-2 text-right">{history.bonusScaleFactor.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="salary-chart mt-12">
          <ResponsiveContainer width={'100%'} aspect={16 / 9}>
            <LineChart data={salaryHistories}>
              <Line type="monotone" dataKey="salary" />
              <CartesianGrid strokeDasharray="4 4" />
              <XAxis dataKey="month" padding={{ left: 12, right: 12 }} />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)'
                }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </main>
    </>
  )
}
