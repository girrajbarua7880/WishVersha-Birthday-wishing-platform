function TextTool({ wish, updateWish }) {
  return (
    <div className="space-y-6">

      {/* Recipient */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Recipient Name
        </label>

        <input
          type="text"
          value={wish?.recipient || ""}
          onChange={(e) =>
            updateWish("recipient", e.target.value)
          }
          placeholder="e.g. Rahul"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
        />

        <p className="mt-1.5 text-xs text-gray-400">
          Who is this wish for?
        </p>
      </div>

      {/* Sender */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Your Name
        </label>

        <input
          type="text"
          value={wish?.sender || ""}
          onChange={(e) =>
            updateWish("sender", e.target.value)
          }
          placeholder="e.g. Girraj"
          className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm outline-none transition focus:border-violet-500 focus:bg-white"
        />
      </div>

      {/* Main Message */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Main Message
        </label>

        <textarea
          rows={5}
          value={wish?.message || ""}
          onChange={(e) =>
            updateWish("message", e.target.value)
          }
          placeholder="Write your main message..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
        />

        <p className="mt-1.5 text-xs text-gray-400">
          This message appears in the opening section.
        </p>
      </div>

      {/* Personal Letter */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Personal Letter
        </label>

        <textarea
          rows={7}
          value={wish?.letter || ""}
          onChange={(e) =>
            updateWish("letter", e.target.value)
          }
          placeholder="Write something heartfelt..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
        />
      </div>

      {/* Secret Message */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Secret Message
        </label>

        <textarea
          rows={5}
          value={wish?.secretMessage || ""}
          onChange={(e) =>
            updateWish(
              "secretMessage",
              e.target.value
            )
          }
          placeholder="Write a secret message..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
        />

        <p className="mt-1.5 text-xs text-gray-400">
          This message will appear in the secret section.
        </p>
      </div>

      {/* Final Wish */}

      <div>
        <label className="mb-2 block text-sm font-bold text-gray-800">
          Final Wish
        </label>

        <textarea
          rows={5}
          value={wish?.finalMessage || ""}
          onChange={(e) =>
            updateWish(
              "finalMessage",
              e.target.value
            )
          }
          placeholder="Write your final wish..."
          className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500 focus:bg-white"
        />
      </div>

    </div>
  );
}

export default TextTool;