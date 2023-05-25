import Image from 'next/image';

import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import style from './ObjectCard.module.scss';

export default function ObjectCard() {
  return (
    <div className={style.wholeCard}>
      <div className={style.imgContainer}>
        <Image
          src="https://images.unsplash.com/photo-1684779847639-fbcc5a57dfe9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
          alt="work"
          style={{ objectFit: 'cover' }}
          fill
          priority
          // width={100}
          // height={100}
        />
      </div>
      <div className={style.descriptionContainer}>
        <div className={style.descriptionHeaderIcons}>
          <h2>Вулиця Січневий Прорив 38А, Біла Церква, 09100</h2>
          <FontAwesomeIcon icon={faPlus} className={style.iconsDescription} />
          {/* <FontAwesomeIcon icon={faMinus} />  className={style.iconsDescription} */}
        </div>
        <p>Додатковий опис, який відображується лише після нажимання на +</p>
      </div>
      <div className={style.priceContainer}>
        <h3>Тип - Офіс</h3>
        <p>Ціна в місяць</p>
        <p>Ціна за м2</p>
      </div>
      <button type="button">Детальніше</button>
    </div>
  );
}
