import { useSelector } from 'react-redux';

import { useState } from 'react';

import Image from 'next/image';

import {
  faChevronLeft,
  faChevronRight,
  faVectorSquare,
  faHandHoldingDollar,
} from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ModalMeinMenu from '../modalMainMenu/ModalMainMenu';
import ModalPhone from '../modalPhone/ModalPhone';
import PageBlur from '../wholePageBlur/PageBlur';

import Galery from './galery/Galery';

import Office from '@/components/mainPage/main/vectors/office/Office';
import Box from '@/components/mainPage/main/vectors/box/Box';
import Fridge from '@/components/mainPage/main/vectors/fridge/Fridge';
import Warehouse from '@/components/mainPage/main/vectors/warehouse/Warehouse';

import style from './objectDetails.module.scss';

export default function ObjectDetailsPage({
  type,
  m2,
  exactAddres,
  keyFeatures,
  photos,
  description,
  price,
}) {
  const [photoIndexInArray, setPhotoIndexInArray] = useState(0);
  const thisObjectsPhotosArray = photos;

  const openBugerMenu = useSelector((state) => state.burgerMenu.openBurgerMenu);
  const openBlur = useSelector((state) => state.pageBlur.pageBlur);
  const openPhoneModal = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );

  const keyFeaturesArr = keyFeatures?.split('/').slice(0, 6);

  const rightArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === thisObjectsPhotosArray.length - 1) {
        return 0;
      }
      state += 1;
      return state;
    });
  };

  const leftArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === 0) {
        return thisObjectsPhotosArray.length - 1;
      }
      state -= 1;
      return state;
    });
  };

  const addressArray = exactAddres.split(',');

  return (
    <>
      <section className={style.sectionMainContainer}>
        <Galery photosArray={thisObjectsPhotosArray} />
        <div className={style.imagesAndModalElementsContainer}>
          <div className={style.allImagesContainer}>
            {/* {rentObjectsFromDB[thisObjectIdInDB]?.photos.map( */}
            {photos?.map((photo, photoIndex) => (
              <div
                key={photo}
                className={`${style.imageContainer} ${
                  photoIndexInArray === photoIndex
                    ? style.relative
                    : style.absolute
                }`}
              >
                <Image
                  src={photo}
                  alt="work"
                  style={{ objectFit: 'cover' }}
                  fill
                  sizes="(min-width: 1024px and max-width: 1339px) 100vw,  1340px"
                />
              </div>
            ))}
          </div>
          <button
            className={style.arrowLeft}
            onClick={leftArrowHandler}
            type="button"
          >
            <FontAwesomeIcon icon={faChevronLeft} className={style.xIcon} />
          </button>
          <button
            className={style.arrowRight}
            onClick={rightArrowHandler}
            type="button"
          >
            <FontAwesomeIcon icon={faChevronRight} className={style.xIcon} />
          </button>
        </div>
        <div className={style.allText}>
          <h2>{addressArray[0]}</h2>
          <h2>{addressArray[1]}</h2>
          <hr className={style.firstLine} />
          <div className={style.squareMettersBlock}>
            <p>
              <span className={style.smallHead}>Наявна квадратура</span>
              <FontAwesomeIcon
                icon={faVectorSquare}
                className={style.textIcon}
              />
              {m2} метрів<sup>2</sup>
            </p>
            <p>
              <span className={style.smallHead}>Вартість оренди</span>
              <FontAwesomeIcon
                icon={faHandHoldingDollar}
                className={style.textIcon}
              />
              {price} грн
            </p>
            <p>
              <span className={style.smallHead}>Тип приміщення</span>
              {type === 'Офіси' && (
                <Office color="#7ed957" className={style.officeSvg} />
              )}
              {type === 'Бокси' && (
                <Box color="#7ed957" className={style.officeSvg} />
              )}
              {type === 'Холодильні приміщення' && (
                <Fridge color="#7ed957" className={style.officeSvg} />
              )}
              {type === 'Складські приміщення' && (
                <Warehouse color="#7ed957" className={style.officeSvg} />
              )}
              {type}
            </p>
          </div>
          <hr className={style.secondLine} />
          <p>
            <span className={style.bigHead}>Умови оренди</span>
          </p>
          <p>
            Здача за <b>офіційним договором</b>
          </p>
          <hr className={style.thirdLine} />
          <p className={style.bigHead}>Ключові моменти</p>
          <ul>
            {keyFeaturesArr?.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <hr className={style.forthLine} />
          <p className={style.bigHead}>Опис</p>
          <p>{description}</p>
        </div>
      </section>
      {openBlur && <PageBlur />}
      {openBugerMenu && <ModalMeinMenu />}
      {openPhoneModal && <ModalPhone />}
    </>
  );
}
