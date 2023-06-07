import style from "./CreateNewObject.module.scss";

export default function CreateNewObject() {
  const formHandler = (e) => {
    e.preventDefault();

    const objectToCreate = {
        type: e.target.type.value,
        link: e.target.link.value,
        m2: e.target.size.value,
        location: e.target.location.value,
        price: e.target.price.value,
        exactAddres: e.target.exactAddres.value,
        keyFeatures: e.target.keyFeatures.value,
        photos: e.target.photos.value.split(','),
        description: e.target.description.value,
        pass: e.target.pass.value,
    }

    console.log(objectToCreate);

  };

  return (
    <form onSubmit={formHandler} className={style.form}>
      <label htmlFor="type">
        Введіть тип об'єкту: Офіси / Складські приміщення / Бокси / Холодильні
        приміщення
      </label>
      <input type="text" id="type" name="type"></input>
      <label htmlFor="link">Вставте посилання на головне фото об'єкту</label>
      <input type="text" id="link" name="link"></input>
      <label htmlFor="size">Введіть розмір об'єкту</label>
      <input type="number" id="size" name="size"></input>
      <label htmlFor="location">Введіть район: pion / vokz / levan</label>
      <input type="text" id="location" name="location"></input>
      <label htmlFor="price">Введіть ціну на місяць</label>
      <input type="number" id="price" name="price"></input>
      <label htmlFor="exactAddres">
        Введіть точну адресу: "Вулиця Січневий Прорив 38А, Біла Церква, 09100"
      </label>
      <input type="text" id="exactAddres" name="exactAddres"></input>
      <label htmlFor="keyFeatures">
        Введіть ключові плюси: "Приємний ремонт / Закрита територія / Цілодобова
        охорона"
      </label>
      <input type="text" id="keyFeatures" name="keyFeatures"></input>
      <label htmlFor="description">
        Введіть текстовий опис: "Металевий склад на першому поверсі з під'їздами
        для вантажних автомобілів."
      </label>
      <input type="text" id="description" name="description"></input>
      <label htmlFor="photos">
        Вставте посилання на фото (5) через кому:
        "https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80,
        https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80,
        https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
      </label>
      <input type="text" id="photos" name="photos"></input>
      <label htmlFor="pass">Введіть пароль</label>
      <input type="text" id="pass" name="pass"></input>
      <button type="submit"  className={style.button}>Submit</button>
    </form>
  );
}
