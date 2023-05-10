import style from './ModalPhone.module.scss';

export default function ModalPhone() {
    return (
        <section className={style.modal}>
            <h2>Зв&apos;яжіться з нами</h2>
            <hr />
            <p>Найкращий спосіб вирішити ваші запитання та підібрати потрібний об&apos;єкт — поговорити</p>
            <p className={style.number}>+38 (063) 214-87-04</p>
        </section>
    )
}