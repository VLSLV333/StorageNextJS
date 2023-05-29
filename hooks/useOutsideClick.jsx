import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
// import { setClickedInModal } from "../store/findModalMobileSlice";
import {
  setClickedInPhoneModal,
  setSeveralClicksOnPhoneModal,
} from '@/store/phoneModalSlice';
import {
  setClickedInBurgerModal,
  setSeveralClicksOnBurgerModal,
} from '@/store/burgerMenuSlice';

function useOutsideClick(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        if (ref.current.id === 'burger') {
          dispatch(setClickedInBurgerModal('yes'));
          dispatch(setSeveralClicksOnBurgerModal('yes'));
        }
        if (ref.current.id === 'phone') {
          dispatch(setClickedInPhoneModal('yes'));
          dispatch(setSeveralClicksOnPhoneModal('yes'));
        }
        // dispatch(setClickedInModal("yes"));
      } else {
        // dispatch(setClickedInModal("no"));
        dispatch(setClickedInPhoneModal('no'));
        dispatch(setClickedInBurgerModal('no'));
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dispatch]);
}

export default useOutsideClick;
