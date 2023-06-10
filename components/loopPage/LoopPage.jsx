import style from './LoopPage.module.scss';

// import { faX } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { useRouter } from "next/router";

import Office from '../mainPage/main/vectors/office/Office';
import Box from '../mainPage/main/vectors/box/Box';
import Fridge from '../mainPage/main/vectors/fridge/Fridge';
import Warehouse from '../mainPage/main/vectors/warehouse/Warehouse';

export default function LoopPage() {
  //   const router = useRouter();

  //   const closeHandler = () => {
  // router.back();
  //   };

  return (
    <div className={style.test}>
      <section className={style.allContentContainer}>
        <div className={style.buttonsContainer}>
          <button href="/find" type="button">
            <Office color="#7ed957" className={style.officeSvgDesktop} />
            Офіси
          </button>
          <button href="/find" type="button">
            <Warehouse color="#7ed957" className={style.wareHouseSvgDesktop} />
            Склади
          </button>
          <button href="/find" type="button">
            <Fridge color="#7ed957" className={style.fridgeSvgDesktop} />
            Холодильні приміщення
          </button>
          <button href="/find" type="button">
            <Box color="#7ed957" className={style.boxSvgDesktop} />
            Бокси
          </button>
        </div>

        {/* <button className={style.closeButton}>
        <FontAwesomeIcon
          icon={faX}
          className={style.xIcon}
          onClick={closeHandler}
        />
        Повернутись
      </button> */}
      </section>
    </div>
  );
}
