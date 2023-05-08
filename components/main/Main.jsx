import { useState } from 'react';

// import MainPhoto from '../../images/mainPhoto/MainPhoto';
import ArrowDown from './vectors/arrowDown/ArrowDown';
import ArrowUp from './vectors/arrowUp/ArrowUp';
import Office from './vectors/office/Office';

import style from './Main.module.scss';

export default function Main() {
  const [opened, setOpened] = useState(false);

  const buttonHandler = () => {
    setOpened((prevState) => !prevState);
  };

  return (
    <main className={style.main}>
      <section className={style.section}>
        <h1 className={style.h1}>
          Оренда приміщень Біла Церква
          <span className={style.green}>.</span>
        </h1>
      </section>
      <section className={style.cardMain}>
        <div className={style.lightPart} onClick={buttonHandler}>
          <h2 className={style.visible}>
            <Office />
            Офісні приміщення
            <button type="button">
              {!opened && <ArrowDown />}
              {opened && <ArrowUp />}
            </button>
          </h2>
          <div
            className={style.hidden}
            style={{
              display: !opened ? 'none' : '',
            }}
          >
            <h2>Складські приміщення</h2>
            <h2>Холодильні приміщення</h2>
            <h2>Бокси</h2>
          </div>
        </div>
        <div className={style.darkPart}>search</div>
      </section>
    </main>
  );
}
