import { useState } from "react";

function GiftSection({ data }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950 px-6 py-20 text-white">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/40 via-slate-950 to-pink-950/30" />

      <div className="absolute left-10 top-20 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 h-52 w-52 rounded-full bg-pink-500/10 blur-3xl" />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-xl text-center">

        <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
          A Little Surprise
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          {data?.title || "A Gift For You 🎁"}
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/50 sm:text-base">
          {data?.description ||
            "Something special is waiting inside."}
        </p>

        {/* Gift */}
        <button
          type="button"
          onClick={() => setOpened((previous) => !previous)}
          className="group mx-auto mt-12 block focus:outline-none"
          aria-label={opened ? "Close gift" : "Open gift"}
        >
          <div
            className={`relative flex h-48 w-48 items-center justify-center rounded-[40px] border border-white/10 bg-white/[0.05] text-8xl shadow-2xl backdrop-blur-xl transition-all duration-500 sm:h-56 sm:w-56 sm:text-9xl ${
              opened
                ? "scale-105 border-pink-400/30 bg-pink-500/10"
                : "group-hover:-translate-y-2 group-hover:scale-105"
            }`}
          >
            <span
              className={`transition-all duration-500 ${
                opened
                  ? "rotate-6 scale-110"
                  : "animate-bounce"
              }`}
            >
              {opened
                ? data?.openedIcon || "💐"
                : data?.closedIcon || "🎁"}
            </span>

            {!opened && (
              <span className="absolute -right-3 -top-3 text-3xl">
                ✨
              </span>
            )}
          </div>
        </button>

        {/* Status */}
        <div className="mt-8">
          {opened ? (
            <>
              <p className="text-xl font-black text-pink-300">
                Surprise! 💐
              </p>

              <p className="mt-2 text-sm text-white/50">
                Your special gift has been revealed.
              </p>
            </>
          ) : (
            <>
              <p className="font-bold text-white/80">
                Tap the gift to open it
              </p>

              <p className="mt-2 text-xs text-white/40">
                Something special is waiting for you
              </p>
            </>
          )}
        </div>

        {/* Continue hint */}
        {opened && (
          <div className="mt-10 animate-bounce text-xl text-white/40">
            ↓
          </div>
        )}
      </div>
    </section>
  );
}

export default GiftSection;