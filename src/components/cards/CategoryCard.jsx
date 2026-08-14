// function CategoryCard({ title, icon }) {
//   return (
//     <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-xl">
//       <div className="mb-4 text-5xl">{icon}</div>

//       <h3 className="text-lg font-semibold text-gray-800">
//         {title}
//       </h3>
//     </div>
//   );
// }

// export default CategoryCard;

// import { useNavigate } from "react-router-dom";

// function CategoryCard({ title, icon, onClick }) {
//   const navigate = useNavigate();
//   return (
//     <button
//       type="button"
//       onClick={() => navigate("/create/mode")}
//       className="group w-full rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-300 hover:shadow-xl"
//     >
//       <div className="flex flex-col items-center">

//         {/* Icon */}
//         <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-violet-50 text-4xl transition group-hover:scale-110">
//           {icon}
//         </div>

//         {/* Title */}
//         <h3 className="mt-5 text-lg font-semibold text-gray-800">
//           {title}
//         </h3>

//       </div>
//     </button>
//   );
// }

// export default CategoryCard;


function CategoryCard({ title, icon, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group w-full rounded-3xl border border-gray-200 bg-white p-8 text-center transition-all duration-200 hover:-translate-y-1 hover:border-gray-300 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-gray-300"
    >
      <div className="text-4xl transition-transform duration-200 group-hover:scale-110">
        {icon}
      </div>

      <h3 className="mt-4 text-lg font-bold text-gray-900">
        {title}
      </h3>
    </button>
  );
}

export default CategoryCard;