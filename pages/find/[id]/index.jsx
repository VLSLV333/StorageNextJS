import { MongoClient, ObjectId } from 'mongodb';

import Head from 'next/head';

import ObjectDetailsPage from '@/components/objectDetailsPage/ObjectDetailsPage';

export default function Find({
  type,
  m2,
  price,
  exactAddres,
  keyFeatures,
  photos,
  description,
}) {
  return (
    <>
      <Head>
        <title>Опис об&apos;єкту</title>
        <meta name="description" content="Опис об'єкту" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <ObjectDetailsPage
        type={type}
        m2={m2}
        price={price}
        exactAddres={exactAddres}
        keyFeatures={keyFeatures}
        photos={photos}
        description={description}
      />
    </>
  );
}

export async function getStaticPaths() {
  const client = await MongoClient.connect(
    'mongodb+srv://Vlad_Father_Storage:NsF4yqDYj1WK8afo@cluster-father-storage.dfze9yi.mongodb.net/fatherStorageObjects?retryWrites=true&w=majority'
  );
  const db = client.db();

  const objectCollection = db.collection('fatherStorageObjects');

  // {} - find all objects there is no filter criteria
  // { _id: 1 } - find in all objects only id fild
  const objectsArray = await objectCollection.find({}, { _id: 1 }).toArray();

  client.close();

  return {
    // eslint-disable-next-line no-underscore-dangle
    paths: objectsArray.map((obj) => ({ params: { id: obj._id.toString() } })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const objectId = context.params.id;

  const client = await MongoClient.connect(
    'mongodb+srv://Vlad_Father_Storage:NsF4yqDYj1WK8afo@cluster-father-storage.dfze9yi.mongodb.net/fatherStorageObjects?retryWrites=true&w=majority'
  );
  const db = client.db();

  const objectCollection = db.collection('fatherStorageObjects');

  const neededObject = await objectCollection.findOne({
    _id: new ObjectId(objectId),
  });

  return {
    props: {
      type: neededObject.type,
      m2: neededObject.m2,
      price: neededObject.price,
      exactAddres: neededObject.exactAddres,
      keyFeatures: neededObject.keyFeatures,
      photos: neededObject.photos,
      description: neededObject.description,
    },
    revalidate: 14400, // seconds to check changes on page
  };
}
