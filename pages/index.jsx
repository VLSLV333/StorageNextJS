import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Head from 'next/head';
import Main from '../components/mainPage/main/Main';
// import Header from '../components/mainPage/header/Header';
// import Footer from '../components/mainPage/footer/Footer';

import PageBlur from '../components/wholePageBlur/PageBlur';
import ModalMeinMenu from '../components/modalMainMenu/ModalMainMenu';
import ModalPhone from '../components/modalPhone/ModalPhone';
// import ModalFind from '../components/modalFind/ModalFind';

export default function Home() {
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openBurger = useSelector((state) => state.burgerMenu.openBurgerMenu);
  // const openModalFind = useSelector(
  //   (state) => state.findModalMobile.showFindModal
  // );
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  useEffect(() => {
    if (openBlur) {
      // document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.overflowY = 'scroll';
      document.body.style.width = '100%';
    } else {
      document.body.style.position = 'static';
      document.body.style.overflowY = 'auto';
    }
  }, [openBlur]);

  return (
    <>
      <Head>
        <title>Оренда приміщень Біла Церква</title>
        <meta name="description" content="Оренда приміщень Біла Церква" />
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
      {/* <Header /> */}
      <Main />
      {/* <Footer /> */}
      {openBlur && <PageBlur />}
      {openBurger && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
      {/* {openModalFind && <ModalFind />} */}
    </>
  );
}
