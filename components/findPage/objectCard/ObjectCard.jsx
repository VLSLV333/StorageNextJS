import { useState } from "react";

import Image from "next/image";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./ObjectCard.module.scss";

export default function ObjectCard() {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const plusClickHandler = () => {
    setShowMoreInfo(true);
  };
  const minusClickHandler = () => {
    setShowMoreInfo(false);
  };
  return (
    <div className={style.wholeCard}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="work"
          style={{ objectFit: "cover" }}
          fill
          priority
          // width={100}
          // height={100}
        />
      </div>
      <div className={style.everythingWithoutImage}>
        <div className={style.descriptionContainer}>
          <div className={style.descriptionHeaderIcons}>
            <h2>Вулиця Січневий Прорив 38А, Біла Церква, 09100</h2>
            {!showMoreInfo && (
              <FontAwesomeIcon
                icon={faPlus}
                className={style.iconsDescription}
                onClick={plusClickHandler}
              />
            )}
            {showMoreInfo && (
              <FontAwesomeIcon
                icon={faMinus}
                className={style.iconsDescription}
                onClick={minusClickHandler}
              />
            )}
          </div>
          {showMoreInfo && (
            <p>
              Приємний ремонт / Закрита територія / Цілодобова охорона / Зона
              паркування / Асфальтована територія / Електроенергія / Каналізація
              / Кондиціонер
            </p>
          )}
        </div>
        <div className={style.priceContainer}>
          <h3>Офіс – 20 м2</h3>
          <div className={style.priceSplited}>
            <p className={style.price}>1000 грн</p>
            <p className={style.priceSmall}>50 грн/м2</p>
          </div>
        </div>
        <button type="button">Детальніше</button>
      </div>
    </div>
  );
}
