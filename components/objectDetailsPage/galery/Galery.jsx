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
            style={{ objectFit: 'cover' }}
            height={375}
            width={290}
            priority={photoIndex === 0}
            key={photo}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAASxJREFUKFMVyskuQ2EYgOH3b0sbYSFBa4iaLsGV2Nq4FvYSt2JjIbEiFtI0kYqpERqUKmfQc3r+8RPP+lE3vTtZbzRxwSIESigmyhVcCNjgcM5RGIN6/OjKVn0TGyzGa3wI1CpVvHgKqxmNx/Q+31EP/a5s1jew3uHEggSUUngJaKN5fHvm9Ooc1Xm5l7XFJsZZSv8heIa/KZNlxU/6w1nrgovrFqr1dCPLC8tY5xCBfvRN+6lLOWj6g1cuO23iOEad3F7K0kyDwmiSUcLDW4+71y5ZOmA4/GIYJXirUQfHR7IyNY8PhuQ3Ii8SijyCUJBEKYMoYZTlqL3DHVmdnqNarRC8oyQWZzJKBIzWxGlKFGeo3f1tadRmqdWqgKLIR+g8wRqDMxZjDFlm+ANFJcqV28ZkIgAAAABJRU5ErkJggg=="
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
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAJCAYAAAALpr0TAAAAAXNSR0IArs4c6QAAASxJREFUKFMVyskuQ2EYgOH3b0sbYSFBa4iaLsGV2Nq4FvYSt2JjIbEiFtI0kYqpERqUKmfQc3r+8RPP+lE3vTtZbzRxwSIESigmyhVcCNjgcM5RGIN6/OjKVn0TGyzGa3wI1CpVvHgKqxmNx/Q+31EP/a5s1jew3uHEggSUUngJaKN5fHvm9Ooc1Xm5l7XFJsZZSv8heIa/KZNlxU/6w1nrgovrFqr1dCPLC8tY5xCBfvRN+6lLOWj6g1cuO23iOEad3F7K0kyDwmiSUcLDW4+71y5ZOmA4/GIYJXirUQfHR7IyNY8PhuQ3Ii8SijyCUJBEKYMoYZTlqL3DHVmdnqNarRC8oyQWZzJKBIzWxGlKFGeo3f1tadRmqdWqgKLIR+g8wRqDMxZjDFlm+ANFJcqV28ZkIgAAAABJRU5ErkJggg=="
          />
        ))}
      </div>
    </div>
  );
}
