import { useEffect, useState } from "react";
import {
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

function CountdownPage() {
  const navigate = useNavigate();
  const location = useLocation();

  const {
    event,
    template,
    wishId,
  } = useParams();

  const queryParams =
    new URLSearchParams(
      location.search
    );

  const queryWishId =
    queryParams.get("wishId");

  const resolvedWishId =
    wishId || queryWishId;

  const isSharedLink =
    Boolean(wishId);

  const [wish, setWish] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [cinematicCount, setCinematicCount] =
    useState(3);

  const [timeLeft, setTimeLeft] =
    useState({
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    });

  const [finished, setFinished] =
    useState(false);

  // =========================================================
  // LOAD WISH
  // =========================================================

  useEffect(() => {
    try {
      let savedWish = null;

      // Shared link:
      // /w/:wishId
      if (resolvedWishId) {
        savedWish =
          localStorage.getItem(
            `wish:${resolvedWishId}`
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
          "CountdownPage: wish data not found."
        );

        if (
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
        "CountdownPage: failed to load wish.",
        error
      );
    } finally {
      setLoading(false);
    }
  }, [
    resolvedWishId,
    event,
    template,
    navigate,
  ]);

  // =========================================================
  // CINEMATIC COUNTDOWN
  // =========================================================

  useEffect(() => {
    if (!wish) return;

    if (
      wish.countdownType !==
      "cinematic"
    ) {
      return;
    }

    if (finished) {
      return;
    }

    if (cinematicCount <= 0) {
      setFinished(true);
      return;
    }

    const timer =
      window.setTimeout(() => {
        setCinematicCount(
          (previous) =>
            previous - 1
        );
      }, 1000);

    return () => {
      window.clearTimeout(timer);
    };
  }, [
    wish,
    cinematicCount,
    finished,
  ]);

  // =========================================================
  // TIMER COUNTDOWN
  // =========================================================

  useEffect(() => {
    if (!wish) return;

    if (
      wish.countdownType !==
      "timer"
    ) {
      return;
    }

    // If no date is selected,
    // don't lock the user.
    if (!wish.revealDate) {
      setFinished(true);
      return;
    }

    const calculateTime = () => {
      const revealTime =
        wish.revealTime ||
        "00:00";

      const targetDate =
        new Date(
          `${wish.revealDate}T${revealTime}:00`
        );

      const target =
        targetDate.getTime();

      const now =
        Date.now();

      const difference =
        target - now;

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });

        setFinished(true);

        return;
      }

      const totalSeconds =
        Math.floor(
          difference / 1000
        );

      const days =
        Math.floor(
          totalSeconds /
            (60 * 60 * 24)
        );

      const hours =
        Math.floor(
          (totalSeconds %
            (60 * 60 * 24)) /
            (60 * 60)
        );

      const minutes =
        Math.floor(
          (totalSeconds %
            (60 * 60)) /
            60
        );

      const seconds =
        totalSeconds % 60;

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });
    };

    calculateTime();

    const interval =
      window.setInterval(
        calculateTime,
        1000
      );

    return () => {
      window.clearInterval(
        interval
      );
    };
  }, [wish]);

  // =========================================================
  // FINISHED → OPEN WISH
  // =========================================================

  useEffect(() => {
    if (!finished || !wish) {
      return;
    }

    const targetWishId =
      wish.shareId ||
      resolvedWishId;

    // Shared link
    if (isSharedLink && targetWishId) {
      navigate(
        `/w/${encodeURIComponent(
          targetWishId
        )}/wish`,
        {
          replace: true,
        }
      );

      return;
    }

    // Owner flow
    if (event && template) {
      navigate(
        `/create/${event}/${template}/wish`,
        {
          replace: true,
        }
      );

      return;
    }

    // Last fallback
    if (targetWishId) {
      navigate(
        `/w/${encodeURIComponent(
          targetWishId
        )}/wish`,
        {
          replace: true,
        }
      );
    }
  }, [
    finished,
    wish,
    resolvedWishId,
    isSharedLink,
    event,
    template,
    navigate,
  ]);

  // =========================================================
  // LOADING
  // =========================================================

  if (loading) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-slate-950 px-6 text-white">

        <div className="text-center">

          <div className="mx-auto h-12 w-12 animate-spin rounded-full border-4 border-white/10 border-t-violet-500" />

          <p className="mt-5 text-sm text-white/50">
            Preparing your surprise...
          </p>

        </div>

      </main>
    );
  }

  // =========================================================
  // NO WISH
  // =========================================================

  if (!wish) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center bg-slate-950 px-6 text-white">

        <div className="max-w-md text-center">

          <div className="text-6xl">
            😕
          </div>

          <h1 className="mt-5 text-2xl font-black">
            Wish Not Found
          </h1>

          <p className="mt-3 text-sm leading-6 text-white/50">
            This wish could not be loaded.
          </p>

        </div>

      </main>
    );
  }

  // =========================================================
  // CINEMATIC
  // =========================================================

  if (
    wish.countdownType ===
    "cinematic"
  ) {
    return (
      <main className="flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950 px-6 text-white">

        <div className="text-center">

          <div className="mb-8 text-sm font-black uppercase tracking-[0.35em] text-white/40">
            A little surprise
          </div>

          {cinematicCount > 0 ? (
            <div
              key={cinematicCount}
              className="animate-ping text-8xl font-black sm:text-9xl"
            >
              {cinematicCount}
            </div>
          ) : (
            <div className="text-8xl sm:text-9xl">
              🎉
            </div>
          )}

          <p className="mt-10 text-sm text-white/40">
            Get ready...
          </p>

        </div>

      </main>
    );
  }

  // =========================================================
  // TIMER
  // =========================================================

  return (
    <main className="relative flex min-h-[100svh] items-center justify-center overflow-hidden bg-slate-950 px-5 text-white">

      {/* Background */}

      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/20 blur-3xl" />

      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-pink-500/20 blur-3xl" />

      <div className="relative z-10 w-full max-w-2xl text-center">

        <div className="text-6xl">
          🎂
        </div>

        <p className="mt-7 text-xs font-black uppercase tracking-[0.35em] text-white/40">
          Something special is waiting
        </p>

        <h1 className="mt-4 text-3xl font-black sm:text-5xl">
          {wish.recipient
            ? `A surprise for ${wish.recipient}`
            : "Your Birthday Surprise"}
        </h1>

        <p className="mt-4 text-sm text-white/40">
          The wish will unlock soon...
        </p>

        <div className="mt-10 grid grid-cols-4 gap-2 sm:gap-4">

          <CountdownBox
            value={timeLeft.days}
            label="Days"
          />

          <CountdownBox
            value={timeLeft.hours}
            label="Hours"
          />

          <CountdownBox
            value={timeLeft.minutes}
            label="Minutes"
          />

          <CountdownBox
            value={timeLeft.seconds}
            label="Seconds"
          />

        </div>

        <p className="mt-8 text-xs text-white/20">
          ✨ Made with WishVersa
        </p>

      </div>

    </main>
  );
}

function CountdownBox({
  value,
  label,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.05] px-2 py-5 backdrop-blur-xl sm:px-5 sm:py-7">

      <div className="text-2xl font-black sm:text-4xl">
        {String(value).padStart(
          2,
          "0"
        )}
      </div>

      <div className="mt-2 text-[9px] font-bold uppercase tracking-wider text-white/30 sm:text-xs">
        {label}
      </div>

    </div>
  );
}

export default CountdownPage;