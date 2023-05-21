import { useRouter } from 'next/router';

export default function FindDynamic() {
// export default function FindDynamic({ params, searchParams }) {
  const router = useRouter();
  return (
    <h1>
      Lets find it!
      {router.query.id}
      {/* {searchParams} */}
    </h1>
  );
}
