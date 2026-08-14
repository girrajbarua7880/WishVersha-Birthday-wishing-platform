import { useState } from "react";

function SecretSection({ data }) {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 px-6 py-20 text-white">
      {/* Background */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />

      <div className="absolute left-[12%] top-[20%] text-2xl opacity-30">
        ✨
      </div>

      <div className="absolute right-[12%] bottom-[20%] text-2xl opacity-30">
        💜
      </div>

      <div className="relative z-10 w-full max-w-xl text-center">

        {/* Header */}
        <div className="text-6xl">
          {unlocked ? "💌" : "🔐"}
        </div>

        <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
          One Final Secret
        </p>

        <h2 className="mt-3 text-4xl font-black sm:text-5xl">
          {data?.title || "One Final Secret 🔐"}
        </h2>

        {!unlocked ? (
          <>
            <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/50">
              There's one more message waiting for you.
              Unlock it when you're ready.
            </p>

            {/* Lock */}
            <button
              type="button"
              onClick={() => setUnlocked(true)}
              className="group mx-auto mt-12 flex h-48 w-48 items-center justify-center rounded-full border border-fuchsia-400/20 bg-white/[0.05] text-7xl shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl transition-all duration-500 hover:scale-110 hover:border-fuchsia-400/50 hover:bg-fuchsia-500/10 focus:outline-none"
              aria-label="Unlock secret message"
            >
              <span className="transition-transform duration-500 group-hover:rotate-6">
                🔐
              </span>
            </button>

            <p className="mt-8 text-sm font-bold text-white/70">
              Tap to unlock
            </p>

            <p className="mt-2 text-xs text-white/30">
              Something special is waiting inside
            </p>
          </>
        ) : (
          <>
            {/* Secret Revealed */}
            <div className="mt-10 rounded-[32px] border border-fuchsia-400/20 bg-white/[0.07] p-8 text-left shadow-2xl shadow-fuchsia-950/30 backdrop-blur-xl sm:p-10">
              <div className="flex items-center gap-3">
                <span className="text-3xl">💌</span>

                <span className="text-xs font-bold uppercase tracking-[0.2em] text-fuchsia-300">
                  Secret Unlocked
                </span>
              </div>

              <p className="mt-7 text-lg leading-8 text-white/80">
                {data?.message ||
                  "You are more special than words can ever explain. 💜"}
              </p>

              <div className="mt-8 border-t border-white/10 pt-5">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-white/30">
                  Just for you
                </p>

                <p className="mt-2 text-sm text-fuchsia-300">
                  ✨ Keep this little secret close to your heart.
                </p>
              </div>
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

export default SecretSection;