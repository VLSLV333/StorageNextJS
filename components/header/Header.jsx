import Burger from './vectors/burger/Burger';
import Find from './vectors/find/Find';
import Phone from './vectors/phone/Phone';
import Logo from './vectors/logo/Logo';

import style from './Header.module.scss';

function Header() {
  return (
    <header>
      <nav className={style.nav}>
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
              {/* ПРИМАВЕСТ */}
            </a>
          </li>
          <li>
            <button type="button">
              <Phone />
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
