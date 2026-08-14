import { useEffect, useState } from "react";

function Typewriter({
  children,
  duration = 1200,
  delay = 0,
  cursor = true,
}) {
  const [started, setStarted] = useState(false);
  const [visibleCharacters, setVisibleCharacters] = useState(0);

  const text =
    typeof children === "string"
      ? children
      : "";

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setStarted(true);
    }, delay);

    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!started || !text) {
      return;
    }

    const intervalTime = Math.max(
      duration / text.length,
      20
    );

    const typingTimer = setInterval(() => {
      setVisibleCharacters((previous) => {
        if (previous >= text.length) {
          clearInterval(typingTimer);
          return text.length;
        }

        return previous + 1;
      });
    }, intervalTime);

    return () => clearInterval(typingTimer);
  }, [started, text, duration]);

  if (!text) {
    return children;
  }

  return (
    <span>
      {text.slice(0, visibleCharacters)}

      {cursor && visibleCharacters < text.length && (
        <span className="ml-1 inline-block animate-pulse">
          |
        </span>
      )}
    </span>
  );
}

export default Typewriter;