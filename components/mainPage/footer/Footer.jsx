import style from "./Fotter.module.scss";

export default function Footer() {
  return (
    <footer className={style.foot}>
      <div className={style.footContainer}>
        <section>
          <h2>Контакти</h2>
          <p>(063) 214-87-04</p>
        </section>
        <section>
          <h2>Усі об&apos;єкти</h2>
          <a href="https://github.com/">
            <p>Посилання на список</p>
          </a>
        </section>
      </div>
    </footer>
  );
}
