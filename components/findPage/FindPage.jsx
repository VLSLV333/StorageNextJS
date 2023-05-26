import { useSelector } from 'react-redux';

import { useRouter } from 'next/router'

import { useState } from "react";

import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import ObjectCard from "./objectCard/ObjectCard";

import PageBlur from "../wholePageBlur/PageBlur";
import ModalMeinMenu from "../modalMainMenu/ModalMainMenu";
import ModalPhone from "../modalPhone/ModalPhone";

import style from "./FindPage.module.scss";

export default function Find() {
  const router = useRouter()
  const whatIsRented = router.query.whatIsRented;

  const openBugerMenu = useSelector(state => state.burgerMenu.openBurgerMenu)
  const openBlur = useSelector(state => state.pageBlur.pageBlur)
  const openPhoneModal = useSelector(state => state.phoneModal.showPhoneModal)

  const [filterInputValue, setFilterInputValue] = useState("");
  const [showXIcon, setShowXIcon] = useState(false);

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
    setFilterInputValue("");
    setShowXIcon(false);
  };

  return (
    <>
      <section className={style.textAndFindContainer}>
        <div className={style.imitateBigInput}>
          <button
            type="button"
            onClick={() => console.log("click")}
            className={style.textButton}
          >
            m2/price
          </button>
          <input
            type="text"
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
