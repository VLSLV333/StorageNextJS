import { useState } from "react";

import ArrowDown from "../vectors/arrowDown/ArrowDown";
import ArrowUp from "../vectors/arrowUp/ArrowUp";
import Find from "../../header/vectors/find/Find";

import Office from "../vectors/office/Office";
import Box from "../vectors/box/Box";
import Fridge from "../vectors/fridge/Fridge";
import Warehouse from "../vectors/warehouse/Warehouse";

import style from "./DropDownSection.module.scss";

export default function DropDownSection({ w, m }) {
  const [opened, setOpened] = useState(false);

  const [inputValue, setInputValue] = useState("");
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
    e.preventDefault()
  }

  return (
    <section className={style.cardMain} style={{ width: w, margin: m }}>
      <div className={style.lightPart}>
        <h2 className={style.visible}>
          <button className={style.vectorText}>
            <Office color="black" height="26px" width="26px" />
            Офіси
          </button>
          <button className={`${style.vectorText} ${style.vectorTextDesktop}`}>
            <Warehouse color="black" height="26px" width="26px" />
            Склади
          </button>
          <button className={`${style.vectorText} ${style.vectorTextDesktop}`}>
            <Fridge color="black" height="26px" width="26px" />
            Холодильні приміщення
          </button>
          <button className={`${style.vectorText} ${style.vectorTextDesktop}`}>
            <Box color="black" height="26px" width="26px" />
            Бокси
          </button>
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
            display: !opened ? "none" : "",
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
            <Fridge color="black" mr="0.7rem" height="26px" width="26px" />
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
              borderColor: inputFocused ? "#7ed957" : "rgb(217, 219, 221)",
            }}
            onClick={inputClickHandler}
            max={900}
          />
          <span style={{ color: inputFocused ? "#7ed957" : "inherit" }}>
            Введіть м2
          </span>
        </label>
        {showFind && (
          <button type="submit"  className={style.hiddenLoopButton}>
            <Find />
          </button>
        )}
        <button type="submit" className={style.desktopButton}>Знайти</button>
      </form>
    </section>
  );
}
