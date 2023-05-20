import { useState } from 'react';

import ArrowDown from '../vectors/arrowDown/ArrowDown';
import ArrowUp from '../vectors/arrowUp/ArrowUp';
import Find from '../../header/vectors/find/Find';

import Office from '../vectors/office/Office';
import Box from '../vectors/box/Box';
import Fridge from '../vectors/fridge/Fridge';
import Warehouse from '../vectors/warehouse/Warehouse';

import style from './DropDownSection.module.scss';

export default function DropDownSection({ w, m }) {
  const [opened, setOpened] = useState(false);

  const [inputValue, setInputValue] = useState('');
  const [inputFocused, setInputFocused] = useState(false);
  const [showFind, setShowFind] = useState(false);

  const inputHandler = (e) => {
    setInputValue(e.target.value);
    setShowFind(true);
    if (e.target.value.trim().length === 0) {
      setShowFind(false);
    }
  };
  const inputBlurHandler = () => {
    setInputFocused(false);
  };
  const inputClickHandler = () => {
    setInputFocused(true);
  };

  const buttonHandler = () => {
    setOpened((prevState) => !prevState);
  };
  const buttonBlurHandler = () => {
    setOpened(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <section className={style.cardMain} style={{ width: w, margin: m }}>
      <div className={style.lightPart}>
        <h2 className={style.visible}>
          <a className={style.vectorText} href="./find">
            <Office color="black" className={style.officeSvgDesktop} />
            Офіси
          </a>
          <a
            className={`${style.vectorText} ${style.vectorTextDesktop}`}
            href="./find"
          >
            <Warehouse color="black" className={style.wareHouseSvgDesktop} />
            Склади
          </a>
          <a
            className={`${style.vectorText} ${style.vectorTextDesktop}`}
            href="./find"
          >
            <Fridge color="black" className={style.fridgeSvgDesktop} />
            Холодильні приміщення
          </a>
          <a
            className={`${style.vectorText} ${style.vectorTextDesktop}`}
            href="./find"
          >
            <Box color="black" className={style.boxSvgDesktop} />
            Бокси
          </a>
          <button
            type="button"
            onClick={buttonHandler}
            onBlur={buttonBlurHandler}
            className={style.arrowsButton}
          >
            {!opened && <ArrowDown />}
            {opened && <ArrowUp />}
          </button>
        </h2>
        <div
          className={style.hidden}
          style={{
            display: !opened ? 'none' : '',
          }}
        >
          <h2>
            <Warehouse color="black" className={style.wareHouseSvgMobile} />
            Складські приміщення
          </h2>
          <h2>
            <Fridge color="black" className={style.fridgeSvgMobile} />
            Холодильні приміщення
          </h2>
          <h2 className={style.lastH2}>
            <Box color="black" className={style.boxSvgMobile} />
            Бокси
          </h2>
        </div>
      </div>
      <form className={style.darkPart} onSubmit={formSubmitHandler}>
        <label htmlFor="inp">
          <input
            id="inp"
            placeholder=" "
            value={inputValue}
            onChange={inputHandler}
            type="number"
            onBlur={inputBlurHandler}
            style={{
              borderColor: inputFocused ? '#7ed957' : 'rgb(217, 219, 221)',
            }}
            onClick={inputClickHandler}
            max={900}
          />
          <span style={{ color: inputFocused ? '#7ed957' : 'inherit' }}>
            Введіть м2
          </span>
        </label>
        {showFind && (
          <button type="submit" className={style.hiddenLoopButton}>
            <Find />
          </button>
        )}
        <button type="submit" className={style.desktopButton}>
          Знайти
        </button>
      </form>
    </section>
  );
}
