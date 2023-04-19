import Head from 'next/head'

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
              <tr>
                <td className="px-4" align="right">
                  2020/01
                </td>
                <td className="px-4" align="right">
                  2000/h
                </td>
                <td className="px-4" align="right">
                  0.00
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
                  0.00
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2021/04
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('Niw1MDAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  0.00
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2021/11
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('Niw1MDAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  1.00
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2022/05
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('Niw4MDAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  1.25
                </td>
              </tr>
              <tr>
                <td className="px-4" align="right">
                  2022/11
                </td>
                <td className="px-4" align="right">
                  {Buffer.from('NywxMDAsMDAwCg==', 'base64').toString('ascii')}
                </td>
                <td className="px-4" align="right">
                  1.25
                </td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}
