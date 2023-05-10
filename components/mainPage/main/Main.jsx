import { useState } from 'react';

import MainPhoto from './mainPhoto/MainPhoto';
import DropDownSection from './dropDownSection/DropDownSection';


import Office from './vectors/office/Office';
import Warehouse from './vectors/warehouse/Warehouse';
import FridgeTest from './vectors/fridge/Fridge';
import Box from './vectors/box/Box';

import MainCard from '../../../UI/mainCard/MainCard';

import style from './Main.module.scss';

export default function Main() {

  return (
    <main className={style.main}>
      <MainPhoto />
      <DropDownSection w={'90%'} />
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Box color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Авто бокси</h2>
          </a>
          <p>Орендуйте бокси на закритій території</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Warehouse color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Складські приміщення</h2>
          </a>
          <p>Приміщення під ваші потреби від 80 м2</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <Office color="#7ed957" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Офісні приміщення</h2>
          </a>
          <p>Готові офіси в центрі та на околицях міста.</p>
        </div>
      </MainCard>
      <MainCard>
        <div style={{ width: '50px', display: 'flex', alignItems: 'center' }}>
          <FridgeTest color="#7ed957" mr="0" height="40px" width="40px" />
        </div>
        <div>
          <a href="https://github.com/">
            <h2>Холодильні приміщення</h2>
          </a>
          <p>Підтримка температури в діапазоні від 0 до 10 °C</p>
        </div>
      </MainCard>
    </main>
  );
}
// ;
