import { useSelector } from "react-redux";

import { useRouter } from "next/router";

import { useState, useRef } from "react";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ObjectCard from "./objectCard/ObjectCard";

import PageBlur from "../wholePageBlur/PageBlur";
import ModalMeinMenu from "../modalMainMenu/ModalMainMenu";
import ModalPhone from "../modalPhone/ModalPhone";

import ArrowDown from "../mainPage/main/vectors/arrowDown/ArrowDown";
import ArrowUp from "../mainPage/main/vectors/arrowUp/ArrowUp";

import style from "./FindPage.module.scss";

let rentObjectsFromDB = [
  {
    link: "https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    m2: 20,
    location: "pion",
    price: 1000,
    exactAddres: "Вулиця Січневий Прорив 38А, Біла Церква, 09100",
    description:
      "Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер",
  },
  {
    link: "https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    m2: 100,
    location: "vokz",
    price: 3000,
    exactAddres: "2-ий Партизанський провулок 31, Біла Церква, 09100",
    description:
      "2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер",
  },
  {
    link: "https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    m2: 200,
    location: "levan",
    price: 7000,
    exactAddres: "Вулиця Леваневського 85, Біла Церква, 09100",
    description:
      "Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація",
  },
];

export default function Find() {
  const hiddenFilterOptionRef = useRef(null);

  const router = useRouter();
  const {
    query: { whatIsRented },
  } = router;

  const openBugerMenu = useSelector((state) => state.burgerMenu.openBurgerMenu);
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  const [greenBorder, setGreenBorder] = useState(false);
  const [selectedButtonFilter, setSelectedButtonFilter] = useState("all");

  const [filterInputValue, setFilterInputValue] = useState("");
  const [showXIcon, setShowXIcon] = useState(false);

  const [visibleFilterOption, setVisibleFilterOption] = useState("m2");
  const [alternativeFilterOption, setAlternativeFilterOption] =
    useState("ціна");
  const [openedFilterModal, setFilterModal] = useState(false);

  const [objectsForPage, setObjectsForPage] = useState(rentObjectsFromDB);

  const filterInputHandler = (event) => {
    setFilterInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setShowXIcon(true);
    }
    if (visibleFilterOption === "m2") {
      let filteredArray = rentObjectsFromDB.filter(
        (obj) => obj.m2 >= event.target.value
      );
      setObjectsForPage(filteredArray);
    } else if (visibleFilterOption === "ціна") {
      let filteredArray = rentObjectsFromDB.filter(
        (obj) => obj.price >= event.target.value
      );
      setObjectsForPage(filteredArray);
    }

    if (event.target.value.trim().length === 0) {
      setShowXIcon(false);
      setObjectsForPage(rentObjectsFromDB)
    }
  };

  const inputClickHandler = () => {
    setGreenBorder(true);
  };
  const inputBlurHandler = () => {
    setGreenBorder(false);
  };

  const xCloseHandler = () => {
    setFilterInputValue("");
    setShowXIcon(false);
  };

  const hiddenFilterValueHandler = (e) => {
    setAlternativeFilterOption(visibleFilterOption);
    setVisibleFilterOption(e.target.innerText);
    setFilterModal(false);
    filterInputHandler(filterInputValue)
  };

  const visibleFilterButtonHandler = () => {
    setFilterModal((state) => !state);
  };

  const dynamicPlaceHolder =
    visibleFilterOption === "m2" ? "введіть квадратуру" : "введіть ціну";

  const filterAreaButtonsHandler = (e) => {
    // console.log(e.target.id);
    setSelectedButtonFilter(e.target.id);
    if (e.target.id === "all") {
      setObjectsForPage(rentObjectsFromDB);
      return;
    }
    let filteredArray = rentObjectsFromDB.filter(
      (obj) => obj.location === e.target.id
    );
    setObjectsForPage(filteredArray);
  };

  const selectedAreaButton =
    selectedButtonFilter === "all"
      ? 1
      : selectedButtonFilter === "pion"
      ? 2
      : selectedButtonFilter === "vokz"
      ? 3
      : selectedButtonFilter === "levan"
      ? 4
      : "";

  const textForCardHeading = whatIsRented === "Офіси" ? "Офіс" : "";

  return (
    <>
      <section className={style.textAndFindContainer}>
        <div
          className={`${style.imitateBigInput} ${
            greenBorder ? style.greenBorder : ""
          }`}
        >
          <button
            type="button"
            onClick={visibleFilterButtonHandler}
            className={style.textButton}
          >
            <span className={style.moveText}>{visibleFilterOption}</span>
            {!openedFilterModal && (
              <ArrowDown
                className={style.arrowDown}
                color="#7ed957"
                box={[8, 3, 4, 8]}
              />
            )}
            {openedFilterModal && (
              <ArrowUp
                className={style.arrowUp}
                color="#7ed957"
                box={[8, 0, 4, 8]}
              />
            )}
          </button>
          <input
            type="number"
            placeholder={dynamicPlaceHolder}
            value={filterInputValue}
            onChange={filterInputHandler}
            onClick={inputClickHandler}
            onBlur={inputBlurHandler}
          />
          {showXIcon && (
            <FontAwesomeIcon
              icon={faX}
              className={style.xIcon}
              onClick={xCloseHandler}
            />
          )}
        </div>
        <div className={style.heddingAndButtons}>
          <h2>{whatIsRented} в Білій Церкві</h2>
          <div className={style.buttonsContainer}>
            <button
              type="button"
              className={`${selectedAreaButton === 1 ? style.buttonGreen : ""}`}
              id="all"
              onClick={filterAreaButtonsHandler}
            >
              Усі
            </button>
            <button
              type="button"
              id="pion"
              onClick={filterAreaButtonsHandler}
              className={`${selectedAreaButton === 2 ? style.buttonGreen : ""}`}
            >
              Піонерська
            </button>
            <button
              type="button"
              id="vokz"
              onClick={filterAreaButtonsHandler}
              className={`${selectedAreaButton === 3 ? style.buttonGreen : ""}`}
            >
              Вокзальна
            </button>
            <button
              type="button"
              className={`${style.lastButton} ${
                selectedAreaButton === 4 ? style.buttonGreen : ""
              }`}
              id="levan"
              onClick={filterAreaButtonsHandler}
            >
              Леваневського
            </button>
          </div>
        </div>
        {openedFilterModal && (
          <div className={style.filterModal}>
            <button
              ref={hiddenFilterOptionRef}
              id="ціна"
              onClick={hiddenFilterValueHandler}
              type="button"
            >
              {alternativeFilterOption}
            </button>
          </div>
        )}
      </section>
      <div className={style.objectsCardsContainer}>
        {objectsForPage.map((object, objectID) => (
          <ObjectCard
            key={objectID}
            link={object.link}
            m2={object.m2}
            price={object.price}
            exactAddres={object.exactAddres}
            description={object.description}
            heading={textForCardHeading}
          />
        ))}
      </div>
      {openBlur && <PageBlur />}
      {openBugerMenu && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
