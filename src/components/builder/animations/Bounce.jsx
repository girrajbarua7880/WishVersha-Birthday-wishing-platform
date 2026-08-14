import { useEffect, useState } from "react";

function Bounce({
  children,
  duration = 800,
  delay = 0,
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
      className={`transition-all ${
        visible
          ? "translate-y-0 scale-100 opacity-100"
          : "translate-y-8 scale-90 opacity-0"
      }`}
      style={{
        transitionDuration: `${duration}ms`,
        transitionTimingFunction: visible
          ? "cubic-bezier(0.34, 1.56, 0.64, 1)"
          : "ease-out",
      }}
    >
      {children}
    </div>
  );
}

export default Bounce;