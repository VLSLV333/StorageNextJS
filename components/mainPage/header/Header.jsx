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

let phoneMobileBlur = true;
let burgerMobileBlur = true;

function Header() {
  // let test = true
  const router = useRouter();
  const burgerButtonRef = useRef(null);
  const phoneButtonRef = useRef(null);

  // const findButtonRef = useRef(null);

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
  // console.log(severalClicksInBurgerModal)
  // const findModalMobileOpened = useSelector(
  //   (state) => state.findModalMobile.showFindModal
  // );
  // const clickedInFindModal = useSelector(
  //   (state) => state.findModalMobile.clickedInModal
  // );
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
      // console.log('effect burg')
      // if (burgerMobileBlur){
      burgerButtonRef.current?.focus();
      // }
    }
  }, [clickedInBurgerModal]);
  // useEffect(() => {
  //   if (clickedInFindModal === false) {
  //     findButtonRef.current?.focus();
  //   }
  // }, [clickedInFindModal]);
  useEffect(() => {
    if (clickedInPhoneModal === false) {
      // console.log('effect phone')
      // if (phoneMobileBlur){
      phoneButtonRef.current?.focus();
      // phoneButtonRef.current?.blur();
      // test = false
      // }
    }
  }, [clickedInPhoneModal]);

  const burgerHandler = () => {
    console.log('burger click')
    dispatch(toggleBlur(1));
    if (!burgerMenuOpened && !severalClicksInBurgerModal) {
      console.log('burger click 1')
      dispatch(showBurgerMenu());
    } else if (severalClicksInBurgerModal) {
      console.log('burger click 2')
      dispatch(hideBurgerMenu());
      dispatch(toggleBlur("hide"));
      dispatch(setSeveralClicksOnBurgerModal('no'));
    } else {
      console.log('burger click 3')
      dispatch(hideBurgerMenu());
    }
  };
  const burgerBlurHandler = () => {
    // console.log('burger blur')
    // burgerMobileBlur = true;
    if (!clickedInBurgerModal) {
      dispatch(toggleBlur("hide"));
      dispatch(hideBurgerMenu());
      dispatch(setSeveralClicksOnBurgerModal('no'));
    }
  };


  const phoneMobileHandler = () => {
    console.log('phone click')
    dispatch(toggleBlur(3));
    if (!phoneModalOpened && !severalClicksInPhoneModal) {
      console.log('phone click 1')
      // if (!phoneModalOpened ) {
      dispatch(openPhoneModal());
    } else if (severalClicksInPhoneModal) {
      console.log('phone click 2')
      dispatch(hidePhoneModal());
      dispatch(toggleBlur("hide"));
      dispatch(setSeveralClicksOnPhoneModal("no"));
    } else {
      console.log('phone click 3')
      dispatch(hidePhoneModal());
    }
    // } else {
    //   dispatch(hidePhoneModal());
    // }
  };
  const phoneBlurHandler = () => {
    // console.log('phone blur')
    // phoneMobileBlur = true;
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
    // if (!findModalMobileOpened) {
    //   dispatch(openFindModal());
    // } else {
    //   dispatch(hideFindModal());
    // }
  };
  // const findMobileBlurHandler = () => {
  //   if (!clickedInFindModal) {
  //     dispatch(toggleBlur('hide'));
  //     dispatch(hideFindModal());
  //   }
  // };



  // const mainMenuDesktopButtonHandler = () => {
  //   dispatch(toggleBlur(1));
  //   if (!burgerMenuOpened) {
  //     dispatch(showBurgerMenu());
  //   } else {
  //     dispatch(hideBurgerMenu());
  //   }
  // }

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
                  // onBlur={findMobileBlurHandler}
                  // className={findModalMobileOpened ? style.hoverClass : ''}
                  // ref={findButtonRef}
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
