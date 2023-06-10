import Image from 'next/image';

import style from './Galery.module.scss';

export default function Galery({ photosArray }) {
  return (
    <div className={style.productCarousel}>
      <div className={style.productContainerMobile}>
        {photosArray?.map((photo, photoIndex) => (
          <Image
            src={photo}
            alt="work"
            style={{ objectFit: 'contain' }}
            height={375}
            width={290}
            priority={photoIndex === 0}
            key={photo}
          />
        ))}
      </div>
      <div className={style.productContainerTablet}>
        {photosArray?.map((photo) => (
          <Image
            src={photo}
            alt="work"
            style={{ objectFit: 'cover' }}
            height={435}
            width={395}
            // priority={photoIndex === 0 || photoIndex === 1}
            key={photo}
          />
        ))}
      </div>
    </div>
  );
}
