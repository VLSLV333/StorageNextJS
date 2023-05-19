import { useState } from "react";

import MainPhoto from "./mainPhoto/MainPhoto";
import DropDownSection from "./dropDownSection/DropDownSection";

import Office from "./vectors/office/Office";
import Warehouse from "./vectors/warehouse/Warehouse";
import FridgeTest from "./vectors/fridge/Fridge";
import Box from "./vectors/box/Box";

import MainCard from "../../../UI/mainCard/MainCard";

import style from "./Main.module.scss";

export default function Main() {
  return (
    <main className={style.main}>
      <div className={style.mainPhotoContainer}>
        <MainPhoto />
      </div>
      <DropDownSection w={"90%"} />
      <div className={style.mainCardsContainer}>
      <MainCard className={style.firstChild}>
        <div style={{ margin: "auto 0" }}>
          <Box color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <h2>
            <span>Авто бокси</span>
          </h2>

          <p>Орендуйте бокси на закритій території</p>
        </div>
      </MainCard>
      <MainCard className={style.secondChild}>
        <div style={{ margin: "auto 0" }}>
          <Warehouse color="#7ed957" height="40px" width="40px" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h2>
            <span>Складські приміщення</span>
          </h2>

          <p>Приміщення під ваші потреби від 80 м2</p>
        </div>
      </MainCard>
      <MainCard className={style.firstChild}>
        <div style={{ margin: "auto 0" }}>
          <Office color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <h2>
            <span>Офісні приміщення</span>
          </h2>

          <p>Готові офіси в центрі та на околицях міста.</p>
        </div>
      </MainCard>
      <MainCard className={style.secondChild}>
        <div style={{ margin: "auto 0" }}>
          <FridgeTest color="#7ed957" mr="0" height="40px" width="40px" />
        </div>
        <div>
          <h2>
            <span>Холодильні приміщення</span>
          </h2>

          <p>Підтримка температури в діапазоні від 0 до 10 °C</p>
        </div>
      </MainCard>
      </div>
    </main>
  );
}
