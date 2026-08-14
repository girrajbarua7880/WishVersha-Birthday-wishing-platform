import { useNavigate, useParams } from "react-router-dom";
import TemplateCard from "../cards/TemplateCard";
import templates from "./templates";

function TemplateSelector() {
  const navigate = useNavigate();
  const { event } = useParams();

  // Selected event ke templates
  const eventTemplates = templates.filter(
    (template) => template.event === event
  );

  // Event name
  const eventName = event
    ? event.charAt(0).toUpperCase() + event.slice(1)
    : "Event";

  // Template select
  const handleTemplateSelect = (template) => {
    navigate(`/create/${event}/${template.slug}`);
  };

  // Back to event selector
  const handleBack = () => {
    navigate("/create/events");
  };

  return (
    <main className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* ================= HEADER ================= */}
        <div className="mx-auto max-w-3xl text-center">

          <button
            type="button"
            onClick={handleBack}
            className="mb-8 text-sm font-bold text-white/40 transition hover:text-white"
          >
            ← Change Event
          </button>

          <p className="text-xs font-bold uppercase tracking-[0.3em] text-violet-400 sm:text-sm">
            {eventName} Templates
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Choose Your Template ✨
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Choose a beautiful template and make it your own.
            You can personalize everything in the next step.
          </p>
        </div>

        {/* ================= TEMPLATE GRID ================= */}
        {eventTemplates.length > 0 ? (
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {eventTemplates.map((template) => (
              <TemplateCard
                key={template.id}
                template={template}
                onSelect={handleTemplateSelect}
              />
            ))}
          </div>
        ) : (
          /* ================= EMPTY STATE ================= */
          <div className="mx-auto mt-16 max-w-lg rounded-[32px] border border-white/10 bg-white/[0.04] p-10 text-center">

            <div className="text-6xl">
              🚧
            </div>

            <h2 className="mt-6 text-2xl font-black">
              Templates Coming Soon
            </h2>

            <p className="mt-3 text-sm leading-6 text-white/45">
              We are preparing beautiful templates for this
              celebration.
            </p>

            <button
              type="button"
              onClick={handleBack}
              className="mt-7 rounded-xl bg-white px-6 py-3 text-sm font-black text-slate-950 transition hover:scale-105"
            >
              ← Choose Another Event
            </button>

          </div>
        )}

      </div>
    </main>
  );
}

export default TemplateSelector;