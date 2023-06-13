import { useRef } from 'react';

import Link from 'next/link';

import { useDispatch } from 'react-redux';

import { toggleBlur } from '@/store/pageBlurSlice';
import {
  hideBurgerMenu,
  // setSeveralClicksOnBurgerModal,
} from '@/store/burgerMenuSlice';

import useOutsideClick from '@/hooks/useOutsideClick';

import Office from '../mainPage/main/vectors/office/Office';
import Warehouse from '../mainPage/main/vectors/warehouse/Warehouse';
import Fridge from '../mainPage/main/vectors/fridge/Fridge';
import Box from '../mainPage/main/vectors/box/Box';

import style from './ModalMainMenu.module.scss';

export default function ModalMeinMenu() {
  const mainMenuRef = useRef(null);
  useOutsideClick(mainMenuRef);

  const dispatch = useDispatch();
  // const mouseLeaveHandler = () => {
  //   dispatch(hideBurgerMenu());
  //   dispatch(toggleBlur('hide'));
  //   dispatch(setSeveralClicksOnBurgerModal('no'));
  // };
  const linkClickHandler = () => {
    dispatch(hideBurgerMenu());
    dispatch(toggleBlur('hide'));
    // dispatch(setSeveralClicksOnBurgerModal('no'));
  };

  return (
    <section
      className={style.modal}
      // onMouseLeave={mouseLeaveHandler}
      ref={mainMenuRef}
      id="burger"
    >
      <div className={style.textContainer}>
        <h2>Оберіть об&apos;єкт</h2>
        <Link href="/find" onClick={linkClickHandler}>
          <p>Переглянути всі об&apos;єкти</p>
        </Link>
      </div>
      <hr />
      <div className={style.allButtonContainer}>
        <Link
          className={style.pairContainer}
          onClick={linkClickHandler}
          href={{
            pathname: '/find',
            query: { whatIsRented: 'Офіси' },
          }}
        >
          <Office color="black" className={style.officeSvg} />
          <p>Офісні приміщення</p>
        </Link>
        <Link
          className={style.pairContainer}
          onClick={linkClickHandler}
          href={{
            pathname: '/find',
            query: { whatIsRented: 'Складські приміщення' },
          }}
        >
          <Warehouse color="black" className={style.warehouseSvg} />
          <p>Складські приміщення</p>
        </Link>
        <Link
          className={style.pairContainer}
          onClick={linkClickHandler}
          href={{
            pathname: '/find',
            query: { whatIsRented: 'Холодильні приміщення' },
          }}
        >
          <Fridge color="black" className={style.fridgeSvg} />
          <p>Холодильні приміщення</p>
        </Link>
        <Link
          className={style.pairContainer}
          onClick={linkClickHandler}
          href={{
            pathname: '/find',
            query: { whatIsRented: 'Бокси' },
          }}
        >
          <Box color="black" className={style.boxSvg} />
          <p>Бокси</p>
        </Link>
      </div>
      <div className={style.bottomLine} />
    </section>
  );
}
