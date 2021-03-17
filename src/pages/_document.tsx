import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head title="p1ass's portfolio" />
        <body className="tracking-wide">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
