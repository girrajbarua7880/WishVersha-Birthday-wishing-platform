// import Fade from "../animations/Fade";
// import Slide from "../animations/Slide";
// import Zoom from "../animations/Zoom";
// import Bounce from "../animations/Bounce";
// import Reveal from "../animations/Reveal";
// import Typewriter from "../animations/Typewriter";
// import Confetti from "../animations/Confetti";

// const animations = {
//   fade: Fade,
//   slide: Slide,
//   zoom: Zoom,
//   bounce: Bounce,
//   reveal: Reveal,
//   typewriter: Typewriter,
//   confetti: Confetti,
// };

// function AnimationRenderer({
//   type = "fade",
//   duration = 700,
//   delay = 0,
//   children,
//   ...props
// }) {
//   const AnimationComponent = animations[type];

//   // Unknown animation → normal render
//   if (!AnimationComponent) {
//     console.warn(
//       `Animation "${type}" not found. Rendering without animation.`
//     );

//     return children;
//   }

//   return (
//     <AnimationComponent
//       duration={duration}
//       delay={delay}
//       {...props}
//     >
//       {children}
//     </AnimationComponent>
//   );
// }

// export default AnimationRenderer;
import Fade from "../animations/Fade";
import Slide from "../animations/Slide";
import Zoom from "../animations/Zoom";
import Bounce from "../animations/Bounce";
import Reveal from "../animations/Reveal";
import Typewriter from "../animations/Typewriter";
import Confetti from "../animations/Confetti";

const ANIMATION_COMPONENTS = {
  fade: Fade,
  slide: Slide,
  zoom: Zoom,
  bounce: Bounce,
  reveal: Reveal,
  typewriter: Typewriter,
  confetti: Confetti,
};

function AnimationRenderer({
  type = "fade",
  duration = 700,
  delay = 0,
  direction = "up",
  children,
}) {
  const AnimationComponent =
    ANIMATION_COMPONENTS[type];

  // Unknown animation ko crash nahi karna
  if (!AnimationComponent) {
    console.warn(
      `Animation "${type}" not found.`
    );

    return children;
  }

  return (
    <AnimationComponent
      duration={duration}
      delay={delay}
      direction={direction}
    >
      {children}
    </AnimationComponent>
  );
}

export default AnimationRenderer;