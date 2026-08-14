import { useState } from "react";

function ReasonsSection({ data }) {
  const reasons = Array.isArray(data?.reasons) ? data.reasons : [];

  const [selectedReason, setSelectedReason] = useState(null);

  const defaultReasons = [
    "You make ordinary moments special.",
    "You always know how to make people smile.",
    "You create beautiful memories.",
  ];

  const displayReasons =
    reasons.length > 0 ? reasons : defaultReasons;

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden bg-gradient-to-b from-purple-950 via-slate-950 to-indigo-950 px-6 py-20 text-white">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-3xl" />

      <div className="absolute left-10 top-20 text-3xl opacity-40">
        ✨
      </div>

      <div className="absolute right-10 top-32 text-3xl opacity-40">
        💜
      </div>

      <div className="relative z-10 mx-auto w-full max-w-5xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl">💜</div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            A Few Things
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            {data?.title || "Why You're Special 💜"}
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
            Sometimes the little things are what make someone truly special.
          </p>
        </div>

        {/* Reasons */}
        <div className="mx-auto mt-12 grid max-w-4xl gap-5 sm:grid-cols-3">
          {displayReasons.map((reason, index) => {
            const isSelected = selectedReason === index;

            return (
              <button
                key={index}
                type="button"
                onClick={() =>
                  setSelectedReason(
                    isSelected ? null : index
                  )
                }
                className={`group relative min-h-[190px] rounded-[28px] border p-7 text-left transition-all duration-300 focus:outline-none ${
                  isSelected
                    ? "border-violet-400/50 bg-violet-500/15 shadow-2xl shadow-violet-950/40"
                    : "border-white/10 bg-white/[0.05] hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.08]"
                }`}
              >
                {/* Number */}
                <div
                  className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black transition ${
                    isSelected
                      ? "bg-violet-500 text-white"
                      : "bg-white/10 text-white/50 group-hover:bg-violet-500/20 group-hover:text-violet-300"
                  }`}
                >
                  {index + 1}
                </div>

                {/* Heart */}
                <div
                  className={`absolute right-6 top-6 text-2xl transition ${
                    isSelected
                      ? "scale-125"
                      : "group-hover:scale-110"
                  }`}
                >
                  {isSelected ? "💜" : "♡"}
                </div>

                {/* Text */}
                <p className="mt-8 text-base font-bold leading-7 text-white/80">
                  {reason}
                </p>

                {/* Bottom */}
                <p className="absolute bottom-5 text-[10px] font-bold uppercase tracking-[0.2em] text-white/25">
                  {isSelected ? "Special ✨" : "Tap to reveal"}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected message */}
        {selectedReason !== null && (
          <div className="mx-auto mt-10 max-w-xl text-center">
            <p className="text-sm font-bold text-violet-300">
              And that's just one of the many reasons. 💜
            </p>
          </div>
        )}

      </div>
    </section>
  );
}

export default ReasonsSection;