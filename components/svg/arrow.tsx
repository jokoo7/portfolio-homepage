import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

type IProps = {
  w: string;
  h: string;
  className?: string;
};

const ArrowSvg = ({ w, h, className }: IProps) => {
  const { theme } = useTheme();
  const [fillColor, setFillColor] = useState("#181717");

  useEffect(() => {
    setFillColor(theme === "light" ? "#181717" : "#f3f3f3");
  }, [theme]);

  return (
    <svg
      width={w}
      height={h}
      viewBox="0 0 24 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M-5.24032e-07 9.01154L-3.92898e-07 12.0115L18.3146 12.0115L11.3126 18.9462L13.4097 21L24 10.5115L13.4097 1.32119e-06L11.3126 2.1L18.3146 9.01154L-5.24032e-07 9.01154Z"
        fill={fillColor}
      />
    </svg>
  );
};

export default ArrowSvg;
