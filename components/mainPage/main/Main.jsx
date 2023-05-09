import { useState } from 'react';

// import MainPhoto from '../../images/mainPhoto/MainPhoto';
import ArrowDown from './vectors/arrowDown/ArrowDown';
import ArrowUp from './vectors/arrowUp/ArrowUp';
import Office from './vectors/office/Office';
import Warehouse from './vectors/warehouse/Warehouse';
// import Fridge from './vectors/fridge/Fridge';
import FridgeTest from './vectors/fridge/FridgeTest';
import Box from './vectors/box/Box';
import Find from '../header/vectors/find/Find';

import MainCard from '../../../UI/mainCard/MainCard';

import style from './Main.module.scss';

export default function Main() {
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

  return (
    <main className={style.main}>
      <section className={style.section}>
        <h1 className={style.h1}>
          Оренда приміщень
          <br />
          Біла Церква
          <span className={style.green}>.</span>
        </h1>
      </section>
      <section className={style.cardMain}>
        <div className={style.lightPart}>
          <h2 className={style.visible}>
            <div className={style.vectorText}>
              <Office color="black" height="26px" width="26px" />
              Офісні приміщення
            </div>
            <button
              type="button"
              onClick={buttonHandler}
              onBlur={buttonBlurHandler}
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
              <Warehouse
                color="black"
                height="24px"
                width="24px"
                l="0.05rem"
                mr="0.77rem"
              />
              Складські приміщення
            </h2>
            <h2>
              <FridgeTest
                color="black"
                mr="0.7rem"
                height="26px"
                width="26px"
              />
              Холодильні приміщення
            </h2>
            <h2 className={style.lastH2}>
              <Box
                color="black"
                height="32px"
                width="32px"
                mr="0.35rem"
                r="5.5px"
              />
              Бокси
            </h2>
          </div>
        </div>
        <form className={style.darkPart}>
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
            <button type="submit">
              <Find />
            </button>
          )}
        </form>
      </section>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Box color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Авто бокси</h2>
          </a>
          <p>Орендуйте бокси на закритій території</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Warehouse color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Складські приміщення</h2>
          </a>
          <p>Приміщення під ваші потреби від 80 м2</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Office color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Офісні приміщення</h2>
          </a>
          <p>Готові офіси в центрі та на околицях міста.</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <FridgeTest color="#7ed957" mr="0" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Холодильні приміщення</h2>
          </a>
          <p>Підтримка температури в діапазоні від 0 до 10 °C</p>
        </div>
      </MainCard>
    </main>
  );
}
// ;
