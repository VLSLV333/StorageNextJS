import { useRef } from 'react';

// import useOutsideAlerter from '../../hooks/useOutsideClick';

import DropDownSection from '../mainPage/main/dropDownSection/DropDownSection';

import style from './ModalFind.module.scss';

export default function ModalFind() {
  // const wrapperRef = useRef(null);
  // useOutsideAlerter(wrapperRef);
  return (
    <section className={style.modal} ref={wrapperRef}>
      <DropDownSection w="100%" m="0" />
    </section>
  );
}
