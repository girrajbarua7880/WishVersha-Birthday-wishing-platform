import { useState } from "react";

function LetterSection({ data }) {
  const [opened, setOpened] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-rose-950 via-slate-950 to-purple-950 px-6 py-20 text-white">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-2xl text-center">

        {/* Heading */}
        <div className="text-5xl sm:text-6xl">
          💌
        </div>

        <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-pink-300">
          A Personal Message
        </p>

        <h2 className="mt-3 text-4xl font-black sm:text-5xl">
          {data?.title || "A Letter For You 💌"}
        </h2>

        {/* Envelope */}
        {!opened ? (
          <button
            type="button"
            onClick={() => setOpened(true)}
            className="group mx-auto mt-12 block w-full max-w-md rounded-[32px] border border-white/10 bg-white/[0.06] p-8 shadow-2xl backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/30 hover:bg-white/[0.09] focus:outline-none"
          >
            <div className="text-8xl transition-transform duration-300 group-hover:scale-110">
              ✉️
            </div>

            <p className="mt-6 text-lg font-black">
              Open Your Letter
            </p>

            <p className="mt-2 text-sm text-white/40">
              Tap to reveal a message written just for you
            </p>
          </button>
        ) : (
          /* Letter */
          <div className="mt-12 rounded-[32px] border border-white/10 bg-white/[0.08] p-7 text-left shadow-2xl backdrop-blur-xl sm:p-10">
            <div className="mb-8 flex items-center justify-between">
              <span className="text-3xl">💌</span>

              <span className="rounded-full bg-pink-500/10 px-3 py-1 text-xs font-bold text-pink-300">
                From {data?.sender || "Someone Special"}
              </span>
            </div>

            <div className="space-y-5">
              {(data?.message || "Your special message will appear here.")
                .split("\n")
                .map((paragraph, index) => (
                  <p
                    key={index}
                    className="text-base leading-8 text-white/75"
                  >
                    {paragraph}
                  </p>
                ))}
            </div>

            <div className="mt-10 border-t border-white/10 pt-6">
              <p className="text-sm font-bold text-pink-300">
                With lots of love 💜
              </p>

              <p className="mt-1 text-sm text-white/40">
                {data?.sender || "Someone Special"}
              </p>
            </div>
          </div>
        )}

        {/* Continue */}
        {opened && (
          <div className="mt-10 animate-bounce text-xl text-white/30">
            ↓
          </div>
        )}
      </div>
    </section>
  );
}

export default LetterSection;