// const classicBirthday = {
//   id: "birthday-classic",

//   event: "birthday",

//   name: "Classic Birthday",

//   description:
//     "A warm and beautiful birthday experience filled with memories, wishes and surprises.",

//   thumbnail: "/assets/images/templates/birthday/classic.jpg",

//   theme: {
//     background: "#0f172a",
//     text: "#ffffff",
//     accent: "#ec4899",
//     secondary: "#8b5cf6",
//   },

//   typography: {
//     heading: "font-black",
//     body: "leading-8",
//   },

//   sections: [
//     {
//       id: "welcome",
//       type: "hero",
//       component: "HeroSection",

//       data: {
//         eyebrow: "A little surprise for",
//         title: "{{recipient}}",
//         message:
//           "{{message}}",
//         icon: "🎂",
//       },

//       animation: {
//         type: "fade",
//         duration: 800,
//       },
//     },

//     {
//       id: "gift",
//       type: "interactive",
//       component: "GiftSection",

//       data: {
//         title: "A Gift For You 🎁",
//         description:
//           "Something special is waiting inside.",
//         closedIcon: "🎁",
//         openedIcon: "💐",
//       },

//       interaction: {
//         type: "GiftUnlock",
//         required: true,
//       },

//       animation: {
//         type: "reveal",
//         duration: 700,
//       },
//     },

//     {
//       id: "letter",
//       type: "section",
//       component: "LetterSection",

//       data: {
//         title: "A Letter For You 💌",
//         message:
//           "{{letter}}",
//         sender:
//           "{{sender}}",
//       },

//       interaction: {
//         type: "EnvelopeReveal",
//         required: true,
//       },
//     },

//     {
//       id: "memories",
//       type: "section",
//       component: "MemoriesSection",

//       data: {
//         title: "Beautiful Memories 📸",
//         subtitle:
//           "Some moments are worth keeping forever.",

//         photos: "{{photos}}",
//       },

//       interaction: {
//         type: "MemoryPuzzle",
//         required: false,
//       },
//     },

//     {
//       id: "reasons",
//       type: "section",
//       component: "ReasonsSection",

//       data: {
//         title: "Why You're Special 💜",

//         reasons: "{{reasons}}",
//       },

//       interaction: {
//         type: "StarCollection",
//         required: false,
//       },
//     },

//     {
//       id: "secret",
//       type: "interactive",
//       component: "SecretSection",

//       data: {
//         title: "One Final Secret 🔐",

//         message:
//           "{{secretMessage}}",
//       },

//       interaction: {
//         type: "SecretLock",
//         required: true,
//       },
//     },

//     {
//       id: "celebration",
//       type: "interactive",
//       component: "CelebrationSection",

//       data: {
//         title: "Make A Wish 🎂",

//         message:
//           "Close your eyes, make a wish and celebrate this beautiful day.",
//       },

//       interaction: {
//         type: "CandleCelebration",
//         required: true,
//       },
//     },

//     {
//       id: "final",
//       type: "final",

//       component: "FinalWish",

//       data: {
//         title: "Happy Birthday! 🎉",

//         recipient:
//           "{{recipient}}",

//         message:
//           "{{finalMessage}}",

//         sender:
//           "{{sender}}",
//       },

//       animation: {
//         type: "reveal",
//         duration: 1000,
//       },
//     },
//   ],

//   settings: {
//     showProgress: false,
//     showNavbar: false,
//     showPreview: false,

//     navigation: {
//       type: "arrow",
//       requireCompletion: true,
//     },

//     finalPage: {
//       showEdit: true,
//       showShare: true,
//     },
//   },
// };

// export default classicBirthday;


const classicBirthday = {
  id: "birthday-classic",

  // Routing
  event: "birthday",
  slug: "classic",

  // Template information
  name: "Classic Birthday",
  style: "Classic",
  icon: "🎂",
  gradient: "from-pink-500 via-purple-500 to-indigo-500",

  description:
    "A warm and beautiful birthday experience filled with memories, wishes and surprises.",

  thumbnail: "/assets/images/templates/birthday/classic.jpg",

  theme: {
    background: "#0f172a",
    text: "#ffffff",
    accent: "#ec4899",
    secondary: "#8b5cf6",
  },

  typography: {
    heading: "font-black",
    body: "leading-8",
  },

  sections: [
    {
      id: "welcome",
      type: "hero",
      component: "HeroSection",

      data: {
        eyebrow: "A little surprise for",
        title: "{{recipient}}",
        message: "{{message}}",
        icon: "🎂",
      },

      animation: {
        type: "fade",
        duration: 800,
      },
    },

    {
      id: "gift",
      type: "interactive",
      component: "GiftSection",

      data: {
        title: "A Gift For You 🎁",
        description: "Something special is waiting inside.",
        closedIcon: "🎁",
        openedIcon: "💐",
      },

      interaction: {
        type: "GiftUnlock",
        required: true,
      },

      animation: {
        type: "reveal",
        duration: 700,
      },
    },

    {
      id: "letter",
      type: "section",
      component: "LetterSection",

      data: {
        title: "A Letter For You 💌",
        message: "{{letter}}",
        sender: "{{sender}}",
      },

      interaction: {
        type: "EnvelopeReveal",
        required: true,
      },
    },

    {
      id: "memories",
      type: "section",
      component: "MemoriesSection",

      data: {
        title: "Beautiful Memories 📸",
        subtitle: "Some moments are worth keeping forever.",
        photos: "{{photos}}",
      },

      interaction: {
        type: "MemoryPuzzle",
        required: false,
      },
    },

    {
      id: "reasons",
      type: "section",
      component: "ReasonsSection",

      data: {
        title: "Why You're Special 💜",
        reasons: "{{reasons}}",
      },

      interaction: {
        type: "StarCollection",
        required: false,
      },
    },

    {
      id: "secret",
      type: "interactive",
      component: "SecretSection",

      data: {
        title: "One Final Secret 🔐",
        message: "{{secretMessage}}",
      },

      interaction: {
        type: "SecretLock",
        required: true,
      },
    },

    {
      id: "celebration",
      type: "interactive",
      component: "CelebrationSection",

      data: {
        title: "Make A Wish 🎂",
        message:
          "Close your eyes, make a wish and celebrate this beautiful day.",
      },

      interaction: {
        type: "CandleCelebration",
        required: true,
      },
    },

    {
      id: "final",
      type: "final",
      component: "FinalWish",

      data: {
        title: "Happy Birthday! 🎉",
        recipient: "{{recipient}}",
        message: "{{finalMessage}}",
        sender: "{{sender}}",
      },

      animation: {
        type: "reveal",
        duration: 1000,
      },
    },
  ],

  settings: {
    showProgress: false,
    showNavbar: false,
    showPreview: false,

    navigation: {
      type: "arrow",
      requireCompletion: true,
    },

    finalPage: {
      showEdit: true,
      showShare: true,
    },
  },
};

export default classicBirthday;