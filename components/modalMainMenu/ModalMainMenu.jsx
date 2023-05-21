import { useRef } from 'react';

import { useDispatch } from 'react-redux';

import { toggleBlur } from '@/store/pageBlurSlice';
import { hideBurgerMenu } from '@/store/burgerMenuSlice';

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
  const mouseLeaveHandler = () => {
    dispatch(hideBurgerMenu());
    dispatch(toggleBlur('hide'));
  };

  return (
    <section
      className={style.modal}
      onMouseLeave={mouseLeaveHandler}
      ref={mainMenuRef}
    >
      <div className={style.textContainer}>
        <h2>Оберіть об&apos;єкт</h2>
        <a href="./find">
          <p>Переглянути всі об&apos;єкти</p>
        </a>
      </div>
      <hr />
      <div className={style.allButtonContainer}>
        <a href="./find/office" className={style.pairContainer}>
          <Office color="black" className={style.officeSvg} />
          <p>Офісні приміщення</p>
        </a>
        <a href="./find/" className={style.pairContainer}>
          <Warehouse color="black" className={style.warehouseSvg} />
          <p>Складські приміщення</p>
        </a>
        <a href="./find/" className={style.pairContainer}>
          <Fridge color="black" className={style.fridgeSvg} />
          <p>Холодильні приміщення</p>
        </a>
        <a href="./find/" className={style.pairContainer}>
          <Box color="black" className={style.boxSvg} />
          <p>Бокси</p>
        </a>
      </div>
      <div className={style.bottomLine} />
    </section>
  );
}
