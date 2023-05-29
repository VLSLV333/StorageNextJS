import { useSelector } from 'react-redux';

import { useRouter } from 'next/router';

import { useState, useRef } from 'react';

import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ObjectCard from './objectCard/ObjectCard';

import PageBlur from '../wholePageBlur/PageBlur';
import ModalMeinMenu from '../modalMainMenu/ModalMainMenu';
import ModalPhone from '../modalPhone/ModalPhone';

import ArrowDown from '../mainPage/main/vectors/arrowDown/ArrowDown';
import ArrowUp from '../mainPage/main/vectors/arrowUp/ArrowUp';

import style from './FindPage.module.scss';

export default function Find() {
  // const visibleButtonRef = useRef(null)
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

  const [filterInputValue, setFilterInputValue] = useState('');
  const [showXIcon, setShowXIcon] = useState(false);



  const [visibleFilterOption, setVisibleFilterOption] = useState('m2');
  const [alternativeFilterOption, setAlternativeFilterOption] =
    useState('ціна');
  const [openedFilterModal, setFilterModal] = useState(false);

  const filterInputHandler = (event) => {
    setFilterInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setShowXIcon(true);
    }
    if (event.target.value.trim().length === 0) {
      setShowXIcon(false);
    }
  };

  const xCloseHandler = () => {
    setFilterInputValue('');
    setShowXIcon(false);
  };

  const hiddenFilterValueHandler = (e) => {
    setAlternativeFilterOption(visibleFilterOption);
    setVisibleFilterOption(e.target.innerText);
    setFilterModal(false);
    console.log(visibleFilterOption[1])
  };

  const visibleFilterButtonHandler = () => {
    setFilterModal((state) => !state);
  };

  return (
    <>
      <section className={style.textAndFindContainer}>
        <div className={style.imitateBigInput}>
          <button
            type="button"
            onClick={visibleFilterButtonHandler}
            className={style.textButton}
          >
            <span className={style.moveText}>{visibleFilterOption}</span>
          </button>
          {!openedFilterModal && (
            <ArrowDown className={style.arrowDown} color="#7ed957" />
          )}
          {openedFilterModal && <ArrowUp className={style.arrowUp} />}
          <input
            type="number"
            placeholder="фільтр"
            value={filterInputValue}
            onChange={filterInputHandler}
          />
          {showXIcon && (
            <FontAwesomeIcon
              icon={faX}
              className={style.xIcon}
              onClick={xCloseHandler}
            />
          )}
        </div>
        <div>
          <h2>Оренда {whatIsRented} в Білій Церкві</h2>
          <button type="button">Усі</button>
          <button type="button">Піонерська</button>
          <button type="button">Вокзальна</button>
          <button type="button">Леваневського</button>
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
        <ObjectCard />
        <ObjectCard />
        <ObjectCard />
      </div>
      {openBlur && <PageBlur />}
      {openBugerMenu && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
