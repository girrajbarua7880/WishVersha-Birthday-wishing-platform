// import { useNavigate } from "react-router-dom";
// import CategoryCard from "../cards/CategoryCard";
// import categories from "../../data/categories";

// function EventSelector() {
//   const navigate = useNavigate();

//   const handleEventSelect = (category) => {
//     navigate(`/create/${category.slug}/templates`);
//   };

//   return (
//     <main className="min-h-[100svh] bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-16">
//       <div className="mx-auto max-w-7xl">

//         {/* Header */}
//         <div className="mx-auto max-w-2xl text-center">
//           <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
//             Create Your Wish
//           </p>

//           <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
//             Choose Your Event 🎉
//           </h1>

//           <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
//             Choose an occasion and discover beautiful templates
//             made specially for your celebration.
//           </p>
//         </div>

//         {/* Event Categories */}
//         <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
//           {categories.map((category) => (
//             <button
//               key={category.id}
//               type="button"
//               onClick={() => handleEventSelect(category)}
//               className="group text-left"
//             >
//               <div className="rounded-[28px] bg-white p-2 transition duration-300 hover:-translate-y-2 hover:shadow-2xl">
//                 <CategoryCard
//                   title={category.title}
//                   icon={category.icon}
//                 />

//                 <div className="px-4 pb-4 pt-2">
//                   <span className="text-xs font-bold text-violet-600 transition group-hover:translate-x-1">
//                     Explore Templates →
//                   </span>
//                 </div>
//               </div>
//             </button>
//           ))}
//         </div>

//       </div>
//     </main>
//   );
// }

// export default EventSelector;


import { useNavigate } from "react-router-dom";
import CategoryCard from "../cards/CategoryCard";
import categories from "../../data/categories";

function EventSelector() {
  const navigate = useNavigate();

  const handleEventSelect = (category) => {
    navigate(`/create/${category.slug}/templates`);
  };

  return (
    <main className="min-h-[100svh] bg-slate-950 px-4 py-12 text-white sm:px-6 sm:py-16">
      <div className="mx-auto max-w-7xl">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.25em] text-violet-400">
            Create Your Wish
          </p>

          <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            Choose Your Event 🎉
          </h1>

          <p className="mx-auto mt-5 max-w-xl text-sm leading-7 text-white/50 sm:text-base">
            Choose an occasion and discover beautiful templates
            made specially for your celebration.
          </p>
        </div>

        {/* Event Categories */}
        <div className="mt-12 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-3 lg:grid-cols-4">
          {categories.map((category) => (
            <div
              key={category.id}
              className="group"
            >
              <CategoryCard
                title={category.title}
                icon={category.icon}
                onClick={() => handleEventSelect(category)}
              />

              <div className="px-4 pt-3">
                <span className="text-xs font-bold text-violet-400 transition group-hover:translate-x-1">
                  Explore Templates →
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default EventSelector;