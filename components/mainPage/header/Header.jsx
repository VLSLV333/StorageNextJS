import { useRef, useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { toggleBlur } from '../../../store/pageBlurSlice';
import { showBurgerMenu, hideBurgerMenu } from '../../../store/burgerMenuSlice';
import { openFindModal, hideFindModal } from '@/store/findModalMobileSlice';
import { openPhoneModal, hidePhoneModal } from '@/store/phoneModalSlice';

import Burger from './vectors/burger/Burger';
import Find from './vectors/find/Find';
import Phone from './vectors/phone/Phone';
import Logo from './vectors/logo/Logo';

import style from './Header.module.scss';

function Header() {
  const findButtonRef = useRef(null);
  const phoneButtonRef = useRef(null);

  const dispatch = useDispatch();
  const burgerMenuOpened = useSelector(
    (state) => state.burgerMenu.openBurgerMenu
  );
  const findModalMobileOpened = useSelector(
    (state) => state.findModalMobile.showFindModal
  );
  const clickedInFindModal = useSelector(
    (state) => state.findModalMobile.clickedInModal
  );
  const phoneModalOpened = useSelector(
    (state) => state.phoneModal.showPhoneModal
  );
  const clickedInPhoneModal = useSelector(
    (state) => state.phoneModal.clickedInPhoneModal
  );

  useEffect(() => {
    if (clickedInFindModal === false) {
      findButtonRef.current?.focus();
    }
  }, [clickedInFindModal]);
  useEffect(() => {
    if (clickedInPhoneModal === false) {
      phoneButtonRef.current?.focus();
    }
  }, [clickedInPhoneModal]);

  const burgerHandler = () => {
    dispatch(toggleBlur(1));
    if (!burgerMenuOpened) {
      dispatch(showBurgerMenu());
    } else {
      dispatch(hideBurgerMenu());
    }
  };
  const burgerBlurHandler = () => {
    dispatch(toggleBlur('hide'));
    dispatch(hideBurgerMenu());
  };

  const findMobileHandler = () => {
    dispatch(toggleBlur(2));
    if (!findModalMobileOpened) {
      dispatch(openFindModal());
    } else {
      dispatch(hideFindModal());
    }
  };
  const findMobileBlurHandler = () => {
    if (!clickedInFindModal) {
      dispatch(toggleBlur('hide'));
      dispatch(hideFindModal());
    }
  };

  const phoneMobileHandler = () => {
    dispatch(toggleBlur(3));
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
                  className={burgerMenuOpened ? style.hoverClass : ''}
                >
                  <Burger />
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={findMobileHandler}
                  onBlur={findMobileBlurHandler}
                  className={findModalMobileOpened ? style.hoverClass : ''}
                  ref={findButtonRef}
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
              className={phoneModalOpened ? style.hoverClass : ''}
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
                <button className={style.objectsButton} type="button">
                  Усі об&apos;єкти
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
