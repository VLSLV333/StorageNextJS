import DropDownSection from '../mainPage/main/dropDownSection/DropDownSection';

import style from './ModalFind.module.scss';

export default function ModalFind() {
    return (
        <section className={style.modal}>
            <DropDownSection w={'100%'} m={'0'} />
        </section>
    )
}