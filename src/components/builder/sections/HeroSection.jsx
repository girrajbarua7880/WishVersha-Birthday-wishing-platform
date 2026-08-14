function HeroSection({ data, wish }) {
  const recipient = wish?.recipient || data?.title || "Someone Special";
  const message =
    wish?.message ||
    "Today is all about celebrating you and the beautiful person you are.";

  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-br from-pink-500 via-purple-600 to-indigo-700 px-6 py-20 text-center text-white">
      
      {/* Background Decorations */}
      <div className="absolute -left-24 -top-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
      <div className="absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-pink-300/20 blur-3xl" />

      {/* Floating Decorations */}
      <div className="absolute left-[10%] top-[20%] animate-bounce text-3xl">
        ✨
      </div>

      <div className="absolute right-[12%] top-[25%] text-3xl opacity-80">
        🎈
      </div>

      <div className="absolute bottom-[20%] left-[15%] text-2xl opacity-70">
        💜
      </div>

      <div className="absolute bottom-[15%] right-[15%] animate-pulse text-3xl">
        🎉
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-3xl">

        <div className="mb-8 text-7xl drop-shadow-2xl sm:text-8xl">
          {data?.icon || "🎂"}
        </div>

        <p className="text-sm font-bold uppercase tracking-[0.3em] text-white/70 sm:text-base">
          {data?.eyebrow || "A little surprise for"}
        </p>

        <h1 className="mt-5 text-5xl font-black tracking-tight drop-shadow-lg sm:text-7xl">
          {recipient}
        </h1>

        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/80 sm:text-xl">
          {message}
        </p>

        <div className="mt-10 flex justify-center gap-3 text-2xl">
          <span>🎈</span>
          <span>🎂</span>
          <span>🎁</span>
        </div>

        <p className="mt-10 text-xs font-semibold uppercase tracking-[0.25em] text-white/50">
          Scroll to discover your surprise
        </p>

        <div className="mt-5 animate-bounce text-2xl">
          ↓
        </div>

      </div>
    </section>
  );
}

export default HeroSection;