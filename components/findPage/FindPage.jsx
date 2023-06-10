import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';

import { useState, useRef, useEffect } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ObjectCard from './objectCard/ObjectCard';

import PageBlur from '../wholePageBlur/PageBlur';
import ModalMeinMenu from '../modalMainMenu/ModalMainMenu';
import ModalPhone from '../modalPhone/ModalPhone';

import ArrowDown from '../mainPage/main/vectors/arrowDown/ArrowDown';
import ArrowUp from '../mainPage/main/vectors/arrowUp/ArrowUp';

import style from './FindPage.module.scss';

let arrayForThisPage = [];

export default function Find({
  allObjDB,
}) {
  const hiddenFilterOptionRef = useRef(null);

  const router = useRouter();
  const {
    query: { whatIsRented = "Усі об'єкти", size },
  } = router;

  const openBugerMenu = useSelector((state) => state.burgerMenu.openBurgerMenu);
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  const [greenBorder, setGreenBorder] = useState(false);
  const [selectedButtonFilter, setSelectedButtonFilter] = useState('all');

  const [filterInputValue, setFilterInputValue] = useState(size || '');
  const [showXIcon, setShowXIcon] = useState(false);

  const [visibleFilterOption, setVisibleFilterOption] = useState('m2');
  const [alternativeFilterOption, setAlternativeFilterOption] =
    useState('ціна');
  const [openedFilterModal, setFilterModal] = useState(false);

  const [objectsForPage, setObjectsForPage] = useState(allObjDB);

  const [arrayFilteredWithButton, setArrayFilteredWithButton] =
    useState(allObjDB);

  const filterInputHandler = (event) => {
    setFilterInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setShowXIcon(true);
    }
    if (event.target.value.trim().length === 0) {
      setShowXIcon(false);
    }
  };

  useEffect(() => {
    arrayForThisPage =
      whatIsRented === 'Офіси'
        ? allObjDB.filter((obj) => obj.type === 'Офіси')
        : whatIsRented === 'Складські приміщення'
          ? allObjDB.filter((obj) => obj.type === 'Складські приміщення')
          : whatIsRented === 'Холодильні приміщення'
            ? allObjDB.filter((obj) => obj.type === 'Холодильні приміщення')
            : whatIsRented === 'Бокси'
              ? allObjDB.filter((obj) => obj.type === 'Бокси')
              : allObjDB;
    setObjectsForPage(arrayForThisPage);
    setArrayFilteredWithButton(arrayForThisPage);
  }, [whatIsRented, allObjDB]);
  const inputClickHandler = () => {
    setGreenBorder(true);
  };
  const inputBlurHandler = () => {
    setGreenBorder(false);
  };

  const xCloseHandler = () => {
    setFilterInputValue('');
    setShowXIcon(false);
  };

  const hiddenFilterValueHandler = (e) => {
    setAlternativeFilterOption(visibleFilterOption);
    setVisibleFilterOption(e.target.innerText);
    setFilterModal(false);
  };

  const visibleFilterButtonHandler = () => {
    setFilterModal((state) => !state);
  };

  const dynamicPlaceHolder =
    visibleFilterOption === 'm2'
      ? 'введіть бажану квадратуру'
      : 'введіть бажану ціну';

  const filterAreaButtonsHandler = (e) => {
    setSelectedButtonFilter(e.target.id);
    if (e.target.id === 'all') {
      setArrayFilteredWithButton(arrayForThisPage);
      return;
    }
    const filteredArray = arrayForThisPage.filter(
      (obj) => obj.location === e.target.id
    );
    setArrayFilteredWithButton(filteredArray);
  };

  useEffect(() => {
    if (filterInputValue > 0 && filterInputValue.trim().length > 0) {
      if (visibleFilterOption === 'm2') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => +obj.m2 >= filterInputValue
        );
        setObjectsForPage(filteredArray);
      } else if (visibleFilterOption === 'ціна') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => +obj.price >= filterInputValue
        );
        setObjectsForPage(filteredArray);
      }
      setShowXIcon(true);
    } else {
      setObjectsForPage(arrayFilteredWithButton);
    }
  }, [filterInputValue, arrayFilteredWithButton, visibleFilterOption]);

  const selectedAreaButton =
    selectedButtonFilter === 'all'
      ? 1
      : selectedButtonFilter === 'pion'
        ? 2
        : selectedButtonFilter === 'vokz'
          ? 3
          : selectedButtonFilter === 'levan'
            ? 4
            : '';

  const noObjectsFound = objectsForPage.length === 0;

  return (
    <>
      <section className={style.textAndFindContainer}>
        <div
          className={`${style.imitateBigInput} ${
            greenBorder ? style.greenBorder : ''
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
          <div className={style.buttonsAndFilterResult}>
            <div className={style.buttonsContainer}>
              <button
                type="button"
                className={`${
                  selectedAreaButton === 1 ? style.buttonGreen : ''
                }`}
                id="all"
                onClick={filterAreaButtonsHandler}
              >
                Усі
              </button>
              <button
                type="button"
                id="pion"
                onClick={filterAreaButtonsHandler}
                className={`${
                  selectedAreaButton === 2 ? style.buttonGreen : ''
                }`}
              >
                Піонерська
              </button>
              <button
                type="button"
                id="vokz"
                onClick={filterAreaButtonsHandler}
                className={`${
                  selectedAreaButton === 3 ? style.buttonGreen : ''
                }`}
              >
                Вокзальна
              </button>
              <button
                type="button"
                className={`${style.lastButton} ${
                  selectedAreaButton === 4 ? style.buttonGreen : ''
                }`}
                id="levan"
                onClick={filterAreaButtonsHandler}
              >
                Леваневського
              </button>
            </div>
            <div className={style.textFilterResult}>
              <p>
                <span className={style.borderForText}>
                  Всього знайдено приміщень: {objectsForPage?.length}
                </span>
              </p>
            </div>
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
        {!noObjectsFound &&
          objectsForPage?.map((object, objectId) => (
            <ObjectCard
              key={object.id}
              link={object.link}
              m2={object.m2}
              price={object.price}
              exactAddres={object.exactAddres}
              description={object.description}
              type={object.type}
              id={object.id}
              prior={objectId === 0}
            />
          ))}
      </div>
      {noObjectsFound && (
        <div className={style.NoObjectsFound}>
          <p>
            Нажаль, приміщень не знайдено. <br />
            Спробуйте змінити фільтр
          </p>
        </div>
      )}
      {openBlur && <PageBlur />}
      {openBugerMenu && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
