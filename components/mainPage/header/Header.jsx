import { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { useRouter } from 'next/navigation';

import Link from 'next/link';

import { toggleBlur } from '../../../store/pageBlurSlice';
import {
  showBurgerMenu,
  hideBurgerMenu,
} from '../../../store/burgerMenuSlice';
// import { openFindModal, hideFindModal } from '@/store/findModalMobileSlice';
import {
  openPhoneModal,
  hidePhoneModal,
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

  const phoneModalOpened = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );
  const clickedInPhoneModal = useSelector(
    (state) => state.phoneModal.clickedInPhoneModal
  );

  useEffect(() => {
    if (clickedInBurgerModal === false) {
      burgerButtonDesktopRef.current?.focus();
      burgerButtonRef.current?.focus();
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
    burgerButtonDesktopRef.current?.focus();
    burgerButtonRef.current?.focus();
    if (!burgerMenuOpened) {
      dispatch(showBurgerMenu());
    } else {
      dispatch(hideBurgerMenu());
    }
  };
  const burgerBlurHandler = () => {
    if (!clickedInBurgerModal) {
      dispatch(toggleBlur('hide'));
      dispatch(hideBurgerMenu());
    }
  };

  const phoneMobileHandler = () => {
    dispatch(toggleBlur(3));
    phoneButtonRef.current?.focus();
    phoneButtonDesktopRef.current?.focus();
    if (!phoneModalOpened) {
      dispatch(openPhoneModal());
    } else {
      dispatch(hidePhoneModal());
    }
  };
  const phoneBlurHandler = () => {
    if (!clickedInPhoneModal) {
      dispatch(toggleBlur('hide'));
      dispatch(hidePhoneModal());
    }
  };

  const findMobileHandler = () => {
    router.push({
      pathname: '/find',
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
