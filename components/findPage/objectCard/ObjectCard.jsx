import style from './ObjectCard.module.scss'

export default function ObjectCard() {
    return (
        <div>
            <div className={style.imgContainer}>
                <img />
            </div>
            <div className={style.descriptionContainer}>
            <h2>Адреса об'єкта</h2>
            <p>Додатковий опис, який відображується лише після нажимання на +</p>
            </div>
            <div className={style.priceContainer}>
                <h3>Тип - Офіс</h3>
                <p>Ціна в місяць</p>
                <p>Ціна за м2</p>
            </div>
            <button>
                Детальніше
            </button>
        </div>
    )
}