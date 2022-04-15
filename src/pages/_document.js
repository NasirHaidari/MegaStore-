import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel='preconnect' href='https://app.snipcart.com' />
        <link rel='preconnect' href='https://cdn.snipcart.com' />
        <link
          rel='stylesheet'
          href='https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.css'
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          async
          src='https://cdn.snipcart.com/themes/v3.3.3/default/snipcart.js'></script>
        <div
          hidden
          id='snipcart'
          data-api-key='MDExYWE5NzUtMzQxMi00ZGE2LTgwYTItMjRmMmJhYzU4Y2EwNjM3ODU2NTA1NTM0MDI0Mjgz'></div>
      </body>
    </Html>
  )
}
