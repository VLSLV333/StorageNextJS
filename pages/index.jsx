import { useEffect } from 'react';

import { useSelector } from 'react-redux';

import Head from 'next/head';
import Header from '../components/mainPage/header/Header';
import Main from '../components/mainPage/main/Main';
import Footer from '../components/mainPage/footer/Footer';

import PageBlur from '../components/wholePageBlur/PageBlur';
import ModalMeinMenu from '../components/modalMainMenu/ModalMainMenu';
import ModalFind from '../components/modalFind/ModalFind';
import ModalPhone from '../components/modalPhone/ModalPhone';

export default function Home() {
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openBurger = useSelector((state) => state.burgerMenu.openBurgerMenu);
  const openModalFind = useSelector(
    (state) => state.findModalMobile.showFindModal
  );
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  useEffect(() => {
    if (openBlur) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
      </Head>
      <Header />
      <Main />
      <Footer />
      {openBlur && <PageBlur />}
      {openBurger && <ModalMeinMenu />}
      {/* {openModalFind && <ModalFind />} */}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
