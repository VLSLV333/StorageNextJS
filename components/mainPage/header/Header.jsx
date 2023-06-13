import { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/navigation';

import Link from 'next/link';

import { toggleBlur } from '../../../store/pageBlurSlice';
import {
  showBurgerMenu,
  hideBurgerMenu,
  setSeveralClicksOnBurgerModal,
} from '../../../store/burgerMenuSlice';
// import { openFindModal, hideFindModal } from '@/store/findModalMobileSlice';
import {
  openPhoneModal,
  hidePhoneModal,
  setSeveralClicksOnPhoneModal,
} from '@/store/phoneModalSlice';

import Burger from './vectors/burger/Burger';
import Find from './vectors/find/Find';
import Phone from './vectors/phone/Phone';
import Logo from './vectors/logo/Logo';

import BurgerWhite from './vectors/burger/BurgerWhite';
import PhoneWhite from './vectors/phone/PhoneWhite';
import FindWhite from './vectors/find/FindWhite';

import style from './Header.module.scss';

function Header() {
  const router = useRouter();

  const burgerButtonRef = useRef(null);
  const burgerButtonDesktopRef = useRef(null);

  const phoneButtonRef = useRef(null);
  const phoneButtonDesktopRef = useRef(null);

  const dispatch = useDispatch();
  const burgerMenuOpened = useSelector(
    (state) => state.burgerMenu.openBurgerMenu
  );
  const clickedInBurgerModal = useSelector(
    (state) => state.burgerMenu.clickedInBurgerModal
  );
  // const severalClicksInBurgerModal = useSelector(
  //   (state) => state.burgerMenu.severalClicksOnBurgerModal
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
    // console.log('burger effect')
    if (clickedInBurgerModal === false) {
      // console.log('burger effect true')
      burgerButtonRef.current?.focus();
      burgerButtonDesktopRef.current?.focus();
    }
  }, [clickedInBurgerModal]);

  useEffect(() => {
    if (clickedInPhoneModal === false) {
      phoneButtonRef.current?.focus();
      phoneButtonDesktopRef.current?.focus();
    }
  }, [clickedInPhoneModal]);

  const burgerHandler = () => {
    dispatch(toggleBlur(1));
    // if (!burgerMenuOpened && !severalClicksInBurgerModal) {
    if (!burgerMenuOpened ) {
      const mainText = document.getElementById("mainText");
      mainText.style.color = "green";
      console.log('show')
      dispatch(showBurgerMenu());
    } 
    // else if (severalClicksInBurgerModal) {
    //   dispatch(hideBurgerMenu());
    //   dispatch(toggleBlur('hide'));
      // dispatch(setSeveralClicksOnBurgerModal('no'));
    // }
     else {
      // if i clicked on burger again
      // const mainText = document.getElementById("mainText");
      // mainText.style.color = "blue";
      // console.log('hide')
      dispatch(hideBurgerMenu());
    }
  };
  const burgerBlurHandler = () => {
    if (!clickedInBurgerModal) {
      dispatch(toggleBlur('hide'));
      dispatch(hideBurgerMenu());
      // dispatch(setSeveralClicksOnBurgerModal('no'));
    }
  };

  const phoneMobileHandler = () => {
    dispatch(toggleBlur(3));
    if (!phoneModalOpened && !severalClicksInPhoneModal) {
      dispatch(openPhoneModal());
    } else if (severalClicksInPhoneModal) {
      dispatch(hidePhoneModal());
      dispatch(toggleBlur('hide'));
      dispatch(setSeveralClicksOnPhoneModal('no'));
    } else {
      dispatch(hidePhoneModal());
    }
  };
  const phoneBlurHandler = () => {
    if (!clickedInPhoneModal) {
      dispatch(toggleBlur('hide'));
      dispatch(hidePhoneModal());
      dispatch(setSeveralClicksOnPhoneModal('no'));
    }
  };

  const findMobileHandler = () => {
    // dispatch(toggleBlur(2));
    router.push({
      pathname: '/find',
      // query: { keyword: 'came from search icon' },
    });
  };

  // const [phoneIconHovered, setIconHovered] = useState(false)
  // const onMouseOverPhoneIconHandler = () => {
  //   setIconHovered(true)
  // }
  // const onMouseLeavePhoneIconHandler = () => {
  //   setIconHovered(false)
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
                  className={`${burgerMenuOpened ? style.hoverClass : ''} ${
                    burgerMenuOpened ? style.burgerTriangle : ''
                  }`}
                  ref={burgerButtonRef}
                >
                  {!burgerMenuOpened && <Burger />}
                  {burgerMenuOpened && <BurgerWhite />}
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={findMobileHandler}
                  className={style.findButton}
                >
                  <Find className={style.findSvgMobile} />
                  <FindWhite className={style.findWhiteSvgMobile} />
                </button>
              </li>
            </ul>
          </li>
          <li>
            <Link href="/">
              <Logo className={style.logoHeaderMobile} />
            </Link>
          </li>
          <li>
            <button
              type="button"
              onClick={phoneMobileHandler}
              onBlur={phoneBlurHandler}
              className={`${phoneModalOpened ? style.hoverClass : ''} ${
                phoneModalOpened ? style.phoneTriangle : ''
              }`}
              ref={phoneButtonRef}
            >
              {!phoneModalOpened && <Phone className={style.phoneSvgMobile} />}
              {phoneModalOpened && (
                <PhoneWhite className={style.phoneSvgMobile} />
              )}
            </button>
          </li>
        </ul>
      </nav>
      <nav className={style.navDesktop}>
        <ul className={style.navDesktopUpperUl}>
          <li>
            <ul className={style.navDesktopFirstInnerUl}>
              <li>
                <Link href="/">
                  <Logo className={style.logoHeaderDesktop} />
                </Link>
              </li>
              <hr className={style.hr} />
              <li>
                <button
                  type="button"
                  className={`${style.objectsButton} ${
                    burgerMenuOpened ? style.objectsButtonClicked : ''
                  }`}
                  onClick={burgerHandler}
                  onBlur={burgerBlurHandler}
                  ref={burgerButtonDesktopRef}
                >
                  Приміщення
                </button>
              </li>
            </ul>
          </li>
          <li className={style.lastUpperDesktopLi}>
            <ul className={style.lastInnerUlDesktopLi}>
              <li>
                <button
                  type="button"
                  className={`${style.desktopIconButon} ${
                    phoneModalOpened ? style.hoverClass : ''
                  }`}
                  onClick={phoneMobileHandler}
                  onBlur={phoneBlurHandler}
                  ref={phoneButtonDesktopRef}
                >
                  {!phoneModalOpened && <Phone className={style.phoneSvg} />}
                  {!phoneModalOpened && (
                    <PhoneWhite className={style.phoneWhiteSvg} />
                  )}
                  {phoneModalOpened && (
                    <PhoneWhite className={style.phoneWhiteOpenedSvg} />
                  )}
                </button>
              </li>
              <hr className={style.hrBetweenIcons} />
              <li>
                <Link href="/find">
                  <button type="button" className={style.desktopIconButon}>
                    <Find className={style.findSvg} />
                    <FindWhite className={style.findWhiteSvg} />
                    <p className={style.findText}>
                      Знайдіть потрібний об&apos;єкт
                    </p>
                  </button>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
