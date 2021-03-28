import Head from 'next/head'

export default function Salary() {
  return (
    <>
      <Head>
        <title>salary - plusoon&apos;s portfolio</title>
      </Head>
      <div>
        <main className="container mb-16 bg-background lg:max-w-5xl">
          <table className="mx-auto my-8 text-center">
            <thead>
              <tr>
                <th className="px-4">year</th>
                <th className="px-4">base</th>
                <th className="px-4">bonus</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4">2020 early</td>
                <td className="px-4">2000/h</td>
                <td className="px-4">0</td>
              </tr>
              <tr>
                <td className="px-4">2020 later</td>
                <td className="px-4">2200/h</td>
                <td className="px-4">0</td>
              </tr>
              <tr>
                <td className="px-4">2021</td>
                <td className="px-4">{Buffer.from('NjUw', 'base64').toString('ascii')}</td>
                <td className="px-4">0</td>
              </tr>
            </tbody>
          </table>
        </main>
      </div>
    </>
  )
}
