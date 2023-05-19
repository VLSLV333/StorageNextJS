import style from "./MainCard.module.scss";

export default function MainCard({ children, className }) {
  return (
    <a href="./find" className={`${style.cardComponent} ${className}`}>
      {children}
    </a>
  );
}
