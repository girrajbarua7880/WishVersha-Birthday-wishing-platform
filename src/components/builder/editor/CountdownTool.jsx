function CountdownTool({ wish, updateWish }) {
  const countdownType =
    wish?.countdownType || "timer";

  const handleTypeChange = (type) => {
    updateWish("countdownType", type);
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <p className="text-sm font-black text-gray-900">
          Countdown Style ⏳
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-500">
          Choose how your special wish should open.
        </p>
      </div>

      {/* =====================================================
          COUNTDOWN OPTIONS
      ===================================================== */}

      <div className="space-y-3">

        {/* Birthday Timer */}

        <button
          type="button"
          onClick={() =>
            handleTypeChange("timer")
          }
          className={`w-full rounded-2xl border p-4 text-left transition ${
            countdownType === "timer"
              ? "border-violet-500 bg-violet-50 ring-2 ring-violet-100"
              : "border-gray-200 bg-white hover:border-violet-300"
          }`}
        >
          <div className="flex items-start gap-3">

            <div className="text-3xl">
              🎂
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-2">

                <h3 className="text-sm font-black text-gray-900">
                  Birthday Timer
                </h3>

                {countdownType === "timer" && (
                  <span className="text-lg font-black text-violet-600">
                    ✓
                  </span>
                )}

              </div>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Open the wish automatically on a
                selected date and time.
              </p>

              <div className="mt-3 grid grid-cols-4 gap-1.5">

                <PreviewBox
                  value="02"
                  label="Days"
                />

                <PreviewBox
                  value="08"
                  label="Hours"
                />

                <PreviewBox
                  value="25"
                  label="Min"
                />

                <PreviewBox
                  value="12"
                  label="Sec"
                />

              </div>

            </div>

          </div>
        </button>

        {/* Cinematic */}

        <button
          type="button"
          onClick={() =>
            handleTypeChange("cinematic")
          }
          className={`w-full rounded-2xl border p-4 text-left transition ${
            countdownType === "cinematic"
              ? "border-violet-500 bg-violet-50 ring-2 ring-violet-100"
              : "border-gray-200 bg-white hover:border-violet-300"
          }`}
        >
          <div className="flex items-start gap-3">

            <div className="text-3xl">
              ✨
            </div>

            <div className="min-w-0 flex-1">

              <div className="flex items-center justify-between gap-2">

                <h3 className="text-sm font-black text-gray-900">
                  Cinematic 3-2-1
                </h3>

                {countdownType === "cinematic" && (
                  <span className="text-lg font-black text-violet-600">
                    ✓
                  </span>
                )}

              </div>

              <p className="mt-1 text-xs leading-5 text-gray-500">
                Show a beautiful 3 → 2 → 1
                animation before opening the wish.
              </p>

              <div className="mt-3 flex justify-center gap-2">

                {["3", "2", "1"].map(
                  (number) => (
                    <span
                      key={number}
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-xs font-black text-white"
                    >
                      {number}
                    </span>
                  )
                )}

              </div>

            </div>

          </div>
        </button>

      </div>

      {/* =====================================================
          TIMER SETTINGS
      ===================================================== */}

      {countdownType === "timer" && (
        <div className="space-y-4 rounded-2xl border border-gray-100 bg-gray-50 p-4">

          <div>

            <label
              htmlFor="revealDate"
              className="mb-2 block text-xs font-black text-gray-700"
            >
              Birthday / Reveal Date
            </label>

            <input
              id="revealDate"
              type="date"
              value={
                wish?.revealDate || ""
              }
              onChange={(event) =>
                updateWish(
                  "revealDate",
                  event.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />

          </div>

          <div>

            <label
              htmlFor="revealTime"
              className="mb-2 block text-xs font-black text-gray-700"
            >
              Reveal Time
            </label>

            <input
              id="revealTime"
              type="time"
              value={
                wish?.revealTime || "00:00"
              }
              onChange={(event) =>
                updateWish(
                  "revealTime",
                  event.target.value
                )
              }
              className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition focus:border-violet-500 focus:ring-2 focus:ring-violet-100"
            />

          </div>

          <div className="rounded-xl bg-violet-50 p-3">

            <p className="text-xs font-bold text-violet-800">
              🔐 Automatic Unlock
            </p>

            <p className="mt-1 text-xs leading-5 text-violet-600">
              The wish will remain locked until
              the selected date and time.
            </p>

          </div>

        </div>
      )}

      {/* =====================================================
          CINEMATIC SETTINGS
      ===================================================== */}

      {countdownType === "cinematic" && (
        <div className="rounded-2xl border border-violet-100 bg-violet-50 p-4">

          <p className="text-xs font-black text-violet-800">
            ✨ Cinematic Mode
          </p>

          <p className="mt-1 text-xs leading-5 text-violet-600">
            When the recipient opens the wish,
            they will see:
          </p>

          <div className="mt-3 flex items-center justify-center gap-3">

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              3
            </span>

            <span className="font-black text-violet-400">
              →
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              2
            </span>

            <span className="font-black text-violet-400">
              →
            </span>

            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-950 text-sm font-black text-white">
              1
            </span>

            <span className="font-black text-violet-400">
              →
            </span>

            <span className="text-xl">
              🎉
            </span>

          </div>

        </div>
      )}

    </div>
  );
}

function PreviewBox({ value, label }) {
  return (
    <div className="rounded-lg bg-slate-950 px-1 py-2 text-center text-white">

      <div className="text-sm font-black">
        {value}
      </div>

      <div className="mt-0.5 text-[7px] font-bold uppercase tracking-wider text-white/40">
        {label}
      </div>

    </div>
  );
}

export default CountdownTool;