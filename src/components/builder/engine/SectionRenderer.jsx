// import HeroSection from "../sections/HeroSection";
// import GiftSection from "../sections/GiftSection";
// import LetterSection from "../sections/LetterSection";
// import MemoriesSection from "../sections/MemoriesSection";
// import ReasonsSection from "../sections/ReasonsSection";
// import SecretSection from "../sections/SecretSection";
// import CelebrationSection from "../sections/CelebrationSection";
// // import PhotoGallerySection from "../sections/PhotoGallerySection";
// // import TimelineSection from "../sections/TimelineSection";

// import AnimationRenderer from "./AnimationRenderer";

// const sectionComponents = {
//   HeroSection,
//   GiftSection,
//   LetterSection,
//   MemoriesSection,
//   ReasonsSection,
//   SecretSection,
//   CelebrationSection,
// //   PhotoGallerySection,
// //   TimelineSection,
// };

// function SectionRenderer({ section, wish }) {
//   if (!section) {
//     return null;
//   }

//   const Component = sectionComponents[section.component];

//   if (!Component) {
//     console.warn(
//       `Section component "${section.component}" not found.`
//     );

//     return null;
//   }

//   return (
//     <AnimationRenderer
//       type={section.animation?.type || "fade"}
//       duration={section.animation?.duration || 700}
//       delay={section.animation?.delay || 0}
//     >
//       <Component
//         data={section.data}
//         wish={wish}
//         section={section}
//       />
//     </AnimationRenderer>
//   );
// }

// export default SectionRenderer;


// import HeroSection from "../sections/HeroSection";
// import GiftSection from "../sections/GiftSection";
// import LetterSection from "../sections/LetterSection";
// import MemoriesSection from "../sections/MemoriesSection";
// import ReasonsSection from "../sections/ReasonsSection";
// import SecretSection from "../sections/SecretSection";
// import CelebrationSection from "../sections/CelebrationSection";
// import FinalWish from "../sections/FinalWish";

// import AnimationRenderer from "./AnimationRenderer";

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

// function SectionRenderer({ section, wish }) {
//   if (!section) {
//     return null;
//   }

//   const Component = sectionComponents[section.component];

//   if (!Component) {
//     console.warn(
//       `Section component "${section.component}" not found.`
//     );

//     return null;
//   }

//   return (
//     <AnimationRenderer
//       type={section.animation?.type || "fade"}
//       duration={section.animation?.duration || 700}
//       delay={section.animation?.delay || 0}
//     >
//       <Component
//         data={section.data}
//         wish={wish}
//         section={section}
//       />
//     </AnimationRenderer>
//   );
// }

// export default SectionRenderer;


// import HeroSection from "../sections/HeroSection";
// import GiftSection from "../sections/GiftSection";
// import LetterSection from "../sections/LetterSection";
// import MemoriesSection from "../sections/MemoriesSection";
// import ReasonsSection from "../sections/ReasonsSection";
// import SecretSection from "../sections/SecretSection";
// import CelebrationSection from "../sections/CelebrationSection";
// import PhotoGallerySection from "../sections/PhotoGallerySection";
// import TimelineSection from "../sections/TimelineSection";

// import AnimationRenderer from "./AnimationRenderer";

// const SECTION_COMPONENTS = {
//   HeroSection,
//   GiftSection,
//   LetterSection,
//   MemoriesSection,
//   ReasonsSection,
//   SecretSection,
//   CelebrationSection,
//   PhotoGallerySection,
//   TimelineSection,
// };

// function SectionRenderer({
//   section,
//   data,
//   wish,
//   theme,
// }) {
//   if (!section) {
//     return null;
//   }

//   const Component =
//     SECTION_COMPONENTS[section.component];

//   if (!Component) {
//     return (
//       <section className="flex min-h-[300px] items-center justify-center bg-slate-950 px-6 text-white">
//         <div className="text-center">
//           <p className="text-sm font-bold text-red-400">
//             Section component not found
//           </p>

//           <p className="mt-2 text-xs text-white/40">
//             {section.component || "Unknown Section"}
//           </p>
//         </div>
//       </section>
//     );
//   }

//   const content = (
//     <Component
//       data={data}
//       wish={wish}
//       theme={theme}
//       section={section}
//     />
//   );

//   // No animation configured
//   if (!section.animation) {
//     return (
//       <div data-section-id={section.id}>
//         {content}
//       </div>
//     );
//   }

//   return (
//     <div data-section-id={section.id}>
//       <AnimationRenderer
//         animation={section.animation}
//       >
//         {content}
//       </AnimationRenderer>
//     </div>
//   );
// }

// export default SectionRenderer;

import HeroSection from "../sections/HeroSection";
import GiftSection from "../sections/GiftSection";
import LetterSection from "../sections/LetterSection";
import MemoriesSection from "../sections/MemoriesSection";
import ReasonsSection from "../sections/ReasonsSection";
import SecretSection from "../sections/SecretSection";
import CelebrationSection from "../sections/CelebrationSection";
import PhotoGallerySection from "../sections/PhotoGallerySection";
import TimelineSection from "../sections/TimelineSection";
import FinalWish from "../sections/FinalWish";

import AnimationRenderer from "./AnimationRenderer";

const SECTION_COMPONENTS = {
  HeroSection,
  GiftSection,
  LetterSection,
  MemoriesSection,
  ReasonsSection,
  SecretSection,
  CelebrationSection,
  PhotoGallerySection,
  TimelineSection,
  FinalWish,
};

function SectionRenderer({
  section,
  wish,
  theme,
}) {
  if (!section) {
    return null;
  }

  const SectionComponent =
    SECTION_COMPONENTS[section.component];

  /*
   * ---------------------------------------------------------
   * UNKNOWN COMPONENT
   * ---------------------------------------------------------
   */

  if (!SectionComponent) {
    return (
      <section className="flex min-h-[300px] items-center justify-center bg-slate-950 px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-black text-red-400">
            Section Not Found
          </p>

          <p className="mt-2 text-xs text-white/40">
            {section.component ||
              "Unknown Component"}
          </p>
        </div>
      </section>
    );
  }

  /*
   * ---------------------------------------------------------
   * SECTION CONTENT
   * ---------------------------------------------------------
   */

  const content = (
    <SectionComponent
      data={section.data}
      wish={wish}
      theme={theme}
      section={section}
    />
  );

  /*
   * ---------------------------------------------------------
   * WITHOUT ANIMATION
   * ---------------------------------------------------------
   */

  if (!section.animation) {
    return (
      <div data-section-id={section.id}>
        {content}
      </div>
    );
  }

  /*
   * ---------------------------------------------------------
   * WITH EXISTING ANIMATION
   * ---------------------------------------------------------
   */

  return (
    <div data-section-id={section.id}>
      <AnimationRenderer
        type={section.animation.type}
        duration={
          section.animation.duration || 700
        }
        delay={
          section.animation.delay || 0
        }
        direction={
          section.animation.direction
        }
      >
        {content}
      </AnimationRenderer>
    </div>
  );
}

export default SectionRenderer;