// import HeroSection from "../sections/HeroSection";
// import GiftSection from "../sections/GiftSection";
// import LetterSection from "../sections/LetterSection";
// import MemoriesSection from "../sections/MemoriesSection";
// import ReasonsSection from "../sections/ReasonsSection";
// import SecretSection from "../sections/SecretSection";
// import CelebrationSection from "../sections/CelebrationSection";
// import FinalWish from "../sections/FinalWish";

// const sectionComponents = {
//   HeroSection,
//   GiftSection,
//   LetterSection,
//   MemoriesSection,
//   ReasonsSection,
//   SecretSection,
//   CelebrationSection,
//   FinalWish,
// };

// function replaceVariables(value, wish) {
//   if (typeof value !== "string") {
//     return value;
//   }

//   return value.replace(
//     /\{\{(\w+)\}\}/g,
//     (_, key) => wish?.[key] ?? ""
//   );
// }

// function resolveData(data, wish) {
//   if (!data || typeof data !== "object") {
//     return data;
//   }

//   return Object.fromEntries(
//     Object.entries(data).map(([key, value]) => [
//       key,
//       Array.isArray(value)
//         ? value.map((item) =>
//             typeof item === "string"
//               ? replaceVariables(item, wish)
//               : item
//           )
//         : replaceVariables(value, wish),
//     ])
//   );
// }

// function TemplateRenderer({ config, wish }) {
//   if (!config) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center bg-slate-950 text-white">
//         <p>Template configuration not found.</p>
//       </div>
//     );
//   }

//   const sections = config.sections || [];

//   return (
//     <div
//       className="min-h-full overflow-hidden"
//       style={{
//         backgroundColor: config.theme?.background || "#0f172a",
//         color: config.theme?.text || "#ffffff",
//       }}
//     >
//       {sections.map((section) => {
//         const SectionComponent =
//           sectionComponents[section.component];

//         if (!SectionComponent) {
//           console.warn(
//             `Unknown template component: ${section.component}`
//           );

//           return null;
//         }

//         const data = resolveData(section.data, wish);

//         return (
//           <SectionComponent
//             key={section.id}
//             data={data}
//             wish={wish}
//             section={section}
//             animation={section.animation}
//             interaction={section.interaction}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default TemplateRenderer;



// import SectionRenderer from "./SectionRenderer";

// function resolveValue(value, wish) {
//   if (typeof value !== "string") {
//     return value;
//   }

//   // Exact variable:
//   // "{{recipient}}" → wish.recipient
//   const exactMatch = value.match(/^{{(.+)}}$/);

//   if (exactMatch) {
//     const key = exactMatch[1].trim();
//     return wish?.[key] ?? "";
//   }

//   // Text containing variables
//   return value.replace(
//     /{{(.*?)}}/g,
//     (_, key) => wish?.[key.trim()] ?? ""
//   );
// }

// function resolveData(data, wish) {
//   if (data === null || data === undefined) {
//     return data;
//   }

//   if (Array.isArray(data)) {
//     return data.map((item) => resolveData(item, wish));
//   }

//   if (typeof data === "object") {
//     return Object.fromEntries(
//       Object.entries(data).map(([key, value]) => [
//         key,
//         resolveData(value, wish),
//       ])
//     );
//   }

//   return resolveValue(data, wish);
// }

// function TemplateRenderer({ config, wish }) {
//   if (!config) {
//     return null;
//   }

//   const sections = config.sections || [];

//   return (
//     <div
//       className="w-full overflow-hidden"
//       style={{
//         backgroundColor:
//           config.theme?.background || "#0f172a",

//         color:
//           config.theme?.text || "#ffffff",
//       }}
//     >
//       {sections.map((section) => {
//         const resolvedSection = {
//           ...section,

//           data: resolveData(
//             section.data,
//             wish
//           ),
//         };

//         return (
//           <SectionRenderer
//             key={section.id}
//             section={resolvedSection}
//             wish={wish}
//           />
//         );
//       })}
//     </div>
//   );
// }

// export default TemplateRenderer;



// import SectionRenderer from "./SectionRenderer";

// function resolveValue(value, wish) {
//   if (typeof value !== "string") {
//     return value;
//   }

//   const exactMatch = value.match(/^{{(.+)}}$/);

//   if (exactMatch) {
//     const key = exactMatch[1].trim();

//     return wish?.[key] ?? "";
//   }

//   return value.replace(
//     /{{(.*?)}}/g,
//     (_, key) => wish?.[key.trim()] ?? ""
//   );
// }

// function resolveData(data, wish) {
//   if (data === null || data === undefined) {
//     return data;
//   }

//   if (Array.isArray(data)) {
//     return data.map((item) =>
//       resolveData(item, wish)
//     );
//   }

//   if (typeof data === "object") {
//     return Object.fromEntries(
//       Object.entries(data).map(([key, value]) => [
//         key,
//         resolveData(value, wish),
//       ])
//     );
//   }

//   return resolveValue(data, wish);
// }

// function TemplateRenderer({ config, wish }) {
//   if (!config) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center bg-slate-950 text-white">
//         <p>Template configuration not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div
//       className="w-full overflow-hidden"
//       style={{
//         backgroundColor:
//           config.theme?.background || "#0f172a",
//         color:
//           config.theme?.text || "#ffffff",
//       }}
//     >
//       {(config.sections || []).map((section) => (
//         <SectionRenderer
//           key={section.id}
//           section={{
//             ...section,
//             data: resolveData(
//               section.data,
//               wish
//             ),
//           }}
//           wish={wish}
//         />
//       ))}
//     </div>
//   );
// }

// export default TemplateRenderer;


// import SectionRenderer from "./SectionRenderer";

// function replacePlaceholders(value, wish) {
//   if (typeof value !== "string") {
//     return value;
//   }

//   return value.replace(
//     /\{\{([^}]+)\}\}/g,
//     (_, key) => {
//       const value = wish?.[key.trim()];

//       if (Array.isArray(value)) {
//         return value;
//       }

//       return value ?? "";
//     }
//   );
// }

// function resolveData(data, wish) {
//   if (!data || typeof data !== "object") {
//     return data;
//   }

//   const resolved = {};

//   Object.entries(data).forEach(
//     ([key, value]) => {
//       if (typeof value === "string") {
//         resolved[key] = replacePlaceholders(
//           value,
//           wish
//         );
//       } else if (Array.isArray(value)) {
//         resolved[key] = value.map((item) => {
//           if (typeof item === "string") {
//             return replacePlaceholders(
//               item,
//               wish
//             );
//           }

//           return item;
//         });
//       } else if (
//         value &&
//         typeof value === "object"
//       ) {
//         resolved[key] = resolveData(
//           value,
//           wish
//         );
//       } else {
//         resolved[key] = value;
//       }
//     }
//   );

//   return resolved;
// }

// function TemplateRenderer({
//   config,
//   wish,
// }) {
//   if (!config) {
//     return (
//       <div className="flex min-h-[500px] items-center justify-center bg-slate-950 text-white">
//         <p className="text-sm text-white/50">
//           Template configuration not found.
//         </p>
//       </div>
//     );
//   }

//   const theme = {
//     ...config.theme,
//     ...(wish?.theme || {}),
//   };

//   const background =
//     wish?.background || null;

//   const sections = Array.isArray(
//     config.sections
//   )
//     ? config.sections
//     : [];

//   const enabledSections =
//     Array.isArray(wish?.sections)
//       ? wish.sections
//       : sections.map(
//           (section) => section.id
//         );

//   const visibleSections =
//     sections.filter((section) =>
//       enabledSections.includes(section.id)
//     );

//   const getBackgroundStyle = () => {
//     if (!background) {
//       return {
//         backgroundColor:
//           theme.background ||
//           "#0f172a",
//       };
//     }

//     if (background.type === "solid") {
//       return {
//         backgroundColor:
//           background.value,
//       };
//     }

//     return {
//       backgroundColor:
//         theme.background ||
//         "#0f172a",
//     };
//   };

//   return (
//     <div
//       className="min-h-screen w-full overflow-hidden"
//       style={{
//         ...getBackgroundStyle(),
//         color:
//           theme.text || "#ffffff",
//         "--wish-accent":
//           theme.accent || "#ec4899",
//         "--wish-secondary":
//           theme.secondary || "#8b5cf6",
//       }}
//     >

//       {/* =========================
//           SECTIONS
//       ========================= */}

//       {visibleSections.map(
//         (section) => {
//           const resolvedData =
//             resolveData(
//               section.data,
//               wish
//             );

//           return (
//             <SectionRenderer
//               key={section.id}
//               section={section}
//               data={resolvedData}
//               wish={wish}
//               theme={theme}
//             />
//           );
//         }
//       )}

//     </div>
//   );
// }

// export default TemplateRenderer;


import SectionRenderer from "./SectionRenderer";

function resolveValue(value, wish) {
  if (typeof value !== "string") {
    return value;
  }

  // Exact variable:
  // "{{recipient}}" -> wish.recipient
  const exactMatch = value.match(/^{{(.+)}}$/);

  if (exactMatch) {
    const key = exactMatch[1].trim();

    return wish?.[key] ?? "";
  }

  // Text containing variables
  return value.replace(
    /{{(.*?)}}/g,
    (_, key) => wish?.[key.trim()] ?? ""
  );
}

function resolveData(data, wish) {
  if (data === null || data === undefined) {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map((item) =>
      resolveData(item, wish)
    );
  }

  if (typeof data === "object") {
    return Object.fromEntries(
      Object.entries(data).map(
        ([key, value]) => [
          key,
          resolveData(value, wish),
        ]
      )
    );
  }

  return resolveValue(data, wish);
}

function getBackgroundStyle(
  config,
  wish
) {
  const background =
    wish?.background;

  // Custom background from editor
  if (background?.type === "solid") {
    return {
      backgroundColor:
        background.value,
    };
  }

  // Template default
  return {
    backgroundColor:
      wish?.theme?.background ||
      config?.theme?.background ||
      "#0f172a",
  };
}

function TemplateRenderer({
  config,
  wish,
}) {
  if (!config) {
    return (
      <div className="flex min-h-[500px] items-center justify-center bg-slate-950 text-white">
        <p className="text-sm text-white/50">
          Template configuration not found.
        </p>
      </div>
    );
  }

  const allSections =
    config.sections || [];

  /*
   * If user has selected sections,
   * only those sections will render.
   *
   * Otherwise all template sections render.
   */
  const enabledSections =
    Array.isArray(wish?.sections)
      ? wish.sections
      : allSections.map(
          (section) => section.id
        );

  const sections =
    allSections.filter((section) =>
      enabledSections.includes(section.id)
    );

  /*
   * Template theme + user's custom theme
   */
  const theme = {
    ...(config.theme || {}),
    ...(wish?.theme || {}),
  };

  return (
    <div
      className="w-full overflow-hidden"
      style={{
        ...getBackgroundStyle(
          config,
          wish
        ),

        color:
          theme.text || "#ffffff",

        "--wish-accent":
          theme.accent || "#ec4899",

        "--wish-secondary":
          theme.secondary ||
          "#8b5cf6",
      }}
    >
      {sections.map((section) => {
        const resolvedSection = {
          ...section,

          data: resolveData(
            section.data,
            wish
          ),
        };

        return (
          <SectionRenderer
            key={section.id}
            section={resolvedSection}
            wish={wish}
            theme={theme}
          />
        );
      })}
    </div>
  );
}

export default TemplateRenderer;