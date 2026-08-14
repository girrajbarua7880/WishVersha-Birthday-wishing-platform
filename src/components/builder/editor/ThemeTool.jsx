function ThemeTool({ wish, updateWish }) {
  const theme = wish?.theme || {
    background: "#0f172a",
    text: "#ffffff",
    accent: "#ec4899",
    secondary: "#8b5cf6",
  };

  const updateTheme = (field, value) => {
    updateWish("theme", {
      ...theme,
      [field]: value,
    });
  };

  const presets = [
    {
      id: "classic",
      name: "Classic",
      icon: "💜",
      background: "#0f172a",
      text: "#ffffff",
      accent: "#ec4899",
      secondary: "#8b5cf6",
    },
    {
      id: "sunset",
      name: "Sunset",
      icon: "🌅",
      background: "#431407",
      text: "#fff7ed",
      accent: "#fb7185",
      secondary: "#f97316",
    },
    {
      id: "ocean",
      name: "Ocean",
      icon: "🌊",
      background: "#082f49",
      text: "#f0f9ff",
      accent: "#38bdf8",
      secondary: "#06b6d4",
    },
    {
      id: "forest",
      name: "Forest",
      icon: "🌿",
      background: "#052e16",
      text: "#f0fdf4",
      accent: "#4ade80",
      secondary: "#14b8a6",
    },
    {
      id: "rose",
      name: "Rose",
      icon: "🌹",
      background: "#4c0519",
      text: "#fff1f2",
      accent: "#fb7185",
      secondary: "#e11d48",
    },
    {
      id: "midnight",
      name: "Midnight",
      icon: "🌙",
      background: "#020617",
      text: "#f8fafc",
      accent: "#a78bfa",
      secondary: "#6366f1",
    },
  ];

  const applyPreset = (preset) => {
    updateWish("theme", {
      background: preset.background,
      text: preset.text,
      accent: preset.accent,
      secondary: preset.secondary,
    });
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <p className="text-sm font-black text-gray-900">
          Choose Your Theme 🎨
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          Pick a style or customize the colors of
          your wish.
        </p>
      </div>

      {/* Presets */}

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Presets
        </p>

        <div className="grid grid-cols-2 gap-3">

          {presets.map((preset) => {
            const isActive =
              theme.background === preset.background &&
              theme.accent === preset.accent;

            return (
              <button
                key={preset.id}
                type="button"
                onClick={() =>
                  applyPreset(preset)
                }
                className={`overflow-hidden rounded-2xl border text-left transition ${
                  isActive
                    ? "border-violet-500 ring-2 ring-violet-200"
                    : "border-gray-200 hover:border-violet-300"
                }`}
              >
                <div
                  className="flex h-20 items-center justify-center text-3xl"
                  style={{
                    background: `linear-gradient(135deg, ${preset.background}, ${preset.secondary})`,
                  }}
                >
                  {preset.icon}
                </div>

                <div className="bg-white px-3 py-2">
                  <p className="text-xs font-black text-gray-800">
                    {preset.name}
                  </p>
                </div>
              </button>
            );
          })}

        </div>
      </div>

      {/* Background Color */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Background
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <input
            type="color"
            value={theme.background}
            onChange={(e) =>
              updateTheme(
                "background",
                e.target.value
              )
            }
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-bold text-gray-700">
              Background Color
            </p>

            <p className="text-xs text-gray-400">
              {theme.background}
            </p>
          </div>

        </div>
      </div>

      {/* Accent Color */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Accent
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <input
            type="color"
            value={theme.accent}
            onChange={(e) =>
              updateTheme(
                "accent",
                e.target.value
              )
            }
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-bold text-gray-700">
              Accent Color
            </p>

            <p className="text-xs text-gray-400">
              {theme.accent}
            </p>
          </div>

        </div>
      </div>

      {/* Secondary Color */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Secondary
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <input
            type="color"
            value={theme.secondary}
            onChange={(e) =>
              updateTheme(
                "secondary",
                e.target.value
              )
            }
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-bold text-gray-700">
              Secondary Color
            </p>

            <p className="text-xs text-gray-400">
              {theme.secondary}
            </p>
          </div>

        </div>
      </div>

      {/* Text Color */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Text
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <input
            type="color"
            value={theme.text}
            onChange={(e) =>
              updateTheme(
                "text",
                e.target.value
              )
            }
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-bold text-gray-700">
              Text Color
            </p>

            <p className="text-xs text-gray-400">
              {theme.text}
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}

export default ThemeTool;