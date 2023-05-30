export default function ArrowDown({
  className,
  box = [0, 0, 20, 11],
  color = 'black',
}) {
  const [a, b, c, d] = box;
  return (
    <svg
      width="15"
      height="7"
      viewBox={`${a} ${b} ${c} ${d}`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.5303 0.46967C19.8232 0.762563 19.8232 1.23744 19.5303 1.53033L10.5303 10.5303C10.2374 10.8232 9.76256 10.8232 9.46967 10.5303L0.469669 1.53033C0.176777 1.23744 0.176777 0.762563 0.469669 0.46967C0.762564 0.176777 1.23744 0.176777 1.53033 0.46967L10 8.93934L18.4697 0.46967C18.7626 0.176777 19.2374 0.176777 19.5303 0.46967Z"
        fill={color}
      />
    </svg>
  );
}
