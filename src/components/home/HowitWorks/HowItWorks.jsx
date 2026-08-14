import howItWorks from "../../../data/howItWorks";
import HowItWorksCard from "./HowItWorksCard";

function HowItWorks() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            How It Works
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Create your celebration page in just three simple steps.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {howItWorks.map((item) => (
            <HowItWorksCard
              key={item.id}
              step={item.step}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default HowItWorks;