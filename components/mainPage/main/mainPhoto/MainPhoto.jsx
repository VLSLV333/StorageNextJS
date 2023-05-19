import style from "./MainPhoto.module.scss";

export default function MainPhoto() {
  let mainPhotoOffice = true;
  let mainPhotoStorage = false;
  let mainPhotoFridge = false;
  let mainPhotoBox = false;

  let classForBg = mainPhotoOffice
    ? style.of
    : mainPhotoStorage
    ? "st"
    : mainPhotoFridge
    ? "fr"
    : mainPhotoBox
    ? "bx"
    : "";

  return (
    <>
      <section className={`${style.section} ${classForBg}`} >
        <h1 className={style.h1}>
          Оренда приміщень
          Біла Церква
          <span className={style.green}>.</span>
        </h1>
      </section>
    </>
  );
}
