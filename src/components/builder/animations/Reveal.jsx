import { useEffect, useState } from "react";

function Reveal({
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
      className={`origin-center transition-all ease-out ${
        visible
          ? "scale-100 opacity-100 blur-0"
          : "scale-[0.96] opacity-0 blur-sm"
      }`}
      style={{
        transitionDuration: `${duration}ms`,
      }}
    >
      {children}
    </div>
  );
}

export default Reveal;