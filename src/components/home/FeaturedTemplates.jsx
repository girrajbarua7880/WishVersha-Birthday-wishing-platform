import TemplateCard from "../cards/TemplateCard";
import templates from "../../data/templates";

function FeaturedTemplates() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Featured Templates
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Start with a beautiful template and customize it your way.
          </p>
        </div>

        {/* Templates Grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {templates.map((template) => (
            <TemplateCard
              key={template.id}
              title={template.title}
              category={template.category}
              image={template.image}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default FeaturedTemplates;
