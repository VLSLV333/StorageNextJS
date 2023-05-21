import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setClickedInModal } from '../store/findModalMobileSlice';
import { setClickedInPhoneModal } from '@/store/phoneModalSlice';
import { setClickedInBurgerModal } from '@/store/burgerMenuSlice';

function useOutsideClick(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        dispatch(setClickedInModal('yes'));
        dispatch(setClickedInPhoneModal('yes'));
        dispatch(setClickedInBurgerModal('yes'));
      } else {
        dispatch(setClickedInModal('no'));
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
