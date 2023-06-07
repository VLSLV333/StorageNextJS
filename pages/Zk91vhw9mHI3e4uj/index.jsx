import Head from "next/head";

import CreateNewObject from "@/components/createNewObject/CreateNewObject";

export default function CreateObj() {
  return (
    <>
      <Head>
        <title>Create but be cautios</title>
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1,shrink-to-fit=no,viewport-fit=cover"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CreateNewObject />
    </>
  );
}
