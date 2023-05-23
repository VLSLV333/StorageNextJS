import { useRef, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";

import { useRouter } from "next/navigation";

import { toggleBlur } from "../../../store/pageBlurSlice";
import { showBurgerMenu, hideBurgerMenu, setSeveralClicksOnBurgerModal } from "../../../store/burgerMenuSlice";
// import { openFindModal, hideFindModal } from '@/store/findModalMobileSlice';
import { openPhoneModal, hidePhoneModal, setSeveralClicksOnPhoneModal } from "@/store/phoneModalSlice";

import Burger from "./vectors/burger/Burger";
import Find from "./vectors/find/Find";
import Phone from "./vectors/phone/Phone";
import Logo from "./vectors/logo/Logo";

import style from "./Header.module.scss";

function Header() {
  const router = useRouter();
  const burgerButtonRef = useRef(null);
  const phoneButtonRef = useRef(null);


  const dispatch = useDispatch();
  const burgerMenuOpened = useSelector(
    (state) => state.burgerMenu.openBurgerMenu
  );
  const clickedInBurgerModal = useSelector(
    (state) => state.burgerMenu.clickedInBurgerModal
  );
  const severalClicksInBurgerModal = useSelector(
    (state) => state.burgerMenu.severalClicksOnBurgerModal
  );

  const phoneModalOpened = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );
  const clickedInPhoneModal = useSelector(
    (state) => state.phoneModal.clickedInPhoneModal
  );
  const severalClicksInPhoneModal = useSelector(
    (state) => state.phoneModal.severalClicksOnPhoneModal
  );


  useEffect(() => {
    if (clickedInBurgerModal === false) {
      burgerButtonRef.current?.focus();
    } 
  }, [clickedInBurgerModal]);

  useEffect(() => {
    if (clickedInPhoneModal === false) {
      phoneButtonRef.current?.focus();
    }
  }, [clickedInPhoneModal]);


  const burgerHandler = () => {
    dispatch(toggleBlur(1));
    if (!burgerMenuOpened && !severalClicksInBurgerModal) {
      dispatch(showBurgerMenu());
    } else if (severalClicksInBurgerModal) {
      dispatch(hideBurgerMenu());
      dispatch(toggleBlur("hide"));
      dispatch(setSeveralClicksOnBurgerModal('no'));
    } else {
      dispatch(hideBurgerMenu());
    }
  };
  const burgerBlurHandler = () => {
    if (!clickedInBurgerModal) {
      dispatch(toggleBlur("hide"));
      dispatch(hideBurgerMenu());
      dispatch(setSeveralClicksOnBurgerModal('no'));
    }
  };


  const phoneMobileHandler = () => {
    dispatch(toggleBlur(3));
    if (!phoneModalOpened && !severalClicksInPhoneModal) {
      dispatch(openPhoneModal());
    } else if (severalClicksInPhoneModal) {
      dispatch(hidePhoneModal());
      dispatch(toggleBlur("hide"));
      dispatch(setSeveralClicksOnPhoneModal("no"));
    } else {
      dispatch(hidePhoneModal());
    }
  };
  const phoneBlurHandler = () => {
    if (!clickedInPhoneModal) {
      dispatch(toggleBlur("hide"));
      dispatch(hidePhoneModal());
      dispatch(setSeveralClicksOnPhoneModal("no"));
    }
  };



  const findMobileHandler = () => {
    dispatch(toggleBlur(2));
    router.push({
      pathname: "/find",
      query: { keyword: "came from search icon" },
    });
  };
  return (
    <header>
      <nav className={style.navMobile}>
        <ul className={style.ul}>
          <li>
            <ul className={style.nestedUl}>
              <li>
                <button
                  type="button"
                  onClick={burgerHandler}
                  onBlur={burgerBlurHandler}
                  className={burgerMenuOpened ? style.hoverClass : ""}
                  ref={burgerButtonRef}
                >
                  <Burger />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={findMobileHandler}
                  className={style.findButton}
                >
                  <Find />
                </button>
              </li>
            </ul>
          </li>
          <li>
            <a href="./">
              <Logo className={style.logoHeaderMobile} />
            </a>
          </li>
          <li>
            <button
              type="button"
              onClick={phoneMobileHandler}
              onBlur={phoneBlurHandler}
              className={phoneModalOpened ? style.hoverClass : ""}
              ref={phoneButtonRef}
            >
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
                  <Logo className={style.logoHeaderDesktop} />
                </a>
              </li>
              <hr className={style.hr} />
              <li>
                <button
                  type="button"
                  className={`${style.objectsButton} ${
                    burgerMenuOpened ? style.objectsButtonClicked : ""
                  }`}
                >
                  Приміщення
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
                    <p className={style.findText}>
                      Знайдіть потрібний об&apos;єкт
                    </p>
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
