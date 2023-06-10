import style from './CreateNewObject.module.scss';

export default function CreateNewObject() {
  const formHandler = async (e) => {
    e.preventDefault();

    try {
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
      };

      const responce = await fetch('/api/newObject', {
        method: 'POST',
        body: JSON.stringify(objectToCreate),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const data = await responce.json();

      console.log(data);
    } catch (error) {
      throw new Error(`something went wrong: ${error}`);
    }
  };

  return (
    <form onSubmit={formHandler} className={style.form}>
      <label htmlFor="type">
        Введіть тип об&apos;єкту: Офіси / Складські приміщення / Бокси /
        Холодильні приміщення
        <input type="text" id="type" name="type" className={style.input} />
      </label>
      <label htmlFor="link">
        Вставте посилання на головне фото об&apos;єкту
        <input type="text" id="link" name="link" className={style.input} />
      </label>
      <label htmlFor="size">
        Введіть розмір об&apos;єкту
        <input type="number" id="size" name="size" className={style.input} />
      </label>
      <label htmlFor="location">
        Введіть район: pion / vokz / levan
        <input
          type="text"
          id="location"
          name="location"
          className={style.input}
        />
      </label>
      <label htmlFor="price">
        Введіть ціну на місяць
        <input type="number" id="price" name="price" className={style.input} />
      </label>
      <label htmlFor="exactAddres">
        Введіть точну адресу: &quot;Вулиця Січневий Прорив 38А, Біла Церква,
        09100&quot;
        <input
          type="text"
          id="exactAddres"
          name="exactAddres"
          className={style.input}
        />
      </label>
      <label htmlFor="keyFeatures">
        Введіть ключові плюси: &quot;Приємний ремонт / Закрита територія /
        Цілодобова охорона&quot;
        <input
          type="text"
          id="keyFeatures"
          name="keyFeatures"
          className={style.input}
        />
      </label>
      <label htmlFor="description">
        Введіть текстовий опис: &quot;Металевий склад на першому поверсі з
        під&apos;їздами для вантажних автомобілів.&quot;
        <input
          type="text"
          id="description"
          name="description"
          className={style.input}
        />
      </label>
      <label htmlFor="photos">
        Вставте посилання на фото (5) через кому:
        &quot;https://images.unsplash.com/photo-1682687220199-d0124f48f95b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80,
        https://images.unsplash.com/photo-1685392198162-c110bc28e838?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1130&q=80,
        https://images.unsplash.com/photo-1674574124473-e91fdcabaefc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80&quot;
        <input type="text" id="photos" name="photos" className={style.input} />
      </label>
      <label htmlFor="pass">
        Введіть пароль
        <input type="text" id="pass" name="pass" className={style.input} />
      </label>
      <button type="submit" className={style.button}>
        Submit
      </button>
    </form>
  );
}
