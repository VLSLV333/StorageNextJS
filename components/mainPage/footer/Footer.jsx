import style from './Fotter.module.scss';

export default function Footer() {
  return (
    <footer className={style.foot}>
      <section>
        <h2>Контакти</h2>
        <p>380632148704</p>
      </section>
      <section>
        <h2>Усі об&apos;єкти</h2>
        <a href="https://github.com/">
          <p>Посилання на список</p>
        </a>
      </section>
    </footer>
  );
}
