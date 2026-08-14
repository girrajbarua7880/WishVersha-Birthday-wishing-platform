// function FinalWish({ data, wish }) {
//   const recipient =
//     data?.recipient ||
//     wish?.recipient ||
//     "Someone Special";

//   const message =
//     data?.message ||
//     wish?.finalMessage ||
//     "May your life always be filled with happiness, love and beautiful memories. 💜";

//   const sender =
//     data?.sender ||
//     wish?.sender ||
//     "Someone Special";

//   return (
//     <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 px-6 py-20 text-white">
//       {/* Background */}
//       <div className="absolute inset-0">
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
//       </div>

//       {/* Decorations */}
//       <div className="absolute left-[8%] top-[15%] text-4xl opacity-50">
//         ✨
//       </div>

//       <div className="absolute right-[10%] top-[20%] text-4xl opacity-50">
//         🎈
//       </div>

//       <div className="absolute bottom-[18%] left-[12%] text-4xl opacity-40">
//         💜
//       </div>

//       <div className="absolute bottom-[15%] right-[12%] text-4xl opacity-40">
//         🎉
//       </div>

//       {/* Main Card */}
//       <div className="relative z-10 w-full max-w-3xl text-center">

//         <div className="text-7xl sm:text-8xl">
//           🎂
//         </div>

//         <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
//           A Final Wish
//         </p>

//         <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
//           {data?.title || "Happy Birthday! 🎉"}
//         </h1>

//         {/* Wish Card */}
//         <div className="mt-10 rounded-[36px] border border-white/15 bg-white/[0.10] p-8 shadow-2xl backdrop-blur-xl sm:p-12">

//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-200">
//             For
//           </p>

//           <h2 className="mt-3 text-3xl font-black sm:text-4xl">
//             {recipient}
//           </h2>

//           <div className="mx-auto my-8 h-px max-w-xs bg-white/10" />

//           <p className="whitespace-pre-line text-base leading-8 text-white/80 sm:text-lg">
//             {message}
//           </p>

//           <div className="mx-auto my-8 h-px max-w-xs bg-white/10" />

//           <p className="text-sm text-white/50">
//             With love,
//           </p>

//           <p className="mt-2 text-lg font-black text-pink-200">
//             {sender} 💜
//           </p>
//         </div>

//         {/* Footer */}
//         <div className="mt-10">
//           <p className="text-sm text-white/50">
//             Made with love on WishVersa ✨
//           </p>

//           <div className="mt-5 flex justify-center gap-3 text-2xl">
//             <span>🎈</span>
//             <span>🎂</span>
//             <span>🎁</span>
//             <span>💜</span>
//             <span>🎉</span>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }

// export default FinalWish;


// function FinalWish({ data, wish }) {
//   const recipient =
//     wish?.recipient ||
//     data?.recipient ||
//     "Someone Special";

//   const message =
//     wish?.finalMessage ||
//     data?.message ||
//     "May your life always be filled with happiness, love and beautiful memories. 💜";

//   const sender =
//     wish?.sender ||
//     data?.sender ||
//     "Someone Special";

//   return (
//     <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-br from-pink-600 via-purple-700 to-indigo-900 px-6 py-20 text-white">

//       {/* Background Glow */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
//       </div>

//       {/* Decorations */}
//       <div className="absolute left-[8%] top-[15%] text-4xl opacity-50">
//         ✨
//       </div>

//       <div className="absolute right-[10%] top-[20%] text-4xl opacity-50">
//         🎈
//       </div>

//       <div className="absolute bottom-[18%] left-[12%] text-4xl opacity-40">
//         💜
//       </div>

//       <div className="absolute bottom-[15%] right-[12%] text-4xl opacity-40">
//         🎉
//       </div>

//       {/* Content */}
//       <div className="relative z-10 w-full max-w-3xl text-center">

//         {/* Cake */}
//         <div className="text-7xl drop-shadow-2xl sm:text-8xl">
//           🎂
//         </div>

//         {/* Label */}
//         <p className="mt-8 text-xs font-bold uppercase tracking-[0.35em] text-white/60">
//           A Final Wish
//         </p>

//         {/* Title */}
//         <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-6xl lg:text-7xl">
//           {data?.title || "Happy Birthday! 🎉"}
//         </h1>

//         {/* Main Card */}
//         <div className="mt-10 rounded-[36px] border border-white/15 bg-white/[0.10] p-8 shadow-2xl backdrop-blur-xl sm:p-12">

//           {/* Recipient */}
//           <p className="text-sm font-bold uppercase tracking-[0.2em] text-pink-200">
//             For
//           </p>

//           <h2 className="mt-3 text-3xl font-black sm:text-4xl">
//             {recipient}
//           </h2>

//           <div className="mx-auto my-8 h-px max-w-xs bg-white/10" />

//           {/* Message */}
//           <p className="whitespace-pre-line text-base leading-8 text-white/80 sm:text-lg">
//             {message}
//           </p>

//           <div className="mx-auto my-8 h-px max-w-xs bg-white/10" />

//           {/* Sender */}
//           <p className="text-sm text-white/50">
//             With love,
//           </p>

//           <p className="mt-2 text-lg font-black text-pink-200">
//             {sender} 💜
//           </p>

//         </div>

//         {/* Footer */}
//         <div className="mt-10">

//           <p className="text-sm text-white/50">
//             Made with love on WishVersa ✨
//           </p>

//           <div className="mt-5 flex justify-center gap-3 text-2xl">
//             <span>🎈</span>
//             <span>🎂</span>
//             <span>🎁</span>
//             <span>💜</span>
//             <span>🎉</span>
//           </div>

//         </div>

//       </div>
//     </section>
//   );
// }

// export default FinalWish;



function FinalWish({ wish }) {
  return (
    <section className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-pink-900 px-6 py-20 text-white">

      {/* Background decorations */}

      <div className="absolute left-10 top-10 text-4xl opacity-30">
        ✨
      </div>

      <div className="absolute right-10 top-20 text-5xl opacity-30">
        💜
      </div>

      <div className="absolute bottom-20 left-16 text-4xl opacity-30">
        🎈
      </div>

      <div className="absolute bottom-10 right-16 text-5xl opacity-30">
        ✨
      </div>

      {/* Main */}

      <div className="relative z-10 w-full max-w-3xl text-center">

        <div className="text-7xl">
          🎉
        </div>

        <p className="mt-8 text-xs font-bold uppercase tracking-[0.4em] text-pink-200/70">
          One Last Thing
        </p>

        <h1 className="mt-5 text-4xl font-black leading-tight sm:text-6xl">
          {wish?.finalMessage
            ? "A Final Message"
            : "Happy Birthday! 🎂"}
        </h1>

        <div className="mx-auto mt-10 rounded-[32px] border border-white/10 bg-white/10 p-8 shadow-2xl backdrop-blur-xl sm:p-12">

          <p className="whitespace-pre-line text-lg leading-9 text-white/85 sm:text-xl">
            {wish?.finalMessage ||
              wish?.message ||
              "May your life always be filled with happiness, love and beautiful memories. 💜"}
          </p>

          <div className="mx-auto my-8 h-px max-w-xs bg-white/10" />

          <p className="text-sm text-white/50">
            With lots of love,
          </p>

          <p className="mt-2 text-xl font-black text-pink-200">
            {wish?.sender ||
              "Someone Special"}{" "}
            💜
          </p>

        </div>

        <p className="mt-8 text-xs text-white/30">
          Made with love using WishVersa
        </p>

      </div>

    </section>
  );
}

export default FinalWish;