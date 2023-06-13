import { useEffect } from "react";

import { useDispatch } from "react-redux";
// import { setClickedInModal } from "../store/findModalMobileSlice";
import {
  setClickedInPhoneModal,
  setSeveralClicksOnPhoneModal,
} from "@/store/phoneModalSlice";
import {
  setClickedInBurgerModal,
  setSeveralClicksOnBurgerModal,
} from "@/store/burgerMenuSlice";

function useOutsideClick(ref) {
  const body = document.getElementById("body");
  const mainText = document.getElementById("mainText");
  const dispatch = useDispatch();
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && ref.current.contains(event.target)) {
        if (ref.current.id === "burger") {
          dispatch(setClickedInBurgerModal("yes"));
          // dispatch(setSeveralClicksOnBurgerModal("yes"));
          mainText.style.color = "blue";
          console.log('inside')
        }
        if (ref.current.id === "phone") {
          dispatch(setClickedInPhoneModal("yes"));
          dispatch(setSeveralClicksOnPhoneModal("yes"));
        }
        // dispatch(setClickedInModal("yes"));
      } else {
        console.log("out");
        mainText.style.color = "red";
        // dispatch(setClickedInModal("no"));
        dispatch(setClickedInPhoneModal("no"));
        dispatch(setClickedInBurgerModal("no"));
      }
    }
    // document.addEventListener("mousedown", handleClickOutside);
    // body.addEventListener("mousedown", handleClickOutside);
    body.addEventListener("pointerdown", handleClickOutside);
    // document.addEventListener('onpointerdown', handleClickOutside);
    return () => {
      // document.removeEventListener("mousedown", handleClickOutside);
      // body.removeEventListener("mousedown", handleClickOutside);
      body.removeEventListener("pointerdown", handleClickOutside);
      // document.removeEventListener('onpointerdown', handleClickOutside);
    };
  }, [ref, dispatch]);
}

export default useOutsideClick;
