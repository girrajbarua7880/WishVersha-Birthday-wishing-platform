import { useState } from "react";

const CreateWishPage = () => {
  const [currentStep, setCurrentStep] = useState(1);

  return (
    <main className="min-h-screen bg-gray-50">
      <section className="mx-auto max-w-7xl px-4 py-6">

        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold">
            Create Your Wish
          </h1>

          <p className="mt-2 text-gray-500">
            Build a beautiful wish in just a few simple steps.
          </p>
        </div>

        {/* Stepper */}
        <div className="mb-8 rounded-xl border bg-white p-4 shadow-sm">
          Step {currentStep} of 3
        </div>

        {/* Current Step */}
        <div className="rounded-xl border bg-white p-6 shadow-sm">

          {currentStep === 1 && (
            <div>
              <h2 className="text-xl font-semibold">
                Select Category
              </h2>

              <p className="mt-2 text-gray-500">
                Category Selector will be added here.
              </p>
            </div>
          )}

          {currentStep === 2 && (
            <div>
              <h2 className="text-xl font-semibold">
                Select Mode
              </h2>

              <p className="mt-2 text-gray-500">
                Quick / Customize selector will be added here.
              </p>
            </div>
          )}

          {currentStep === 3 && (
            <div>
              <h2 className="text-xl font-semibold">
                Builder
              </h2>

              <p className="mt-2 text-gray-500">
                Builder Engine will be added here.
              </p>
            </div>
          )}

        </div>

        {/* Footer Buttons */}
        <div className="mt-8 flex justify-between">

          <button
            disabled={currentStep === 1}
            onClick={() => setCurrentStep((prev) => prev - 1)}
            className="rounded-lg border px-5 py-2 disabled:opacity-50"
          >
            Back
          </button>

          <button
            disabled={currentStep === 3}
            onClick={() => setCurrentStep((prev) => prev + 1)}
            className="rounded-lg bg-black px-5 py-2 text-white disabled:opacity-50"
          >
            Continue
          </button>

        </div>

      </section>
    </main>
  );
};

export default CreateWishPage;