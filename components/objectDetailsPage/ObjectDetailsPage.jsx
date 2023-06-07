import { useState } from "react";

import Galery from "./galery/Galery";

import Image from "next/image";

import { useRouter } from "next/router";

import {
  faChevronLeft,
  faChevronRight,
  faVectorSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Office from "@/components/mainPage/main/vectors/office/Office";
import Box from "@/components/mainPage/main/vectors/box/Box";
import Fridge from "@/components/mainPage/main/vectors/fridge/Fridge";
import Warehouse from "@/components/mainPage/main/vectors/warehouse/Warehouse";

import style from "./objectDetails.module.scss";

const rentObjectsFromDB = [
  {
    type: "Офіс",
    // type: "Складське приміщення",
    // type: "Холодильне приміщення",
    // type: "Бокс",
    link: "https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    m2: 20,
    location: "pion",
    price: 1000,
    exactAddres: "Вулиця Січневий Прорив 38А, Біла Церква, 09100",
    keyFeatures:
      "Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер",
    id: 0,
    photos: [
      "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
      "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1684868264391-a6dfb89882dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    ],
    // rentContract: "Здача за офіційним договором",
    description:
      "Металевий склад на першому поверсі з під'їздами для вантажних автомобілів.",
  },
  {
    link: "https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    m2: 100,
    location: "vokz",
    price: 3000,
    exactAddres: "2-ий Партизанський провулок 31, Біла Церква, 09100",
    keyFeatures:
      "2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер",
    id: 1,
    photos: [
      "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
      "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1684868264391-a6dfb89882dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    ],
    description: "Будівля оздоровчого комплексу в центрі міста",
  },
  {
    link: "https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    m2: 200,
    location: "levan",
    price: 7000,
    exactAddres: "Вулиця Леваневського 85, Біла Церква, 09100",
    keyFeatures:
      "Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація",
    id: 2,
    photos: [
      "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
      "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1684868264391-a6dfb89882dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    ],
    description:
      "Функціонуюче овочесховище 500 метрів від Одеської траси, з рапмою та холодильними приміщеннями.",
  },
];

export default function ObjectDetailsPage() {
  const router = useRouter();
  const [photoIndexInArray, setPhotoIndexInArray] = useState(0);

  const {
    query: { id: thisObjectIdInDB },
  } = router;

  const thisObjectsPhotosArray =
    rentObjectsFromDB[thisObjectIdInDB]?.photos || [];

  // const { exactAddres, m2, type, rentContract, description, keyFeatures } =
  const { exactAddres, m2, type, description, keyFeatures } =
    rentObjectsFromDB[thisObjectIdInDB] || {};

  const keyFeaturesArr = keyFeatures?.split("/").slice(0, 6);

  const rightArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === thisObjectsPhotosArray.length - 1) {
        return 0;
      }
      return (state += 1);
    });
  };

  const leftArrowHandler = () => {
    setPhotoIndexInArray((state) => {
      if (state === 0) {
        return thisObjectsPhotosArray.length - 1;
      }
      return (state -= 1);
    });
  };

  return (
    <>
      <section className={style.sectionMainContainer}>
        <Galery photosArray={thisObjectsPhotosArray} />
        <div className={style.imagesAndModalElementsContainer}>
          <div className={style.allImagesContainer}>
            {rentObjectsFromDB[thisObjectIdInDB]?.photos.map(
              (photo, photoIndex) => {
                return (
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
                      style={{ objectFit: "cover" }}
                      fill
                      sizes="(min-width: 1024px and max-width: 1339px) 100vw,  1340px"
                    />
                  </div>
                );
              }
            )}
          </div>
          <button className={style.arrowLeft} onClick={leftArrowHandler}>
            <FontAwesomeIcon icon={faChevronLeft} className={style.xIcon} />
          </button>
          <button className={style.arrowRight} onClick={rightArrowHandler}>
            <FontAwesomeIcon icon={faChevronRight} className={style.xIcon} />
          </button>
        </div>
        <div className={style.allText}>
          <h2>{exactAddres}</h2>
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
              <span className={style.smallHead}>Тип приміщення</span>
              {type === 'Офіс' && <Office color="#7ed957" className={style.officeSvg} />}
              {type === 'Бокс' && <Box color="#7ed957" className={style.officeSvg} />}
              {type === 'Холодильне приміщення' && <Fridge color="#7ed957" className={style.officeSvg} />}
              {type === 'Складське приміщення' && <Warehouse color="#7ed957" className={style.officeSvg} />}
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
    </>
  );
}
