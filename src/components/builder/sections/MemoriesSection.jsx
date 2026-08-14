import { useState } from "react";

function MemoriesSection({ data }) {
  const photos = Array.isArray(data?.photos) ? data.photos : [];
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-slate-950 px-6 py-20 text-white">
      {/* Background */}
      <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
      <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-pink-500/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-5xl">📸</div>

          <p className="mt-6 text-xs font-bold uppercase tracking-[0.3em] text-violet-400">
            Little Moments
          </p>

          <h2 className="mt-3 text-4xl font-black sm:text-5xl">
            {data?.title || "Beautiful Memories 📸"}
          </h2>

          <p className="mt-5 text-sm leading-7 text-white/50 sm:text-base">
            {data?.subtitle ||
              "Some moments are worth keeping forever."}
          </p>
        </div>

        {/* Photos */}
        {photos.length > 0 ? (
          <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
            {photos.map((photo, index) => {
              const source =
                typeof photo === "string"
                  ? photo
                  : photo?.url || photo?.src;

              if (!source) return null;

              return (
                <button
                  key={`${source}-${index}`}
                  type="button"
                  onClick={() => setSelectedPhoto(source)}
                  className="group relative aspect-square overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] focus:outline-none"
                >
                  <img
                    src={source}
                    alt={`Memory ${index + 1}`}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-black/0 transition group-hover:bg-black/20" />

                  <span className="absolute bottom-3 right-3 rounded-full bg-black/40 px-3 py-1 text-xs font-bold opacity-0 backdrop-blur-md transition group-hover:opacity-100">
                    View
                  </span>
                </button>
              );
            })}
          </div>
        ) : (
          <div className="mx-auto mt-12 max-w-xl rounded-[32px] border border-white/10 bg-white/[0.05] p-10 text-center backdrop-blur-xl">
            <div className="text-6xl">📷</div>

            <h3 className="mt-5 text-xl font-black">
              Your Memories
            </h3>

            <p className="mt-3 text-sm leading-6 text-white/40">
              Your favorite photos will appear here.
            </p>
          </div>
        )}

        {/* Memory Count */}
        {photos.length > 0 && (
          <p className="mt-8 text-center text-xs font-bold uppercase tracking-[0.2em] text-white/30">
            {photos.length} {photos.length === 1 ? "Memory" : "Memories"}
          </p>
        )}
      </div>

      {/* Fullscreen Preview */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-5 backdrop-blur-md"
          onClick={() => setSelectedPhoto(null)}
        >
          <button
            type="button"
            onClick={() => setSelectedPhoto(null)}
            className="absolute right-5 top-5 rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white hover:bg-white/20"
          >
            ✕
          </button>

          <img
            src={selectedPhoto}
            alt="Selected memory"
            className="max-h-[85vh] max-w-full rounded-3xl object-contain shadow-2xl"
          />
        </div>
      )}
    </section>
  );
}

export default MemoriesSection;