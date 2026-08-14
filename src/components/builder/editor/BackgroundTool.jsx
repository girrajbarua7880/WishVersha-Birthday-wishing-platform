function BackgroundTool({ wish, updateWish }) {
  const background = wish?.background || {
    type: "gradient",
    value: "from-pink-600 via-purple-700 to-indigo-900",
  };

  const updateBackground = (field, value) => {
    updateWish("background", {
      ...background,
      [field]: value,
    });
  };

  const presets = [
    {
      id: "pink-purple",
      name: "Pink Dream",
      type: "gradient",
      value: "from-pink-600 via-purple-700 to-indigo-900",
      preview:
        "linear-gradient(135deg, #db2777, #7e22ce, #312e81)",
    },
    {
      id: "sunset",
      name: "Sunset",
      type: "gradient",
      value: "from-orange-500 via-pink-600 to-purple-700",
      preview:
        "linear-gradient(135deg, #f97316, #db2777, #7e22ce)",
    },
    {
      id: "ocean",
      name: "Ocean",
      type: "gradient",
      value: "from-cyan-600 via-blue-700 to-indigo-900",
      preview:
        "linear-gradient(135deg, #0891b2, #1d4ed8, #312e81)",
    },
    {
      id: "forest",
      name: "Forest",
      type: "gradient",
      value: "from-emerald-600 via-teal-700 to-slate-900",
      preview:
        "linear-gradient(135deg, #059669, #0f766e, #0f172a)",
    },
    {
      id: "dark",
      name: "Midnight",
      type: "solid",
      value: "#020617",
      preview: "#020617",
    },
    {
      id: "light",
      name: "Soft White",
      type: "solid",
      value: "#f8fafc",
      preview: "#f8fafc",
    },
  ];

  const applyPreset = (preset) => {
    updateWish("background", {
      type: preset.type,
      value: preset.value,
    });
  };

  const isActive = (preset) => {
    return (
      background.type === preset.type &&
      background.value === preset.value
    );
  };

  return (
    <div className="space-y-6">

      {/* Header */}

      <div>
        <p className="text-sm font-black text-gray-900">
          Background 🖼️
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          Choose a background for your wish experience.
        </p>
      </div>

      {/* Presets */}

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Background Presets
        </p>

        <div className="grid grid-cols-2 gap-3">

          {presets.map((preset) => (
            <button
              key={preset.id}
              type="button"
              onClick={() => applyPreset(preset)}
              className={`overflow-hidden rounded-2xl border text-left transition ${
                isActive(preset)
                  ? "border-violet-500 ring-2 ring-violet-200"
                  : "border-gray-200 hover:border-violet-300"
              }`}
            >
              {/* Preview */}

              <div
                className="h-20"
                style={{
                  background: preset.preview,
                }}
              />

              {/* Name */}

              <div className="bg-white px-3 py-2">
                <p className="text-xs font-black text-gray-800">
                  {preset.name}
                </p>
              </div>
            </button>
          ))}

        </div>
      </div>

      {/* Custom Solid Color */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Custom Background
        </label>

        <div className="flex items-center gap-3 rounded-xl border border-gray-200 bg-gray-50 p-3">

          <input
            type="color"
            value={
              background.type === "solid"
                ? background.value
                : "#0f172a"
            }
            onChange={(e) =>
              updateBackground(
                "type",
                "solid"
              ) ||
              updateBackground(
                "value",
                e.target.value
              )
            }
            className="h-10 w-10 cursor-pointer rounded-lg border-0 bg-transparent p-0"
          />

          <div>
            <p className="text-xs font-bold text-gray-700">
              Solid Color
            </p>

            <p className="text-xs text-gray-400">
              {background.type === "solid"
                ? background.value
                : "Choose a color"}
            </p>
          </div>

        </div>
      </div>

      {/* Current Background */}

      <div className="rounded-2xl border border-gray-200 bg-gray-50 p-4">

        <div className="flex items-center justify-between">

          <div>
            <p className="text-xs font-bold text-gray-500">
              Current Background
            </p>

            <p className="mt-1 text-sm font-black text-gray-800">
              {background.type === "gradient"
                ? "Gradient"
                : "Solid Color"}
            </p>
          </div>

          <div
            className="h-10 w-10 rounded-xl border border-white shadow-sm"
            style={{
              background:
                background.type === "solid"
                  ? background.value
                  : undefined,
            }}
          >
            {background.type === "gradient" && (
              <div
                className={`h-full w-full rounded-xl bg-gradient-to-br ${background.value}`}
              />
            )}
          </div>

        </div>

      </div>

    </div>
  );
}

export default BackgroundTool;