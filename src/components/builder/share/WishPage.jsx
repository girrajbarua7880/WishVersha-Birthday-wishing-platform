import { useEffect, useMemo, useState } from "react";
import {
  useNavigate,
  useParams,
} from "react-router-dom";

import HeroSection from "../sections/HeroSection";
import GiftSection from "../sections/GiftSection";
import LetterSection from "../sections/LetterSection";
import MemoriesSection from "../sections/MemoriesSection";
import ReasonsSection from "../sections/ReasonsSection";
import SecretSection from "../sections/SecretSection";
import CelebrationSection from "../sections/CelebrationSection";
import FinalWish from "../sections/FinalWish";

import ShareSection from "./ShareSection";

function WishPage() {
  const navigate = useNavigate();

  const {
    event,
    template,
    wishId,
  } = useParams();

  const isSharedLink =
    Boolean(wishId);

  const isOwner =
    !isSharedLink;

  const [wish, setWish] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [currentIndex, setCurrentIndex] =
    useState(0);

  // =========================================================
  // LOAD WISH
  // =========================================================

  useEffect(() => {
    try {
      let savedWish = null;

      // Shared wish
      if (wishId) {
        savedWish =
          localStorage.getItem(
            `wish:${wishId}`
          );
      }

      // Owner fallback
      if (!savedWish) {
        savedWish =
          localStorage.getItem(
            "wish"
          );
      }

      if (!savedWish) {
        console.error(
          "WishPage: wish data not found."
        );

        if (
          isOwner &&
          event &&
          template
        ) {
          navigate(
            `/create/${event}/${template}`,
            {
              replace: true,
            }
          );
        }

        return;
      }

      const parsedWish =
        JSON.parse(savedWish);

      setWish(parsedWish);

    } catch (error) {
      console.error(
        "WishPage: failed to load wish.",
        error
      );
    } finally {
      setLoading(false);
    }
  }, [
    wishId,
    event,
    template,
    isOwner,
    navigate,
  ]);

  // =========================================================
  // SECTIONS
  // =========================================================

  const sections = useMemo(() => {
    if (!wish) {
      return [];
    }

    const allSections = [
      {
        id: "welcome",
        component: (
          <HeroSection
            data={{
              eyebrow:
                "A little surprise for",
              title:
                wish.recipient ||
                "Someone Special",
              message:
                wish.message ||
                "",
              icon: "🎂",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "gift",
        component: (
          <GiftSection
            data={{
              title:
                "A Gift For You 🎁",
              description:
                "Something special is waiting inside.",
              closedIcon: "🎁",
              openedIcon: "💐",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "letter",
        component: (
          <LetterSection
            data={{
              title:
                "A Letter For You 💌",
              message:
                wish.letter || "",
              sender:
                wish.sender || "",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "memories",
        component: (
          <MemoriesSection
            data={{
              title:
                "Beautiful Memories 📸",
              subtitle:
                "Some moments are worth keeping forever.",
              photos:
                Array.isArray(
                  wish.photos
                )
                  ? wish.photos
                  : [],
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "reasons",
        component: (
          <ReasonsSection
            data={{
              title:
                "Why You're Special 💜",
              reasons:
                Array.isArray(
                  wish.reasons
                )
                  ? wish.reasons
                  : [],
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "secret",
        component: (
          <SecretSection
            data={{
              title:
                "One Final Secret 🔐",
              message:
                wish.secretMessage ||
                "",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "celebration",
        component: (
          <CelebrationSection
            data={{
              title:
                "Make A Wish 🎂",
              message:
                "Close your eyes, make a wish and celebrate this beautiful day.",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "final",
        component: (
          <FinalWish
            data={{
              title:
                "Happy Birthday! 🎉",
              recipient:
                wish.recipient || "",
              message:
                wish.finalMessage ||
                "",
              sender:
                wish.sender || "",
            }}
            wish={wish}
          />
        ),
      },

      {
        id: "share",
        component: (
          <ShareSection
            wish={wish}
            isOwner={isOwner}
          />
        ),
      },
    ];

    // -------------------------------------------------------
    // ENABLED SECTIONS
    // -------------------------------------------------------

    const enabled =
      Array.isArray(
        wish.sections
      )
        ? wish.sections
        : allSections.map(
            (section) =>
              section.id
          );

    return allSections.filter(
      (section) =>
        enabled.includes(
          section.id
        ) ||
        section.id === "share"
    );
  }, [wish, isOwner]);

  // =========================================================
  // RESET INDEX
  // =========================================================

  useEffect(() => {
    setCurrentIndex(0);
  }, [wishId]);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-slate-950 text-white">

        <div className="text-center">

          <div className="mx-auto h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-violet-500" />

          <p className="mt-5 text-sm text-white/50">
            Opening your wish...
          </p>

        </div>

      </main>
    );
  }

  // =========================================================
  // NOT FOUND
  // =========================================================

  if (!wish) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-slate-950 px-6 text-white">

        <div className="max-w-md text-center">

          <div className="text-6xl">
            💜
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Wish Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            This wish is no longer available
            in this browser.
          </p>

        </div>

      </main>
    );
  }

  // =========================================================
  // NO SECTIONS
  // =========================================================

  if (!sections.length) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-slate-950 px-6 text-white">

        <div className="text-center">

          <div className="text-6xl">
            💜
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Happy Birthday!
          </h1>

        </div>

      </main>
    );
  }

  // =========================================================
  // NAVIGATION
  // =========================================================

  const currentSection =
    sections[currentIndex];

  const isFirst =
    currentIndex === 0;

  const isLast =
    currentIndex ===
    sections.length - 1;

  const handleNext = () => {
    if (isLast) {
      return;
    }

    setCurrentIndex(
      (previous) =>
        previous + 1
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handlePrevious = () => {
    if (isFirst) {
      return;
    }

    setCurrentIndex(
      (previous) =>
        previous - 1
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // =========================================================
  // EXPERIENCE
  // =========================================================

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-slate-950">

      {/* CURRENT SECTION */}

      <div
        key={`${currentSection.id}-${currentIndex}`}
        className="min-h-[100svh] animate-[wishFade_0.7s_ease-out]"
      >
        {currentSection.component}
      </div>

      {/* PROGRESS */}

      <div className="fixed left-1/2 top-5 z-50 flex -translate-x-1/2 gap-1.5">

        {sections.map(
          (section, index) => (
            <span
              key={`${section.id}-${index}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                index ===
                currentIndex
                  ? "w-8 bg-white"
                  : index <
                    currentIndex
                  ? "w-4 bg-white/60"
                  : "w-4 bg-white/20"
              }`}
            />
          )
        )}

      </div>

      {/* COUNTER */}

      <div className="fixed right-5 top-5 z-50 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-[10px] font-bold text-white/60 backdrop-blur-xl">
        {currentIndex + 1} /{" "}
        {sections.length}
      </div>

      {/* PREVIOUS */}

      {!isFirst && (
        <button
          type="button"
          onClick={handlePrevious}
          aria-label="Previous section"
          className="fixed bottom-6 left-5 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-black/30 text-lg text-white backdrop-blur-xl transition hover:bg-black/50 active:scale-95"
        >
          ←
        </button>
      )}

      {/* NEXT */}

      {!isLast && (
        <button
          type="button"
          onClick={handleNext}
          className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full bg-white px-7 py-3 text-sm font-black text-slate-950 shadow-2xl transition hover:scale-105 active:scale-95"
        >
          Continue →
        </button>
      )}

      {/* FINAL */}

      {isLast && (
        <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/10 bg-black/30 px-6 py-3 text-xs font-bold text-white/70 backdrop-blur-xl">
          🎉 Your Wish
        </div>
      )}

    </main>
  );
}

export default WishPage;