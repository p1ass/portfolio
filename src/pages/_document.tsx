import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'

const description = 'p1assのポートフォリオサイトです。'

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="ja">
        <Head>
          {process.env.NODE_ENV === 'production' ? (
            <>
              <script async src="https://www.googletagmanager.com/gtag/js?id=G-RLKFV87P5B" />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag() {
            dataLayer.push(arguments);
        }
        gtag("js", new Date());
        gtag("config", "G-RLKFV87P5B");
        `
                }}
              />
            </>
          ) : null}
          <meta name="description" content={description}></meta>
          <meta property="og:url" content="https://p1ass.com" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="p1ass's portfolio" />
          <meta property="og:description" content={description}></meta>
          <meta property="og:site_name" content="p1ass's portfolio" />
          <meta property="og:image" content="https://p1ass.com/ogp.png" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@p1ass" />
          <link data-n-head="1" rel="icon" type="image/x-icon" href="/favicon.ico"></link>
        </Head>
        <body className="tracking-wide">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
