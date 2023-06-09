import Head from "next/head";

import ObjectDetailsPage from "@/components/objectDetailsPage/ObjectDetailsPage";

export default function Find() {
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
      </Head>
      <ObjectDetailsPage />
    </>
  );
}

// export async function getStaticPaths() {
//   return {
//     paths: [
//       {
//         params: {
//           id: "object real id generated dynamically",
//         },
//       },
//     ],
//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const objectId = context.params.id;

//   return {
//     props: {
//       arraFromDataBase: [],
//     },
//     revalidate: 14400, // seconds to check changes on page
//   };
// }
