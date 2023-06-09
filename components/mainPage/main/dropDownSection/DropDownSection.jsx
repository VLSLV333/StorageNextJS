import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useRouter } from 'next/navigation';
import { setSelectedObject } from '@/store/mainSelectObjectSlice';

import ArrowDown from '../vectors/arrowDown/ArrowDown';
import ArrowUp from '../vectors/arrowUp/ArrowUp';
import Find from '../../header/vectors/find/Find';

import Office from '../vectors/office/Office';
import Box from '../vectors/box/Box';
import Fridge from '../vectors/fridge/Fridge';
import Warehouse from '../vectors/warehouse/Warehouse';

import style from './DropDownSection.module.scss';

export default function DropDownSection({ w, m }) {
  const router = useRouter();
  const dispatch = useDispatch();

  const queryInStorage = useSelector(
    (state) => state.mainSelectObject.selectedNow.query
  );
  const svgInStorage = useSelector(
    (state) => state.mainSelectObject.selectedNow.svg
  );
  const TextInStorage = useSelector(
    (state) => state.mainSelectObject.selectedNow.text
  );

  // const [selectedLink, setSelectedLink] = useState(linkInStorage);
  // const [selectedSvg, setSelectedSvg] = useState(svgInStorage);
  // const [selectedText, setSelectedText] = useState(TextInStorage);

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

  const openFullListHandler = () => {
    setOpened((prevState) => !prevState);
  };
  const buttonBlurHandler = () => {
    setOpened(false);
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    router.push({
      pathname: '/find',
      query: { ...queryInStorage, size: inputValue },
    });
  };

  const mainVisibleSvg =
    svgInStorage === 'office' ? (
      <Office color="black" className={style.officeSvgDesktop} />
    ) : svgInStorage === 'wareHouse' ? (
      <Warehouse color="black" className={style.wareHouseSvgMobile} />
    ) : svgInStorage === 'fridge' ? (
      <Fridge color="black" className={style.fridgeSvgMobile} />
    ) : svgInStorage === 'Box' ? (
      <Box color="black" className={style.boxSvgMobile} />
    ) : (
      ''
    );

  const officeMobileButtonHandler = () => {
    dispatch(setSelectedObject(0));
    setOpened(false);
  };
  const officeDesktopButtonHandler = () => {
    dispatch(setSelectedObject(0));
  };

  const warehouseMobileButtonHandler = () => {
    dispatch(setSelectedObject(1));
    setOpened(false);
  };
  const warehouseDesktopButtonHandler = () => {
    dispatch(setSelectedObject(1));
  };

  const fridgeMobileButtonHandler = () => {
    dispatch(setSelectedObject(2));
    setOpened(false);
  };
  const fridgeDesktopButtonHandler = () => {
    dispatch(setSelectedObject(2));
  };

  const BoxMobileButtonHandler = () => {
    dispatch(setSelectedObject(3));
    setOpened(false);
  };
  const BoxDesktopButtonHandler = () => {
    dispatch(setSelectedObject(3));
  };

  const officeSelected = svgInStorage === 'office';
  const wareHouseSelected = svgInStorage === 'wareHouse';
  const fridgeSelected = svgInStorage === 'fridge';
  const boxSelected = svgInStorage === 'Box';

  return (
    <section className={style.cardMain} style={{ width: w, margin: m }}>
      <div className={style.lightPart}>
        <h2
          className={`${style.visible} ${style.hiddenButton}`}
          onClick={openFullListHandler}
          onBlur={buttonBlurHandler}
        >
          <button
            className={`${style.vectorText} ${style.vectorTextMobile}`}
            type="button"
          >
            {mainVisibleSvg}
            {TextInStorage}
          </button>
          <button
            className={`${style.vectorText} ${style.vectorTextDesktop} ${
              officeSelected ? style.greenBottom : ''
            }`}
            href="/find"
            onClick={officeDesktopButtonHandler}
            type="button"
          >
            <Office color="black" className={style.officeSvgDesktop} />
            Офіси
          </button>
          <button
            className={`${style.vectorText} ${style.vectorTextDesktop} ${
              wareHouseSelected ? style.greenBottom : ''
            }`}
            href="/find"
            onClick={warehouseDesktopButtonHandler}
            type="button"
          >
            <Warehouse color="black" className={style.wareHouseSvgDesktop} />
            Склади
          </button>
          <button
            className={`${style.vectorText} ${style.vectorTextDesktop} ${
              fridgeSelected ? style.greenBottom : ''
            }`}
            href="/find"
            onClick={fridgeDesktopButtonHandler}
            type="button"
          >
            <Fridge color="black" className={style.fridgeSvgDesktop} />
            Холодильні приміщення
          </button>
          <button
            className={`${style.vectorText} ${style.vectorTextDesktop} ${
              boxSelected ? style.greenBottom : ''
            }`}
            href="/find"
            onClick={BoxDesktopButtonHandler}
            type="button"
          >
            <Box color="black" className={style.boxSvgDesktop} />
            Бокси
          </button>
          <button type="button" className={style.arrowsButton}>
            {!opened && <ArrowDown className={style.arrowDown} />}
            {opened && <ArrowUp className={style.arrowUp} />}
          </button>
        </h2>
        <div
          className={style.hidden}
          style={{
            display: !opened ? 'none' : '',
          }}
        >
          {!officeSelected && (
            <button
              className={style.hiddenButton}
              onMouseDown={officeMobileButtonHandler}
              type="button"
            >
              <Office color="black" className={style.wareHouseSvgMobile} />
              Офіси
            </button>
          )}
          {!wareHouseSelected && (
            <button
              className={style.hiddenButton}
              onMouseDown={warehouseMobileButtonHandler}
              type="button"
            >
              <Warehouse color="black" className={style.wareHouseSvgMobile} />
              Складські приміщення
            </button>
          )}
          {!fridgeSelected && (
            <button
              className={style.hiddenButton}
              onMouseDown={fridgeMobileButtonHandler}
              type="button"
            >
              <Fridge color="black" className={style.fridgeSvgMobile} />
              Холодильні приміщення
            </button>
          )}
          {!boxSelected && (
            <button
              className={`${style.hiddenButton} ${style.lastButton}`}
              onMouseDown={BoxMobileButtonHandler}
              type="button"
            >
              <Box color="black" className={style.boxSvgMobile} />
              Бокси
            </button>
          )}
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
            <Find color="#7ed957" />
          </button>
        )}
        <button type="submit" className={style.desktopButton}>
          Знайти
        </button>
      </form>
    </section>
  );
}
