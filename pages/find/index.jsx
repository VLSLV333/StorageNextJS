import Head from "next/head";

import FindPage from "../../components/findPage/FindPage";

export default function Find() {
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
      <FindPage />
    </>
  );
}

// export async function getStaticProps() {
//   return {
//     props: {
//       arraFromDataBase: [],
//     },
//     revalidate: 14400, // seconds to check changes on page
//   };
// }
