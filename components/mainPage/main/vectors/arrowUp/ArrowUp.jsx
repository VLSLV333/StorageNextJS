export default function ArrowUp({ className, box = [0, 0, 20, 11], color = "black" }) {
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
        d="M0.46967 10.5303C0.176777 10.2374 0.176777 9.76256 0.46967 9.46967L9.46967 0.46967C9.76256 0.176776 10.2374 0.176776 10.5303 0.46967L19.5303 9.46967C19.8232 9.76256 19.8232 10.2374 19.5303 10.5303C19.2374 10.8232 18.7626 10.8232 18.4697 10.5303L10 2.06066L1.53033 10.5303C1.23744 10.8232 0.762563 10.8232 0.46967 10.5303Z"
        fill={color}
      />
    </svg>
  );
}
