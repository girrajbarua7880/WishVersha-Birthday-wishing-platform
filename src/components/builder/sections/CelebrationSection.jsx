import { useState } from "react";

function CelebrationSection({ data }) {
  const [celebrated, setCelebrated] = useState(false);

  const handleCelebrate = () => {
    setCelebrated(true);
  };

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-indigo-950 via-purple-950 to-pink-950 px-6 py-20 text-white">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Decorations */}
      <div className="absolute left-[10%] top-[18%] text-3xl opacity-40">
        ✨
      </div>

      <div className="absolute right-[12%] top-[25%] text-3xl opacity-40">
        🎈
      </div>

      <div className="absolute bottom-[20%] left-[15%] text-3xl opacity-30">
        🎉
      </div>

      <div className="absolute bottom-[15%] right-[15%] text-3xl opacity-30">
        💜
      </div>

      <div className="relative z-10 w-full max-w-2xl text-center">

        {/* Icon */}
        <div
          className={`text-7xl transition-all duration-700 sm:text-8xl ${
            celebrated ? "scale-110" : ""
          }`}
        >
          {celebrated ? "🎉" : "🎂"}
        </div>

        {/* Heading */}
        <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-pink-300">
          A Moment Just For You
        </p>

        <h2 className="mt-3 text-4xl font-black sm:text-5xl">
          {data?.title || "Make A Wish 🎂"}
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
          {data?.message ||
            "Close your eyes, make a wish and celebrate this beautiful day."}
        </p>

        {/* Cake */}
        <div className="mx-auto mt-12 flex min-h-[260px] max-w-md items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.05] p-10 shadow-2xl backdrop-blur-xl">
          <div className="relative">

            {/* Flame */}
            {!celebrated && (
              <div className="absolute -top-16 left-1/2 -translate-x-1/2 animate-pulse text-4xl">
                🔥
              </div>
            )}

            {/* Cake */}
            <div className="text-8xl transition-transform duration-500 sm:text-9xl">
              {celebrated ? "🍰" : "🎂"}
            </div>

            {/* Candle */}
            {!celebrated && (
              <div className="absolute left-1/2 top-1/4 -translate-x-1/2 text-2xl">
                🕯️
              </div>
            )}
          </div>
        </div>

        {/* Action */}
        {!celebrated ? (
          <>
            <button
              type="button"
              onClick={handleCelebrate}
              className="mt-10 rounded-2xl bg-white px-8 py-4 text-sm font-black text-slate-950 shadow-xl transition duration-300 hover:-translate-y-1 hover:scale-105 hover:bg-pink-50 focus:outline-none"
            >
              Make A Wish ✨
            </button>

            <p className="mt-4 text-xs text-white/30">
              Tap when you're ready
            </p>
          </>
        ) : (
          <>
            {/* Celebration Message */}
            <div className="mt-10">
              <p className="text-2xl font-black text-pink-300">
                Wish Made! 🎉
              </p>

              <p className="mt-3 text-sm text-white/50">
                May your beautiful wish come true. 💜
              </p>
            </div>

            {/* Confetti */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden">
              <span className="absolute left-[15%] top-[10%] animate-bounce text-2xl">
                🎉
              </span>

              <span className="absolute right-[15%] top-[15%] animate-pulse text-2xl">
                ✨
              </span>

              <span className="absolute left-[25%] bottom-[15%] animate-bounce text-2xl">
                🎈
              </span>

              <span className="absolute right-[25%] bottom-[20%] animate-pulse text-2xl">
                💜
              </span>
            </div>

            <div className="mt-10 animate-bounce text-xl text-white/30">
              ↓
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default CelebrationSection;