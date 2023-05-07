import Image from 'next/image';

export default function MainPhoto() {
  return (
    <Image
      src="./main.webp"
      width={400}
      height={300}
      alt="Storage"
      priority
    //   placeholder="blur"
    />
  );
}
