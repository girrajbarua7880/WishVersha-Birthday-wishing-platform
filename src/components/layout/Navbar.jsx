// function Navbar() {
//   return (
//     <nav className="bg-white shadow-md">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="flex items-center justify-between h-16">

//           {/* Logo */}
//           <div>
//             <h1 className="text-2xl font-bold text-purple-600">
//               WishVersa
//             </h1>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center gap-8">

//             <a href="/">Home</a>

//             <a href="/">Features</a>

//             <a href="/">Pricing</a>

//             <a href="/">Templates</a>

//           </div>

//           {/* Buttons */}
//           <div className="flex gap-3">

//             <button className="px-4 py-2 rounded-lg">
//               Login
//             </button>

//             <button className="bg-purple-600 text-white px-5 py-2 rounded-lg hover:bg-purple-700 transition">
//               Sign Up
//             </button>

//           </div>

//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
import { FaGift } from "react-icons/fa";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className="max-w-7xl mx-auto h-20 px-6 flex items-center justify-between">

        {/* Logo */}

        <div className="flex items-center gap-3 cursor-pointer">

          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-purple-600 to-pink-500 flex items-center justify-center text-white shadow-lg">

            <FaGift size={20} />

          </div>

          <div>

            <h1 className="text-2xl font-bold text-gray-800">
              WishVersa
            </h1>

            <p className="text-xs text-gray-500">
              Celebrate Every Moment
            </p>

          </div>

        </div>

        {/* Menu */}

        <nav className="hidden lg:flex items-center gap-10">

          <a
            href="#"
            className="font-medium text-gray-600 hover:text-purple-600 transition"
          >
            Home
          </a>

          <a
            href="#"
            className="font-medium text-gray-600 hover:text-purple-600 transition"
          >
            Templates
          </a>

          <a
            href="#"
            className="font-medium text-gray-600 hover:text-purple-600 transition"
          >
            Features
          </a>

          <a
            href="#"
            className="font-medium text-gray-600 hover:text-purple-600 transition"
          >
            Explore
          </a>

        </nav>

        {/* Right */}

        <div className="hidden lg:flex items-center gap-4">

          <button className="font-medium text-gray-700 hover:text-purple-600 transition">

            Login

          </button>

          <button className="px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold shadow-lg hover:scale-105 transition duration-300">

            Get Started

          </button>

        </div>

        {/* Mobile */}

        <button className="lg:hidden text-3xl">

          ☰

        </button>

      </div>
    </header>
  );
}

export default Navbar;