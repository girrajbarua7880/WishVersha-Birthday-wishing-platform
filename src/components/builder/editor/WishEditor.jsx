// function WishEditor({ wish, updateWish }) {
//   return (
//     <aside className="border-r border-gray-200 bg-white">

//       {/* ================= HEADER ================= */}

//       <div className="border-b border-gray-200 p-5">
//         <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
//           Customize
//         </p>

//         <h2 className="mt-2 text-xl font-black text-gray-900">
//           Make It Personal
//         </h2>

//         <p className="mt-2 text-sm leading-6 text-gray-500">
//           Add your details and see the changes instantly
//           in the live preview.
//         </p>
//       </div>

//       {/* ================= FIELDS ================= */}

//       <div className="space-y-6 p-5">

//         {/* Recipient */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Recipient Name
//           </label>

//           <input
//             type="text"
//             value={wish.recipient}
//             onChange={(e) =>
//               updateWish("recipient", e.target.value)
//             }
//             placeholder="e.g. Rahul"
//             className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//         {/* Sender */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Your Name
//           </label>

//           <input
//             type="text"
//             value={wish.sender}
//             onChange={(e) =>
//               updateWish("sender", e.target.value)
//             }
//             placeholder="e.g. Girraj"
//             className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//         {/* Main Message */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Main Message
//           </label>

//           <textarea
//             rows={5}
//             value={wish.message}
//             onChange={(e) =>
//               updateWish("message", e.target.value)
//             }
//             placeholder="Write your birthday message..."
//             className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//         {/* Personal Letter */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Personal Letter
//           </label>

//           <textarea
//             rows={6}
//             value={wish.letter}
//             onChange={(e) =>
//               updateWish("letter", e.target.value)
//             }
//             placeholder="Write a personal letter..."
//             className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//         {/* Secret Message */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Secret Message
//           </label>

//           <textarea
//             rows={4}
//             value={wish.secretMessage}
//             onChange={(e) =>
//               updateWish(
//                 "secretMessage",
//                 e.target.value
//               )
//             }
//             placeholder="Write something special..."
//             className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//         {/* Final Wish */}

//         <div>
//           <label className="mb-2 block text-sm font-bold text-gray-800">
//             Final Wish
//           </label>

//           <textarea
//             rows={4}
//             value={wish.finalMessage}
//             onChange={(e) =>
//               updateWish(
//                 "finalMessage",
//                 e.target.value
//               )
//             }
//             placeholder="Write the final birthday wish..."
//             className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
//           />
//         </div>

//       </div>
//     </aside>
//   );
// }

// export default WishEditor;



// import { useState } from "react";

// import EditorToolbar from "./EditorToolbar";
// import TextTool from "./TextTool";
// import PhotoTool from "./PhotoTool";
// import ThemeTool from "./ThemeTool";
// import BackgroundTool from "./BackgroundTool";
// import SectionTool from "./SectionTool";

// function WishEditor({ wish, updateWish }) {
//   const [activeTool, setActiveTool] = useState("text");

//   const renderTool = () => {
//     switch (activeTool) {
//       case "text":
//         return (
//           <TextTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );

//       case "photo":
//         return (
//           <PhotoTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );

//       case "theme":
//         return (
//           <ThemeTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );

//       case "background":
//         return (
//           <BackgroundTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );

//       case "section":
//         return (
//           <SectionTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );

//       default:
//         return (
//           <TextTool
//             wish={wish}
//             updateWish={updateWish}
//           />
//         );
//     }
//   };

//   return (
//     <aside className="border-r border-gray-200 bg-white">

//       {/* Header */}

//       <div className="border-b border-gray-200 p-5">
//         <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
//           Customize
//         </p>

//         <h2 className="mt-2 text-xl font-black text-gray-900">
//           Make It Personal
//         </h2>

//         <p className="mt-2 text-sm leading-6 text-gray-500">
//           Customize your wish and see the changes
//           instantly in the preview.
//         </p>
//       </div>

//       {/* Toolbar */}

//       <EditorToolbar
//         activeTool={activeTool}
//         onToolChange={setActiveTool}
//       />

//       {/* Active Tool */}

//       <div className="p-5">
//         {renderTool()}
//       </div>

//     </aside>
//   );
// }

// export default WishEditor;

import { useState } from "react";

import TextTool from "./TextTool";
import PhotoTool from "./PhotoTool";
import ThemeTool from "./ThemeTool";
import BackgroundTool from "./BackgroundTool";
import SectionTool from "./SectionTool";
import CountdownTool from "./CountdownTool";

function WishEditor({ wish, updateWish }) {
  const [activeTool, setActiveTool] = useState("text");

  const tools = [
    {
      id: "text",
      label: "Text",
      icon: "✏️",
    },
    {
      id: "photos",
      label: "Photos",
      icon: "📸",
    },
    {
      id: "theme",
      label: "Theme",
      icon: "🎨",
    },
    {
      id: "background",
      label: "Background",
      icon: "🖼️",
    },
    {
      id: "sections",
      label: "Sections",
      icon: "📑",
    },
    {
      id: "countdown",
      label: "Countdown",
      icon: "⏳",
    },
  ];

  const renderTool = () => {
    switch (activeTool) {
      case "text":
        return (
          <TextTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      case "photos":
        return (
          <PhotoTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      case "theme":
        return (
          <ThemeTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      case "background":
        return (
          <BackgroundTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      case "sections":
        return (
          <SectionTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      case "countdown":
        return (
          <CountdownTool
            wish={wish}
            updateWish={updateWish}
          />
        );

      default:
        return (
          <TextTool
            wish={wish}
            updateWish={updateWish}
          />
        );
    }
  };

  return (
    <div className="flex flex-col">

      {/* =====================================================
          EDITOR HEADER
      ===================================================== */}

      <div className="border-b border-gray-200 p-5">

        <p className="text-xs font-bold uppercase tracking-[0.2em] text-violet-600">
          Customize
        </p>

        <h2 className="mt-2 text-xl font-black text-gray-900">
          Make It Personal
        </h2>

        <p className="mt-2 text-sm leading-6 text-gray-500">
          Customize your wish and see the changes
          instantly in the preview.
        </p>

      </div>

      {/* =====================================================
          TOOLBAR
      ===================================================== */}

      <div className="border-b border-gray-200 bg-gray-50 p-3">

        <div className="grid grid-cols-3 gap-1 sm:grid-cols-6">

          {tools.map((tool) => {
            const active =
              activeTool === tool.id;

            return (
              <button
                key={tool.id}
                type="button"
                onClick={() =>
                  setActiveTool(tool.id)
                }
                aria-label={tool.label}
                aria-pressed={active}
                className={`flex min-w-0 flex-col items-center justify-center rounded-xl px-1 py-2.5 transition ${
                  active
                    ? "bg-white text-violet-700 shadow-sm"
                    : "text-gray-400 hover:bg-white hover:text-gray-700"
                }`}
              >
                <span className="text-lg">
                  {tool.icon}
                </span>

                <span className="mt-1 truncate text-[9px] font-black sm:text-[10px]">
                  {tool.label}
                </span>
              </button>
            );
          })}

        </div>

      </div>

      {/* =====================================================
          ACTIVE TOOL
      ===================================================== */}

      <div className="p-5">
        {renderTool()}
      </div>

    </div>
  );
}

export default WishEditor;