import { useState } from "react";

import Image from "next/image";

import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import style from "./ObjectCard.module.scss";

export default function ObjectCard({
  link,
  m2,
  price,
  exactAddres,
  description,
  heading,
}) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const plusClickHandler = () => {
    setShowMoreInfo(true);
  };
  const minusClickHandler = () => {
    setShowMoreInfo(false);
  };
  const costPerSize = (price / m2).toFixed(0);
  return (
    <div className={style.wholeCard}>
      <div className={style.imgContainer}>
        <Image
          src={link}
          alt="work"
          style={{ objectFit: "cover" }}
          fill
          priority
        />
      </div>
      <div className={style.everythingWithoutImage}>
        <div className={style.descriptionContainer}>
          <div className={style.descriptionHeaderIcons}>
            <h2>{exactAddres}</h2>
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
          {showMoreInfo && <p>{description}</p>}
        </div>
        <div className={style.priceContainer}>
          <h3>
            {heading} – {m2} м2
          </h3>
          <div className={style.priceSplited}>
            <p className={style.price}>{price} грн</p>
            <p className={style.priceSmall}>{costPerSize} грн/м2</p>
          </div>
        </div>
        <button type="button">Детальніше</button>
      </div>
    </div>
  );
}
