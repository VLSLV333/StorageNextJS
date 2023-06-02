import { useState } from "react";

import { useRouter } from "next/router";

import style from "./objectDetails.module.scss";

import testBlur from "../../../images/mainPhoto/blurPre.webp";

import Image from "next/image";

const rentObjectsFromDB = [
  {
    link: "https://images.unsplash.com/photo-1685371863623-effd71822cf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    m2: 20,
    location: "pion",
    price: 1000,
    exactAddres: "Вулиця Січневий Прорив 38А, Біла Церква, 09100",
    description:
      "Приємний ремонт / Закрита територія / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація / Кондиціонер",
    id: 0,
    photos: [
      "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80",
      "https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      "https://images.unsplash.com/photo-1684868264391-a6dfb89882dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
      "https://images.unsplash.com/photo-1666919643134-d97687c1826c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80",
    ],
  },
  {
    link: "https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80",
    m2: 100,
    location: "vokz",
    price: 3000,
    exactAddres: "2-ий Партизанський провулок 31, Біла Церква, 09100",
    description:
      "2 поверх / Будівля спортовно-оздоровчого комплексу / Цілодобова охорона / Приміщення правильної форми / Прекрасний колектив / Електроенергія / Каналізація / Кондиціонер",
    id: 1,
  },
  {
    link: "https://images.unsplash.com/photo-1685443866545-57adcff6e0be?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=764&q=80",
    m2: 200,
    location: "levan",
    price: 7000,
    exactAddres: "Вулиця Леваневського 85, Біла Церква, 09100",
    description:
      "Закрита територія / Рампа / Приміщення різних розмірів / Цілодобова охорона / Зона паркування / Асфальтована територія / Електроенергія / Каналізація",
    id: 2,
  },
];

//image 375px height

export default function FindDynamic() {
  const router = useRouter();
  const [photoIndex, setPhotoIndex] = useState(0);

  const {
    query: { id: thisObjectIdInDB },
  } = router;
  const thisObject = rentObjectsFromDB.filter(
    (obj) => obj.id === +thisObjectIdInDB
  )[0];
  // console.log(thisObjectIdInDB)
  // console.log(thisObject)
  // <img src={thisObject.link} alt="test" />
  // <p>{thisObject.description}</p>
  const buttonHandler = () => {
    console.log("clicl");
    setPhotoIndex((state) => {
      if (state === 4) {
        return 0;
      }
      return ++state;
    });
  };
  return (
    <>
      <div className={style.imageContainer}>
        <Image
          // src={thisObject ? thisObject?.photos[photoIndex] : testBlur}
          src={thisObject?.photos[photoIndex]}
          alt="work"
          style={{ objectFit: "cover" }}
          fill
          priority
          placeholder="blur"
          blurDataURL={'"../../../images/mainPhoto/test.jpg"'}
        />
      </div>
      <button onClick={buttonHandler}>button!</button>
    </>
  );
}
