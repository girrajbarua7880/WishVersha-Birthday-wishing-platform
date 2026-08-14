function SectionTool({ wish, updateWish }) {
  const sections = [
    {
      id: "welcome",
      title: "Welcome",
      description: "Opening birthday message",
      icon: "🎂",
      required: true,
    },
    {
      id: "gift",
      title: "Gift",
      description: "Interactive gift surprise",
      icon: "🎁",
      required: false,
    },
    {
      id: "letter",
      title: "Letter",
      description: "Personal letter section",
      icon: "💌",
      required: false,
    },
    {
      id: "memories",
      title: "Memories",
      description: "Photos and beautiful memories",
      icon: "📸",
      required: false,
    },
    {
      id: "reasons",
      title: "Reasons",
      description: "Why this person is special",
      icon: "💜",
      required: false,
    },
    {
      id: "secret",
      title: "Secret",
      description: "Hidden secret message",
      icon: "🔐",
      required: false,
    },
    {
      id: "celebration",
      title: "Celebration",
      description: "Make a wish and celebrate",
      icon: "🎉",
      required: false,
    },
    {
      id: "final",
      title: "Final Wish",
      description: "Final birthday message",
      icon: "✨",
      required: true,
    },
  ];

  /*
   * Default sections
   * Agar wish.sections available nahi hai,
   * to sabhi sections enabled rahenge.
   */
  const defaultSections = sections.map(
    (section) => section.id
  );

  const enabledSections = Array.isArray(wish?.sections)
    ? wish.sections
    : defaultSections;

  /*
   * Check whether section is enabled
   */
  const isEnabled = (sectionId) => {
    return enabledSections.includes(sectionId);
  };

  /*
   * Toggle section
   */
  const toggleSection = (section) => {
    /*
     * Required section ko disable nahi karenge.
     */
    if (section.required) {
      return;
    }

    const currentlyEnabled = isEnabled(section.id);

    let updatedSections;

    if (currentlyEnabled) {
      updatedSections = enabledSections.filter(
        (id) => id !== section.id
      );
    } else {
      /*
       * Original order maintain karne ke liye
       * section ko uski original position ke according
       * add karenge.
       */
      updatedSections = sections
        .filter((item) => {
          if (item.id === section.id) {
            return true;
          }

          return enabledSections.includes(item.id);
        })
        .map((item) => item.id);
    }

    updateWish("sections", updatedSections);
  };

  /*
   * Enable all sections
   */
  const enableAll = () => {
    updateWish(
      "sections",
      sections.map((section) => section.id)
    );
  };

  /*
   * Basic version
   * Sirf important sections
   */
  const enableBasic = () => {
    updateWish("sections", [
      "welcome",
      "letter",
      "final",
    ]);
  };

  /*
   * Remove optional sections
   */
  const disableOptional = () => {
    updateWish(
      "sections",
      sections
        .filter((section) => section.required)
        .map((section) => section.id)
    );
  };

  /*
   * Count
   */
  const activeCount = sections.filter(
    (section) => isEnabled(section.id)
  ).length;

  const optionalCount = sections.filter(
    (section) => !section.required
  ).length;

  return (
    <div className="space-y-6">

      {/* =====================================
          HEADER
      ====================================== */}

      <div>
        <p className="text-sm font-black text-gray-900">
          Wish Sections 📑
        </p>

        <p className="mt-1 text-xs leading-5 text-gray-400">
          Choose which sections should appear in
          your final wish experience.
        </p>
      </div>

      {/* =====================================
          ACTIVE SECTION COUNT
      ====================================== */}

      <div className="flex items-center justify-between rounded-2xl border border-violet-100 bg-violet-50 p-4">

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-violet-500">
            Active Sections
          </p>

          <p className="mt-1 text-sm font-black text-gray-900">
            {activeCount} of {sections.length}
          </p>
        </div>

        <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-lg font-black text-violet-600 shadow-sm">
          {activeCount}
        </div>

      </div>

      {/* =====================================
          QUICK ACTIONS
      ====================================== */}

      <div>
        <p className="mb-3 text-xs font-bold uppercase tracking-wider text-gray-400">
          Quick Settings
        </p>

        <div className="grid grid-cols-2 gap-2">

          <button
            type="button"
            onClick={enableAll}
            className="rounded-xl bg-violet-100 px-3 py-2.5 text-xs font-black text-violet-700 transition hover:bg-violet-200"
          >
            Enable All
          </button>

          <button
            type="button"
            onClick={enableBasic}
            className="rounded-xl bg-gray-100 px-3 py-2.5 text-xs font-black text-gray-700 transition hover:bg-gray-200"
          >
            Basic
          </button>

        </div>

        <button
          type="button"
          onClick={disableOptional}
          className="mt-2 w-full rounded-xl border border-gray-200 bg-white px-3 py-2.5 text-xs font-black text-gray-500 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
        >
          Remove Optional Sections
        </button>
      </div>

      {/* =====================================
          SECTION LIST
      ====================================== */}

      <div>

        <div className="mb-3 flex items-center justify-between">

          <p className="text-xs font-bold uppercase tracking-wider text-gray-400">
            Sections
          </p>

          <p className="text-[10px] font-bold text-gray-400">
            {optionalCount} optional
          </p>

        </div>

        <div className="space-y-2">

          {sections.map((section) => {
            const enabled = isEnabled(section.id);

            return (
              <button
                key={section.id}
                type="button"
                onClick={() =>
                  toggleSection(section)
                }
                disabled={section.required}
                className={`flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition ${
                  enabled
                    ? "border-violet-200 bg-violet-50"
                    : "border-gray-200 bg-gray-50"
                } ${
                  section.required
                    ? "cursor-default"
                    : "cursor-pointer hover:border-violet-300"
                }`}
              >

                {/* ICON */}

                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-xl transition ${
                    enabled
                      ? "bg-white shadow-sm"
                      : "bg-gray-200 grayscale"
                  }`}
                >
                  {section.icon}
                </div>

                {/* CONTENT */}

                <div className="min-w-0 flex-1">

                  <div className="flex items-center gap-2">

                    <p
                      className={`text-sm font-black ${
                        enabled
                          ? "text-gray-900"
                          : "text-gray-500"
                      }`}
                    >
                      {section.title}
                    </p>

                    {section.required && (
                      <span className="rounded-full bg-gray-200 px-1.5 py-0.5 text-[9px] font-bold uppercase text-gray-500">
                        Required
                      </span>
                    )}

                  </div>

                  <p className="mt-0.5 truncate text-xs text-gray-400">
                    {section.description}
                  </p>

                </div>

                {/* TOGGLE */}

                <div
                  className={`relative h-6 w-11 shrink-0 rounded-full transition ${
                    enabled
                      ? "bg-violet-600"
                      : "bg-gray-300"
                  }`}
                >

                  <div
                    className={`absolute top-1 h-4 w-4 rounded-full bg-white shadow-sm transition-all ${
                      enabled
                        ? "left-6"
                        : "left-1"
                    }`}
                  />

                </div>

              </button>
            );
          })}

        </div>

      </div>

      {/* =====================================
          INFO
      ====================================== */}

      <div className="rounded-2xl border border-gray-100 bg-gray-50 p-4">

        <div className="flex gap-3">

          <div className="text-lg">
            💡
          </div>

          <div>
            <p className="text-xs font-black text-gray-700">
              How it works
            </p>

            <p className="mt-1 text-xs leading-5 text-gray-400">
              Disabled sections will not appear in
              the final wish. Required sections are
              always kept active.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default SectionTool;