import style from './MainCard.module.scss'

export default function MainCard({ children }) {
    return (
        <section className={style.cardComponent}>
            {children}
        </section>
    )
}