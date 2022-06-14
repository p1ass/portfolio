import Head from 'next/head'

export default function Salary() {
  return (
    <>
      <Head>
        <title>salary - p1ass&apos;s portfolio</title>
      </Head>
      <div>
        <main className="container mb-16 bg-background lg:max-w-5xl">
          <table className="my-8 mx-auto text-center">
            <thead>
              <tr>
                <th className="px-4">year</th>
                <th className="px-4">base</th>
                <th className="px-4">bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4" align="right">
                  2020/01
                </td>
                <td className="px-4" align="right">
                  2000/h
                </td>
                <td className="px-4" align="right">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2020/04
                </td>
                <td className="px-4" align="right">
                  2200/h
                </td>
                <td className="px-4" align="right">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2021/04
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('NiwwMTAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  0
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2021/12
                </td>
                <td className="px-4">-</td>
                <td className="px-4" align="right">
                  {Buffer.from('MjQ1LDAwMAo=', 'base64').toString('ascii')}
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2022/06
                </td>
                <td className="px-4">
                  {Buffer.from('NiwyOTAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('MzA2LDI1MAo=', 'base64').toString('ascii')}
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}
