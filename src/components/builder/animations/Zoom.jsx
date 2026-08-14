import { useEffect, useState } from "react";

function Zoom({
  children,
  duration = 700,
  delay = 0,
  scale = 0.9,
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-all ease-out ${
        visible
          ? "scale-100 opacity-100"
          : "opacity-0"
      }`}
      style={{
        transform: visible
          ? "scale(1)"
          : `scale(${scale})`,
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default Zoom;