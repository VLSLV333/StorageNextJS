import Link from 'next/link';

import style from './MainCard.module.scss';

export default function MainCard({ children, className, pushTo }) {
  return (
    <Link
      href={{
        pathname: '/find',
        query: { whatIsRented: pushTo },
      }}
      className={`${style.cardComponent} ${className}`}
    >
      {children}
    </Link>
  );
}
