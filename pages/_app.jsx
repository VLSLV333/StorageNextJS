'use client';

import Providers from '@/components/Provider';

import '../styles/globals.css';

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}
