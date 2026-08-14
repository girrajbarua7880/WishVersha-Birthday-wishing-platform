import { useState } from "react";
import { useNavigate } from "react-router-dom";

function ShareSection({
  wish,
  isOwner = true,
}) {
  const navigate = useNavigate();

  const [copied, setCopied] =
    useState(false);

  // =====================================================
  // SHARE URL
  // =====================================================

  const getShareUrl = () => {
    if (!wish?.shareId) {
      return "";
    }

    return `${window.location.origin}/w/${encodeURIComponent(
      wish.shareId
    )}`;
  };

  // =====================================================
  // COPY
  // =====================================================

  const copyLink = async () => {
    const url = getShareUrl();

    if (!url) {
      alert(
        "Share link is not available."
      );

      return;
    }

    try {
      await navigator.clipboard.writeText(
        url
      );
    } catch (error) {
      const input =
        document.createElement(
          "input"
        );

      input.value = url;

      document.body.appendChild(
        input
      );

      input.select();

      document.execCommand(
        "copy"
      );

      document.body.removeChild(
        input
      );
    }

    setCopied(true);

    window.setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  // =====================================================
  // NATIVE SHARE
  // =====================================================

  const shareWish = async () => {
    const url = getShareUrl();

    if (!url) {
      alert(
        "Share link is not available."
      );

      return;
    }

    if (
      typeof navigator.share ===
      "function"
    ) {
      try {
        await navigator.share({
          title:
            wish?.title ||
            "A Special Wish 💜",

          text:
            "Someone created a special wish for you. 🎉",

          url,
        });

        return;
      } catch (error) {
        console.log(
          "Share cancelled."
        );
      }
    }

    await copyLink();
  };

  // =====================================================
  // EDIT
  // =====================================================

  const editWish = () => {
    if (!isOwner) {
      return;
    }

    navigate(
      `/create/${wish?.event}/${wish?.template}`
    );
  };

  const shareUrl =
    getShareUrl();

  return (
    <section className="flex min-h-[100svh] items-center justify-center bg-slate-950 px-5 py-20 text-white">

      <div className="w-full max-w-xl text-center">

        <div className="text-7xl">
          🎉
        </div>

        <p className="mt-8 text-xs font-black uppercase tracking-[0.35em] text-white/40">
          Wish Complete
        </p>

        <h2 className="mt-4 text-4xl font-black sm:text-5xl">
          Your Wish Is Ready!
        </h2>

        <p className="mx-auto mt-5 max-w-md text-sm leading-7 text-white/50">
          {isOwner
            ? "Your beautiful wish is ready. Share it with someone special."
            : "Hope this special wish made you smile. 💜"}
        </p>

        {/* SHARE CARD */}

        <div className="mt-10 rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-8">

          <button
            type="button"
            onClick={shareWish}
            disabled={!shareUrl}
            className="flex w-full items-center justify-center gap-3 rounded-2xl bg-white px-6 py-4 text-sm font-black text-slate-950 shadow-xl transition hover:scale-[1.02] hover:bg-violet-100 active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-50"
          >
            <span className="text-xl">
              🔗
            </span>

            {copied
              ? "Link Copied!"
              : "Share Wish"}
          </button>

          <button
            type="button"
            onClick={copyLink}
            disabled={!shareUrl}
            className="mt-3 w-full rounded-2xl border border-white/10 bg-white/5 px-6 py-4 text-sm font-bold text-white/70 transition hover:bg-white/10 hover:text-white disabled:cursor-not-allowed disabled:opacity-50"
          >
            {copied
              ? "✓ Link Copied"
              : "Copy Wish Link"}
          </button>

          {isOwner && (
            <button
              type="button"
              onClick={editWish}
              className="mt-3 w-full rounded-2xl border border-violet-400/20 bg-violet-500/10 px-6 py-4 text-sm font-bold text-violet-200 transition hover:bg-violet-500/20"
            >
              ✏️ Edit Wish
            </button>
          )}

        </div>

        {/* URL */}

        {shareUrl && (
          <div className="mt-6 rounded-2xl border border-white/5 bg-black/20 px-4 py-3">

            <p className="truncate text-xs text-white/30">
              {shareUrl}
            </p>

          </div>
        )}

        <p className="mt-8 text-[10px] font-bold uppercase tracking-[0.25em] text-white/20">
          Made with WishVersa
        </p>

      </div>

    </section>
  );
}

export default ShareSection;