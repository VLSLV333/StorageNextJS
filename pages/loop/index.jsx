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
      </Head>
      <LoopPage />
    </>
  );
}
