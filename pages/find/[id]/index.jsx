import { useRouter } from 'next/router';

export default function FindDynamic() {
// export default function FindDynamic({ params, searchParams }) {
  const router = useRouter();
  // console.log(router.query)
  return (
    <h1>
      Lets find it!
      <br></br>
      {router.query.id}
      <br></br>
      {router.query.keyword}
      
      {/* {searchParams} */}
    </h1>
  );
}
