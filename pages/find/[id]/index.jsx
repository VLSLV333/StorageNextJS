import Head from "next/head";

import ObjectDetailsPage from "@/components/objectDetailsPage/ObjectDetailsPage";

export default function Find() {
  return (
    <>
      <Head>
        <title>Опис об'єкту</title>
        <meta name="description" content="Опис об'єкту" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ObjectDetailsPage />
    </>
  );
}
