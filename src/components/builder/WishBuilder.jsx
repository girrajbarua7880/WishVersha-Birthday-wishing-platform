import { useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import templates from "./templates";

import TemplateRenderer from "./engine/TemplateRenderer";
import WishEditor from "./editor/WishEditor";

function createWishId() {
  return (
    "wish-" +
    Date.now().toString(36) +
    "-" +
    Math.random()
      .toString(36)
      .slice(2, 10)
  );
}

function WishBuilder() {
  const navigate = useNavigate();

  const {
    event,
    template,
  } = useParams();

  // =========================================================
  // SELECT TEMPLATE
  // =========================================================

  const selectedTemplate = useMemo(() => {
    if (!Array.isArray(templates)) {
      console.error(
        "WishBuilder: templates is not an array",
        templates
      );

      return null;
    }

    return templates.find(
      (item) =>
        item?.event === event &&
        item?.slug === template
    );
  }, [event, template]);

  // =========================================================
  // WISH STATE
  // =========================================================

  const [wish, setWish] = useState({
    recipient: "",
    sender: "",

    title: "Happy Birthday! 🎉",

    message:
      "May your life always be filled with happiness, love and beautiful memories. 💜",

    letter: "",

    secretMessage: "",

    finalMessage:
      "May every new year of your life bring more happiness, beautiful memories and amazing moments. 💜",

    photos: [],

    reasons: [
      "You make ordinary moments special.",
      "You always know how to make people smile.",
      "You create beautiful memories.",
    ],

    // Countdown
    countdownType: "timer",
    revealDate: "",
    revealTime: "00:00",

    // Theme
    theme: {
      background:
        selectedTemplate?.theme?.background ||
        "#0f172a",

      text:
        selectedTemplate?.theme?.text ||
        "#ffffff",

      accent:
        selectedTemplate?.theme?.accent ||
        "#ec4899",

      secondary:
        selectedTemplate?.theme?.secondary ||
        "#8b5cf6",
    },

    // Background
    background: {
      type: "gradient",

      value:
        "from-pink-600 via-purple-700 to-indigo-900",
    },

    // Sections
    sections: [
      "welcome",
      "gift",
      "letter",
      "memories",
      "reasons",
      "secret",
      "celebration",
      "final",
    ],
  });

  // =========================================================
  // UPDATE WISH
  // =========================================================

  const updateWish = (field, value) => {
    setWish((previous) => ({
      ...previous,
      [field]: value,
    }));
  };

  // =========================================================
  // GENERATE WISH
  // =========================================================

  const handleGenerate = () => {
    if (!selectedTemplate) {
      alert(
        "Template not found. Please select the template again."
      );

      navigate(
        `/create/${event}/templates`
      );

      return;
    }

    // -------------------------------------------------------
    // UNIQUE SHARE ID
    // -------------------------------------------------------

    const shareId = createWishId();

    // -------------------------------------------------------
    // FINAL WISH DATA
    // -------------------------------------------------------

    const wishData = {
      ...wish,

      id: shareId,
      shareId,

      event,
      template,

      templateId:
        selectedTemplate.id ||
        `${event}-${template}`,

      templateName:
        selectedTemplate.name ||
        selectedTemplate.title ||
        template,

      createdAt:
        new Date().toISOString(),
    };

    // -------------------------------------------------------
    // SAVE MAIN WISH
    // -------------------------------------------------------

    try {
      localStorage.setItem(
        "wish",
        JSON.stringify(wishData)
      );

      // -----------------------------------------------------
      // SAVE BY SHARE ID
      // This is what shared link uses.
      // -----------------------------------------------------

      localStorage.setItem(
        `wish:${shareId}`,
        JSON.stringify(wishData)
      );

      console.log(
        "Wish generated successfully:",
        wishData
      );

      console.log(
        "Share URL:",
        `${window.location.origin}/w/${shareId}`
      );

    } catch (error) {
      console.error(
        "Failed to save wish:",
        error
      );

      alert(
        "Unable to save your wish. Please try again."
      );

      return;
    }

    // -------------------------------------------------------
    // VERIFY
    // -------------------------------------------------------

    const savedWish =
      localStorage.getItem(
        `wish:${shareId}`
      );

    if (!savedWish) {
      alert(
        "Wish could not be saved. Please try again."
      );

      return;
    }

    // -------------------------------------------------------
    // OPEN COUNTDOWN
    // -------------------------------------------------------

    navigate(
      `/create/${event}/${template}/countdown?wishId=${encodeURIComponent(
        shareId
      )}`
    );
  };

  // =========================================================
  // TEMPLATE NOT FOUND
  // =========================================================

  if (!selectedTemplate) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-slate-950 px-4 text-white">

        <div className="w-full max-w-md text-center">

          <div className="text-6xl">
            😕
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Template Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            The selected template could not
            be found.
          </p>

          <button
            type="button"
            onClick={() =>
              navigate(
                `/create/${event || ""}/templates`
              )
            }
            className="mt-7 rounded-xl bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:bg-violet-100 active:scale-95"
          >
            ← Choose Template
          </button>

        </div>

      </main>
    );
  }

  // =========================================================
  // BUILDER
  // =========================================================

  return (
    <main className="min-h-screen bg-slate-100">

      {/* HEADER */}

      <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/95 backdrop-blur">

        <div className="mx-auto flex min-h-16 max-w-[1600px] items-center justify-between gap-3 px-4 py-3 sm:px-6">

          <div className="min-w-0">

            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-violet-600 sm:text-xs">
              WishVersa
            </p>

            <h1 className="truncate text-sm font-black text-gray-900 sm:text-base">
              {selectedTemplate.name ||
                selectedTemplate.title ||
                "Wish Builder"}
            </h1>

          </div>

          <div className="flex shrink-0 items-center gap-2">

            <button
              type="button"
              onClick={() =>
                navigate(
                  `/create/${event}/templates`
                )
              }
              className="hidden rounded-xl px-3 py-2 text-xs font-bold text-gray-500 transition hover:bg-gray-100 hover:text-gray-900 sm:block sm:px-4 sm:text-sm"
            >
              ← Change Template
            </button>

            <button
              type="button"
              onClick={handleGenerate}
              className="rounded-xl bg-slate-950 px-4 py-2.5 text-xs font-black text-white shadow-lg transition hover:bg-violet-700 active:scale-95 sm:px-5 sm:text-sm"
            >
              Generate Wish →
            </button>

          </div>

        </div>

      </header>

      {/* BUILDER */}

      <div className="mx-auto grid max-w-[1600px] lg:grid-cols-[380px_minmax(0,1fr)]">

        {/* EDITOR */}

        <aside className="border-b border-gray-200 bg-white lg:min-h-[calc(100vh-65px)] lg:border-b-0 lg:border-r">

          <WishEditor
            wish={wish}
            updateWish={updateWish}
          />

        </aside>

        {/* LIVE PREVIEW */}

        <section className="min-w-0 bg-slate-200 p-4 sm:p-6 lg:p-8">

          <div className="mx-auto mb-4 flex w-full max-w-[900px] items-center justify-between gap-3">

            <div className="min-w-0">

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 sm:text-xs">
                Live Preview
              </p>

              <p className="mt-1 truncate text-sm font-bold text-gray-700">
                {selectedTemplate.name ||
                  selectedTemplate.title ||
                  "Template Preview"}
              </p>

            </div>

            <span className="flex shrink-0 items-center gap-1.5 rounded-full bg-white px-3 py-1.5 text-[10px] font-bold text-green-600 shadow-sm sm:text-xs">

              <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />

              Live

            </span>

          </div>

          <div className="mx-auto w-full max-w-[900px] overflow-hidden rounded-[28px] bg-slate-950 shadow-2xl">

            <TemplateRenderer
              config={selectedTemplate}
              wish={wish}
            />

          </div>

        </section>

      </div>

    </main>
  );
}

export default WishBuilder;