import style from './MainPhoto.module.scss'

export default function MainPhoto() {
    return (
        <section className={style.section}>
            <h1 className={style.h1}>
                Оренда приміщень
                <br />
                Біла Церква
                <span className={style.green}>.</span>
            </h1>
        </section>
    )
}