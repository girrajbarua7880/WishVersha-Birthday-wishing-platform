// import Button from "../common/Button";

// function TemplateCard({ title, category, image }) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

//       {/* Image */}
//       <div className="flex h-56 items-center justify-center bg-gray-100">
//         {image ? (
//           <img
//             src={image}
//             alt={title}
//             className="h-full w-full object-cover"
//           />
//         ) : (
//           <span className="text-5xl">🖼️</span>
//         )}
//       </div>

//       {/* Content */}
//       <div className="p-5">

//         <span className="rounded-full bg-violet-100 px-3 py-1 text-sm text-violet-700">
//           {category}
//         </span>

//         <h3 className="mt-4 text-xl font-bold text-gray-900">
//           {title}
//         </h3>

//         <div className="mt-6">
//           <Button variant="outline">
//             Preview
//           </Button>
//         </div>

//       </div>
//     </div>
//   );
// }

// export default TemplateCard;



// function TemplateCard({ template, onSelect }) {
//   return (
//     <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-950/20">

//       {/* Template Preview */}
//       <div
//         className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${template.gradient}`}
//       >
//         <span className="text-7xl transition duration-300 group-hover:scale-110">
//           {template.icon}
//         </span>

//         {/* Preview Label */}
//         <span className="absolute bottom-3 left-3 rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
//           Preview
//         </span>
//       </div>

//       {/* Template Info */}
//       <div className="p-5">

//         <div className="flex items-start justify-between gap-3">
//           <h2 className="text-lg font-black">
//             {template.name}
//           </h2>

//           <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-300">
//             {template.style}
//           </span>
//         </div>

//         <p className="mt-3 text-sm leading-6 text-white/45">
//           {template.description}
//         </p>

//         {/* Buttons */}
//         <div className="mt-6 flex gap-2">

//           <button
//             type="button"
//             onClick={() => onSelect(template)}
//             className="flex-1 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
//           >
//             Use Template
//           </button>

//         </div>

//       </div>
//     </article>
//   );
// }

// export default TemplateCard;

function TemplateCard({ template, onSelect }) {
  if (!template) {
    return null;
  }

  return (
    <article className="group overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] transition duration-300 hover:-translate-y-2 hover:border-violet-400/30 hover:bg-white/[0.07] hover:shadow-2xl hover:shadow-violet-950/20">

      {/* Template Preview */}
      <div
        className={`relative flex aspect-[4/3] items-center justify-center bg-gradient-to-br ${
          template.gradient || "from-violet-500 to-purple-700"
        }`}
      >
        <span className="text-7xl transition duration-300 group-hover:scale-110">
          {template.icon || "✨"}
        </span>

        {/* Preview Label */}
        <span className="absolute bottom-3 left-3 rounded-full bg-black/20 px-3 py-1 text-[10px] font-bold uppercase tracking-wider backdrop-blur-md">
          Preview
        </span>
      </div>

      {/* Template Info */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <h2 className="text-lg font-black">
            {template.name || "Untitled Template"}
          </h2>

          <span className="rounded-full bg-violet-500/10 px-2 py-1 text-[10px] font-bold text-violet-300">
            {template.style || "Classic"}
          </span>
        </div>

        <p className="mt-3 text-sm leading-6 text-white/45">
          {template.description || "Create a beautiful personalized wish."}
        </p>

        {/* Buttons */}
        <div className="mt-6 flex gap-2">
          <button
            type="button"
            onClick={() => onSelect?.(template)}
            className="flex-1 rounded-xl bg-white px-4 py-3 text-sm font-black text-slate-950 transition hover:scale-[1.02]"
          >
            Use Template
          </button>
        </div>
      </div>
    </article>
  );
}

export default TemplateCard;