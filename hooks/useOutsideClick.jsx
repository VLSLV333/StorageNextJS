import { useEffect } from "react";

import { useDispatch } from "react-redux";
// import { setClickedInModal } from "../store/findModalMobileSlice";
import {
  setClickedInPhoneModal,
} from "@/store/phoneModalSlice";
import {
  setClickedInBurgerModal,
} from "@/store/burgerMenuSlice";

function useOutsideClick(ref) {
  const body = document.getElementById("body");
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        if (ref.current.id === "burger") {
          dispatch(setClickedInBurgerModal("yes"));
        }
        if (ref.current.id === "phone") {
          dispatch(setClickedInPhoneModal("yes"));
        }
      } else {
        dispatch(setClickedInPhoneModal("no"));
        dispatch(setClickedInBurgerModal("no"));
      }
    }
    body.addEventListener("pointerdown", handleClickOutside);
    return () => {
      body.removeEventListener("pointerdown", handleClickOutside);
    };
  }, [ref, dispatch]);
}

export default useOutsideClick;
