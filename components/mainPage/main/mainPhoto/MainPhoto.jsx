import { useSelector } from 'react-redux';

import style from './MainPhoto.module.scss';

export default function MainPhoto() {
  const selectedObject = useSelector(
    (state) => state.mainSelectObject.selectedNow.svg
  );

  const classForBg =
    selectedObject === 'office'
      ? style.of
      : selectedObject === 'wareHouse'
        ? style.wa
        : selectedObject === 'fridge'
          ? style.fr
          : selectedObject === 'Box'
            ? style.bo
            : '';

  return (
    <section className={`${style.section} ${classForBg}`}>
      <h1 className={style.h1}>
        Оренда приміщень Біла Церква
        <span className={style.green}>.</span>
      </h1>
    </section>
  );
}
