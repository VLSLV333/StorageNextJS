import { useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { setClickedInModal } from '../store/findModalMobileSlice';
import { setClickedInPhoneModal } from '@/store/phoneModalSlice';

function useOutsideClick(ref) {
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        dispatch(setClickedInModal('yes'));
        dispatch(setClickedInPhoneModal('yes'));
      } else {
        dispatch(setClickedInModal('no'));
        dispatch(setClickedInPhoneModal('no'));
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref, dispatch]);
}

export default useOutsideClick;
