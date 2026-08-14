import { useEffect, useState } from "react";

function Slide({
  children,
  duration = 700,
  delay = 0,
  direction = "up",
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const hiddenPosition = {
    up: "translate-y-10",
    down: "-translate-y-10",
    left: "translate-x-10",
    right: "-translate-x-10",
  };

  const initialPosition =
    hiddenPosition[direction] || hiddenPosition.up;

  return (
    <div
      className={`transition-all ease-out ${
        visible
          ? "translate-x-0 translate-y-0 opacity-100"
          : `${initialPosition} opacity-0`
      }`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default Slide;