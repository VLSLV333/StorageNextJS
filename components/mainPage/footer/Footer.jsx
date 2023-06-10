import Link from 'next/link';

import Logo from '../header/vectors/logo/Logo';

import style from './Fotter.module.scss';

export default function Footer() {
  return (
    <footer className={style.foot}>
      <div className={style.footContainer}>
        <section className={style.logoSection}>
          <Logo className={style.logoFooter} />
        </section>
        <section>
          <h2>Контакти</h2>
          <p>(063) 214-87-04</p>
        </section>
        <section className={style.allObjectsSection}>
          <h2>Усі об&apos;єкти</h2>
          <Link href="/find">
            <p>Переглянути список</p>
          </Link>
        </section>
      </div>
    </footer>
  );
}
