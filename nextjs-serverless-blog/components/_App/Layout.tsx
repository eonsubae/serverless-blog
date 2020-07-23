import Head from 'next/head';

import Container from './Container';
import Header from './Header';

function Layout({ children }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta charSet="utf-8" />
        <meta property="og:title" content="Eonsu Bae" />
        <meta property="og:description" content="A Cutting Edge Engineer" />
        <meta
          property="og:image"
          content="https://eonsubae.com/favicon/android-chrome-192x192.png"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Noto+Sans&display=swap"
          rel="stylesheet"
        />
        <link
          rel="icon"
          sizes="512x512"
          href="/favicon/android-chrome-512x512.png"
        />
        <link
          rel="icon"
          sizes="192x192"
          href="/favicon/android-chrome-192x192.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link
          rel="icon shortcut"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon.ico"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </Head>
      <Header />
      <Container>{children}</Container>
    </>
  );
}

export default Layout;
