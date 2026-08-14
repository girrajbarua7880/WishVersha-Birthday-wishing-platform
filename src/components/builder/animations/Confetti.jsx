import { useEffect, useState } from "react";

function Confetti({
  children,
  duration = 3000,
  delay = 0,
  pieces = 24,
}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const confettiPieces = Array.from(
    { length: pieces },
    (_, index) => ({
      id: index,
      left: `${(index * 37) % 100}%`,
      delay: `${(index % 8) * 0.12}s`,
      rotation: `${(index * 47) % 360}deg`,
    })
  );

  return (
    <div className="relative overflow-hidden">
      {children}

      {show && (
        <div
          className="pointer-events-none absolute inset-0 z-50 overflow-hidden"
          style={{
            animation: `confettiFade ${duration}ms ease-out forwards`,
          }}
        >
          {confettiPieces.map((piece) => (
            <span
              key={piece.id}
              className="absolute top-[-20px] h-3 w-2 rounded-sm bg-white"
              style={{
                left: piece.left,
                transform: `rotate(${piece.rotation})`,
                animation: `confettiFall ${
                  duration - 300
                }ms ease-in ${piece.delay} forwards`,
              }}
            />
          ))}
        </div>
      )}

      <style>
        {`
          @keyframes confettiFall {
            0% {
              transform: translateY(-20px) rotate(0deg);
              opacity: 1;
            }

            100% {
              transform: translateY(110vh) rotate(720deg);
              opacity: 0;
            }
          }

          @keyframes confettiFade {
            0% {
              opacity: 1;
            }

            80% {
              opacity: 1;
            }

            100% {
              opacity: 0;
            }
          }
        `}
      </style>
    </div>
  );
}

export default Confetti;