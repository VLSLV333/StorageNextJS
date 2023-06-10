import { MongoClient } from 'mongodb';

import Head from 'next/head';

import FindPage from '../../components/findPage/FindPage';

export default function Find({
  // officeDB,
  // wareHouseDB,
  // boxDB,
  // fridgeDB,
  allObjDB,
}) {
  return (
    <>
      <Head>
        <title>Оренда приміщень Біла Церква</title>
        <meta name="description" content="Оренда приміщень Біла Церква" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <FindPage
        // officeDB={officeDB}
        // wareHouseDB={wareHouseDB}
        // boxDB={boxDB}
        // fridgeDB={fridgeDB}
        allObjDB={allObjDB}
      />
    </>
  );
}

export async function getStaticProps() {
  // console.log(context.params);
  // console.log(context);
  // const { params } = context;

  const client = await MongoClient.connect(
    'mongodb+srv://Vlad_Father_Storage:NsF4yqDYj1WK8afo@cluster-father-storage.dfze9yi.mongodb.net/fatherStorageObjects?retryWrites=true&w=majority'
  );
  const db = client.db();

  const objectCollection = db.collection('fatherStorageObjects');

  const allObjectsArray = await objectCollection.find().toArray();

  // const officeArray = allObjectsArray.filter((obj) => obj.type === 'Офіси');
  // const wareHouseArray = allObjectsArray.filter(
  //   (obj) => obj.type === 'Складські приміщення'
  // );
  // const boxArray = allObjectsArray.filter((obj) => obj.type === 'Бокси');
  // const fridgeArray = allObjectsArray.filter(
  //   (obj) => obj.type === 'Холодильні приміщення'
  // );

  client.close();

  // console.log(allObjectsArray);

  return {
    props: {
      // officeDB: officeArray.map((obj) => ({
      //   type: obj.type,
      //   link: obj.link,
      //   m2: obj.m2,
      //   location: obj.location,
      //   price: obj.price,
      //   exactAddres: obj.exactAddres,
      //   photos: obj.photos,
      //   description: obj.description,
      //   keyFeatures: obj.keyFeatures,
      //   // eslint-disable-next-line no-underscore-dangle
      //   id: obj._id.toString(),
      // })),
      // wareHouseDB: wareHouseArray.map((obj) => ({
      //   type: obj.type,
      //   link: obj.link,
      //   m2: obj.m2,
      //   location: obj.location,
      //   price: obj.price,
      //   exactAddres: obj.exactAddres,
      //   photos: obj.photos,
      //   description: obj.description,
      //   keyFeatures: obj.keyFeatures,
      //   // eslint-disable-next-line no-underscore-dangle
      //   id: obj._id.toString(),
      // })),
      // boxDB: boxArray.map((obj) => ({
      //   type: obj.type,
      //   link: obj.link,
      //   m2: obj.m2,
      //   location: obj.location,
      //   price: obj.price,
      //   exactAddres: obj.exactAddres,
      //   photos: obj.photos,
      //   description: obj.description,
      //   keyFeatures: obj.keyFeatures,
      //   // eslint-disable-next-line no-underscore-dangle
      //   id: obj._id.toString(),
      // })),
      // fridgeDB: fridgeArray.map((obj) => ({
      //   type: obj.type,
      //   link: obj.link,
      //   m2: obj.m2,
      //   location: obj.location,
      //   price: obj.price,
      //   exactAddres: obj.exactAddres,
      //   photos: obj.photos,
      //   description: obj.description,
      //   keyFeatures: obj.keyFeatures,
      //   // eslint-disable-next-line no-underscore-dangle
      //   id: obj._id.toString(),
      // })),
      allObjDB: allObjectsArray.map((obj) => ({
        type: obj.type,
        link: obj.link,
        m2: obj.m2,
        location: obj.location,
        price: obj.price,
        exactAddres: obj.exactAddres,
        photos: obj.photos,
        description: obj.description,
        keyFeatures: obj.keyFeatures,
        // eslint-disable-next-line no-underscore-dangle
        id: obj._id.toString(),
      })),
    },
    revalidate: 14400, // seconds to check changes on page
  };
}
