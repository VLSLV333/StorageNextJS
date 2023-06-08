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

const rentObjectsFromDB = [
  {
    type: 'Офіси',
    link: 'https://lh3.googleusercontent.com/Os5XQa8PZfs0TrAhenjmbHXrA9Ki7QIz6Fjg-bydIYkCjlWipdjceApSSwdgGchGNkRblZVR7MAFA4VhvWj4WOycaiSDOXSqJ-54bYv36rTsFptTHwJEBwpuAU3zvW5hAk_-Hho0-3gNa9CVpHClBriHKaJ6ubmye_6qIrxuO2QRB1cp-JMradchL8HCbTmapYx-6LO8ajn0S4Uu3T2r27GgWB_MXnWgyq-7Y-Zuki2sy4_0aBpXtXTAi567oTx_Fsxf05hm86WRj0FAoFvMOZN49HXg5zZO0I0vfAZnCLTvPeRUp_hVNUudAEEwA5mu-QUC9VM8_WBQ3kqFfI_oa5gkH-oHFzg5QsK6BDfEliAXYkwrY_pawTAvyPLiedhxNnWpbmmgksrwOFVGCLa4MjZ_r_uToDVxfklg9i0T93H5e_KoBrqowECji77EbE5BZ0G9ePdbJBU4FLj_mUVapdQ4dINAFBYtsSvrUSZQu1LNpPmCXxalL7OLFY9XtsW4Z0k11EMLLiW1vwWeu0T_tAkaSP2OJGVjugNrh9a7d5o2EJ87je9Mf9b3CbbmZDQZnkUoAku55LivaOyTNUisIWXWyG3mKV-1pkuMnJInrFax_9CdlTg0efLsxUUaWAu9JTtPDO7zltop8uGYWaDkivcOBgx_eXwg_LlAE1MY_rGfA1uh4yY6uisy4G2xVS5XwEZ8y3IXpVgVn58tY7x29jO3jsaDXi09IrQ4V7gsAQRJQ6Xr9K7WwvUeWyCn7bXVLQf_EELVaF8mS993Q7D1O__UrZPHHw5aZYe6bhaZ40bRRNjUjc-J9yvVr0uIM-TvC76S2EYK4up0r5m0zmqlRveFcsYqhY7QQ6s6UOPYfbMhqiRN6FZhzjj10HPk9MSTX02qy6TPvpgyllFeSZqCjctJW5E8gRgEM7IcvAGV7pqwlU6kQgWCHdKB2YQuEhi88pN5geI3A6X_U_s6U_U5ipHoUXHRK264NSWeFW_mYDIIFTuXLuKSuQ8skM_YcIHViyzSRw5mQ8CP4jNWCMhjADnxOH0xvK3xaz0wTDQzf0a7ltsG5JCX4q5OWtkDMT2KJaC2RrLWpAKLuv1btQmjOzrgcNK_Bp774jEjwYFqbwxCxsjoM1rm6MVqqWWe7lwJ_6kzGKG6ZkoOdQ05w9aygcKlUJIaPj08Otr7_xXNtQ=w1354-h903-s-no?authuser=0',
    m2: 20,
    location: 'pion',
    price: 1000,
    exactAddres: 'Вулиця Січневий Прорив 38А, Біла Церква, 09100',
    keyFeatures:
      'Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер',
    id: 0,
  },
  {
    type: 'Складські приміщення',
    link: 'https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80',
    m2: 100,
    location: 'vokz',
    price: 3000,
    exactAddres: '2-ий Партизанський провулок 31, Біла Церква, 09100',
    keyFeatures:
      '2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер',
    id: 1,
  },
  {
    type: 'Бокси',
    link: 'https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80',
    m2: 200,
    location: 'levan',
    price: 7000,
    exactAddres: 'Вулиця Леваневського 85, Біла Церква, 09100',
    keyFeatures:
      'Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація',
    id: 2,
  },
];

export default function Find() {
  const hiddenFilterOptionRef = useRef(null);

  const router = useRouter();
  const {
    query: { whatIsRented, size },
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

  // let objectsfilteredByCategory = rentObjectsFromDB;

  // const [test, setTest] = useState(
  //   rentObjectsFromDB.filter((obj) => {
  //     console.log(obj);
  //     console.log(whatIsRented);
  //     return obj.type === whatIsRented;
  //   })
  // );

  // useEffect(() => {
  //   console.log("changed");
  //   setTest(
  //     rentObjectsFromDB.filter((obj) => {
  //       return obj.type === whatIsRented;
  //     })
  //   );
  // }, [whatIsRented]);

  // console.log(test);
  // useEffect(() => {
  //   console.log('efec')
  //   if (whatIsRented !== undefined) {
  //     console.log('here')
  //     rentObjectsFromDB = rentObjectsFromDB.filter(
  //       (obj) => obj.type === whatIsRented
  //     );
  //   }
  // }, [whatIsRented]);

  // useEffect(() => {
  //   console.log('efec')
  //   if (whatIsRented !== undefined) {
  //     console.log('here')
  //     rentObjectsFromDB = rentObjectsFromDB.filter(
  //       (obj) => obj.type === whatIsRented
  //     );
  //   }
  // }, []);

  // console.log(rentObjectsFromDB);

  const [objectsForPage, setObjectsForPage] = useState(rentObjectsFromDB);

  // console.log(objectsForPage);
  const [arrayFilteredWithButton, setArrayFilteredWithButton] =
    useState(rentObjectsFromDB);

  const filterInputHandler = (event) => {
    setFilterInputValue(event.target.value);
    if (event.target.value.trim().length > 0) {
      setShowXIcon(true);
    }
    if (event.target.value.trim().length === 0) {
      setShowXIcon(false);
    }
  };

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
      setArrayFilteredWithButton(rentObjectsFromDB);
      return;
    }
    const filteredArray = rentObjectsFromDB.filter(
      (obj) => obj.location === e.target.id
    );
    setArrayFilteredWithButton(filteredArray);
  };

  useEffect(() => {
    if (filterInputValue > 0 && filterInputValue.trim().length > 0) {
      if (visibleFilterOption === 'm2') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => obj.m2 >= filterInputValue
        );
        setObjectsForPage(filteredArray);
      } else if (visibleFilterOption === 'ціна') {
        const filteredArray = arrayFilteredWithButton.filter(
          (obj) => obj.price >= filterInputValue
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

  const textForCardHeading =
    whatIsRented === 'Офіси'
      ? 'Офіс'
      : whatIsRented === 'Складські приміщення'
        ? 'Склад'
        : whatIsRented === 'Холодильні приміщення'
          ? 'Овочесховищe'
          : whatIsRented === 'Бокси'
            ? 'Бокс'
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
                  Всього знайдено приміщень: {objectsForPage.length}
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
          objectsForPage.map((object, objectId) => (
            <ObjectCard
              key={object.id}
              link={object.link}
              m2={object.m2}
              price={object.price}
              exactAddres={object.exactAddres}
              description={object.description}
              heading={textForCardHeading}
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
