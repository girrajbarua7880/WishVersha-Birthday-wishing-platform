function EditorToolbar({
  activeTool,
  onToolChange,
}) {
  const tools = [
    {
      id: "text",
      label: "Text",
      icon: "✏️",
    },
    {
      id: "photo",
      label: "Photos",
      icon: "📸",
    },
    {
      id: "theme",
      label: "Theme",
      icon: "🎨",
    },
    {
      id: "background",
      label: "Background",
      icon: "🖼️",
    },
    {
      id: "section",
      label: "Sections",
      icon: "📑",
    },
  ];

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex gap-1 overflow-x-auto p-2">
        {tools.map((tool) => {
          const active = activeTool === tool.id;

          return (
            <button
              key={tool.id}
              type="button"
              onClick={() => onToolChange(tool.id)}
              className={`flex min-w-[76px] flex-col items-center justify-center gap-1 rounded-xl px-3 py-2.5 text-xs font-bold transition ${
                active
                  ? "bg-violet-100 text-violet-700"
                  : "text-gray-500 hover:bg-gray-100 hover:text-gray-900"
              }`}
            >
              <span className="text-lg">
                {tool.icon}
              </span>

              <span>{tool.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default EditorToolbar;