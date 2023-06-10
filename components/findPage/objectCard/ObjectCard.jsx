import { useState } from 'react';

import Image from 'next/image';

import { useRouter } from 'next/navigation';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './ObjectCard.module.scss';

export default function ObjectCard({
  link,
  m2,
  price,
  exactAddres,
  description,
  type,
  id,
  prior,
}) {
  const router = useRouter();
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const plusClickHandler = () => {
    setShowMoreInfo(true);
  };
  const minusClickHandler = () => {
    setShowMoreInfo(false);
  };
  const costPerSize = (price / m2).toFixed(0);

  const buttonHandler = () => {
    router.push({
      pathname: `/find/${id}`,
    });
  };

  const textForCardHeading =
    type === 'Офіси'
      ? 'Офіс'
      : type === 'Складські приміщення'
        ? 'Склад'
        : type === 'Холодильні приміщення'
          ? 'Овочесховищe'
          : type === 'Бокси'
            ? 'Бокс'
            : '';

  return (
    <div className={style.wholeCard}>
      <div className={style.imgContainer}>
        <Image
          src={link}
          alt="work"
          style={{ objectFit: 'cover' }}
          fill
          sizes="(max-width: 502px) 93.7vw, (max-width: 1023px) 470px, (max-width: 1279px) 70vw,  430px"
          priority={prior}
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
          <p className={style.descriptionPC}>{description}</p>
        </div>
        <hr className={style.descriptionPCHr} />
        <div className={style.cardRightSide}>
          <div className={style.priceContainer}>
            <h3>
              {textForCardHeading} – {m2} м2
            </h3>
            <div className={style.priceSplited}>
              <p className={style.price}>{price} грн</p>
              <p className={style.priceSmall}>{costPerSize} грн/м2</p>
            </div>
          </div>
          <button
            type="button"
            className={style.detailsButton}
            onClick={buttonHandler}
          >
            Детальніше
          </button>
        </div>
      </div>
    </div>
  );
}
