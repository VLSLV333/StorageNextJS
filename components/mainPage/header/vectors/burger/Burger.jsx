function Burger({className}) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <line
        x1="1"
        y1="13"
        x2="11"
        y2="13"
        stroke="#393939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="8"
        x2="15"
        y2="8"
        stroke="#393939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <line
        x1="1"
        y1="3"
        x2="7"
        y2="3"
        stroke="#393939"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default Burger;
