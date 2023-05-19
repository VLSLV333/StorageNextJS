import Burger from "./vectors/burger/Burger";
import Find from "./vectors/find/Find";
import Phone from "./vectors/phone/Phone";
import Logo from "./vectors/logo/Logo";

import style from "./Header.module.scss";

function Header() {
  return (
    <header>
      <nav className={style.navMobile}>
        <ul className={style.ul}>
          <li>
            <ul className={style.nestedUl}>
              <li>
                <button type="button">
                  <Burger />
                </button>
              </li>
              <li>
                <button type="button">
                  <Find />
                </button>
              </li>
            </ul>
          </li>
          <li>
            <a href="./">
              <Logo />
            </a>
          </li>
          <li>
            <button type="button">
              <Phone />
            </button>
          </li>
        </ul>
      </nav>
      <nav className={style.navDesktop}>
        <ul className={style.navDesktopUpperUl}>
          <li>
            <ul className={style.navDesktopFirstInnerUl}>
              <li>
                <a href="./">
                  <Logo />
                </a>
              </li>
              <hr className={style.hr} />
              <li>
                <button className={style.objectsButton}>
                  Наші об&apos;єкти
                </button>
              </li>
            </ul>
          </li>
          <li className={style.lastUpperDesktopLi}>
            <ul className={style.lastInnerUlDesktopLi}>
              <li>
                <button type="button" className={style.desktopIconButon}>
                  <Phone h={22} w={22} />
                </button>
              </li>
              <hr className={style.hrBetweenIcons} />
              <li>
                <a href="./find"> 
                  <button type="button" className={style.desktopIconButon}>
                    <Find h={22} w={22} />
                    <p className={style.findText}>Знайдіть потрібний об&apos;єкт</p>
                  </button>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
