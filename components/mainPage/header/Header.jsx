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
        <ul
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0 2rem",
          }}
        >
          <li>
            <ul style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <li>
                <a href="./">
                  <Logo />
                </a>
              </li>
              <hr style={{ height: "3.4rem", backgroundColor: "#EBEBEB" }} />
              <li>Наші об&apos;єкти</li>
            </ul>
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <ul style={{ display: "flex", gap: "1rem" }}>
              <li>
                <button type="button">
                  <Phone />
                </button>
              </li>
              <li>
                {" "}
                <button type="button">
                  <Find />
                </button>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
