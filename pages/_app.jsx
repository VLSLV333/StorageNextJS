'use client';

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

import Header from '@/components/mainPage/header/Header';
import Footer from '@/components/mainPage/footer/Footer';

import Providers from '@/components/Provider';

import '../styles/globals.css';

config.autoAddCss = false;

export default function App({ Component, pageProps }) {
  return (
    <Providers>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Providers>
  );
}
