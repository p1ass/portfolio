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
  { month: '2025/11', salary: 1040, bonusScaleFactor: 1.35 }
]

export default function Salary() {
  return (
    <>
      <Head>
        <title>salary - p1ass&apos;s portfolio</title>
      </Head>
      <div>
        <main className="container mb-16 bg-background lg:max-w-5xl">
          <table className="mx-auto my-8 text-center">
            <thead>
              <tr>
                <th className="px-4">year</th>
                <th className="px-4">basic salary + standard bonus</th>
                <th className="px-4">bonus scale factor</th>
              </tr>
            </thead>
            <tbody>
              {salaryHistories.map((history) => (
                <tr key={history.month}>
                  <td className="px-4" align="right">
                    {history.month}
                  </td>
                  <td className="px-4" align="right">
                    {new Intl.NumberFormat('ja-JP', { style: 'currency', currency: 'JPY' }).format(
                      history.salary * 10000
                    )}
                  </td>
                  <td className="px-4" align="right">
                    {history.bonusScaleFactor.toFixed(2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <ResponsiveContainer width={'100%'} aspect={16 / 9}>
            <LineChart data={salaryHistories}>
              <Line type="monotone" dataKey="salary" stroke="#8884d8" fill="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="month" padding={{ left: 10, right: 10 }} />
              <YAxis domain={['auto', 'auto']} />
              <Tooltip />
            </LineChart>
          </ResponsiveContainer>
        </main>
      </div>
    </>
  )
}
