function HowItWorksCard({ step, title, description }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      
      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-100 text-2xl font-bold text-violet-600">
        {step}
      </div>

      <h3 className="mt-6 text-2xl font-semibold text-gray-900">
        {title}
      </h3>

      <p className="mt-4 text-gray-600 leading-7">
        {description}
      </p>

    </div>
  );
}

export default HowItWorksCard;