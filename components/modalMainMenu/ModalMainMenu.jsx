import Office from "../mainPage/main/vectors/office/Office";
import Warehouse from "../mainPage/main/vectors/warehouse/Warehouse";
import Fridge from "../mainPage/main/vectors/fridge/Fridge";
import Box from "../mainPage/main/vectors/box/Box";

import style from "./ModalMainMenu.module.scss";

export default function ModalMeinMenu() {
  return (
    <section className={style.modal}>
        <div className={style.textContainer}>
      <h2>Оберіть об&apos;єкт</h2>
      <a href="./find"><p>Подивіться повний список об&apos;єктів</p></a>
      </div>
      <hr />
      <div  className={style.allButtonContainer}>
        <button className={style.pairContainer}>
          <Office height={"34px"} width={"34px"} color={"black"} />
          <p>Офісні приміщення</p>
        </button>
        <button className={style.pairContainer}>
          <Warehouse height={"34px"} width={"34px"} color={"black"} />
          <p>Складські приміщення</p>
        </button>
        <button className={style.pairContainer}>
          <Fridge height={"34px"} width={"34px"} color={"black"} />
          <p>Холодильні приміщення</p>
        </button>
        <button className={style.pairContainer}>
          <Box height={"34px"} width={"34px"} color={"black"} />
          <p>Бокси</p>
        </button>
      </div>
      <div className={style.bottomLine} />
    </section>
  );
}
