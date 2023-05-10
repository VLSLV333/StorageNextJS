import Office from '../mainPage/main/vectors/office/Office';
import Warehouse from '../mainPage/main/vectors/warehouse/Warehouse';
import Fridge from '../mainPage/main/vectors/fridge/Fridge';
import Box from '../mainPage/main/vectors/box/Box';

import style from './ModalMainMenu.module.scss';

export default function ModalMeinMenu() {
    return (
        <section className={style.modal}>
            <h2>Оберіть потрібний об&apos;єкт</h2>
            <hr />
            <div>
                <Office height={'26px'} width={'26px'} color={'black'} />
                <p>Офісні приміщення</p>
            </div>
            <div>
                <Warehouse height={'26px'} width={'26px'} color={'black'} />
                <p>Складські приміщення</p>
            </div>
            <div>
                <Fridge height={'26px'} width={'26px'} color={'black'} />
                <p>Холодильні приміщення</p>
            </div>
            <div>
                <Box height={'26px'} width={'26px'} color={'black'} />
                <p>Бокси</p>
            </div>
        </section>
    )
}