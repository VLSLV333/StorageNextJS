import Office from '../mainPage/main/vectors/office/Office';
import Warehouse from '../mainPage/main/vectors/warehouse/Warehouse';
import Fridge from '../mainPage/main/vectors/fridge/Fridge';
import Box from '../mainPage/main/vectors/box/Box';

import style from './ModalMainMenu.module.scss';

export default function ModalMeinMenu() {
  return (
    <section className={style.modal}>
      <div className={style.textContainer}>
        <h2>Оберіть об&apos;єкт</h2>
        <a href="./find">
          <p>Подивіться повний список об&apos;єктів</p>
        </a>
      </div>
      <hr />
      <div className={style.allButtonContainer}>
        <button className={style.pairContainer} type="button">
          <Office color="black" className={style.officeSvg} />
          <p>Офісні приміщення</p>
        </button>
        <button className={style.pairContainer} type="button">
          <Warehouse color="black" className={style.warehouseSvg} />
          <p>Складські приміщення</p>
        </button>
        <button className={style.pairContainer} type="button">
          <Fridge color="black" className={style.fridgeSvg} />
          <p>Холодильні приміщення</p>
        </button>
        <button className={style.pairContainer} type="button">
          <Box color="black" className={style.boxSvg} />
          <p>Бокси</p>
        </button>
      </div>
      <div className={style.bottomLine} />
    </section>
  );
}
