import { useNavigate } from "react-router-dom";
import CategoryCard from "../cards/CategoryCard";
import categories from "../../data/categories";

function EventCategories() {
  const navigate = useNavigate();

  const handleEventSelect = (category) => {
    navigate(`/create/quick/${category.slug}`);
  };

  return (
    <section className="min-h-[100svh] bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6">

        {/* Heading */}
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-black tracking-tight text-gray-900 sm:text-5xl">
            What Are We Celebrating? ✨
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-base text-gray-600 sm:text-lg">
            Pick an occasion to get started.
          </p>
        </div>

        {/* Categories */}
        <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <CategoryCard
              key={category.id}
              title={category.title}
              icon={category.icon}
              onClick={() => handleEventSelect(category)}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export default EventCategories;