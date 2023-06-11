import Head from 'next/head';

import LoopPage from '@/components/loopPage/LoopPage';

export default function LoopFindPage() {
  return (
    <>
      <Head>
        <title>Знайдіть потрібне приміщення</title>
        <meta name="description" content="Знайдіть потрібне приміщення" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <LoopPage />
    </>
  );
}
