import { useNavigate } from "react-router-dom";
import Button from "../common/Button";
function Hero() {
        const navigate = useNavigate();
  return (
    <section className="bg-gradient-to-br from-violet-50 via-white to-pink-50">
    {/* //   <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row"> */}
     <div className="relative z-10 mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-between gap-12 px-6 py-16 lg:flex-row">
        {/* LEFT SIDE */}
        <div className="max-w-2xl">

          <span className="inline-block rounded-full bg-violet-100 px-4 py-2 text-sm font-semibold text-violet-700">
            ✨ India's #1 Celebration Builder
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 lg:text-6xl">
            Create Beautiful
            <span className="block text-violet-600">
              Celebration Pages
            </span>
            in Minutes.
          </h1>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            Create personalized Birthday, Anniversary,
            Wedding and Invitation pages with music,
            countdown, gallery and beautiful themes.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">

             <Button
              onClick={() => navigate("/create/events")}
            >
              ✨ Start Creating
            </Button>

            <Button variant="outline">
                🎨 Browse Templates
            </Button>
          </div>


          

          <div className="mt-8 flex flex-wrap gap-6 text-sm font-medium text-gray-500">

            <span>⚡ 2 Minutes</span>

            <span>🎵 Music</span>

            <span>⏳ Countdown</span>

            <span>🎂 Free Demo</span>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="relative">

          <div className="w-[340px] rounded-[40px] border bg-white p-6 shadow-2xl">

            <div className="text-center">

              <p className="text-xs uppercase tracking-widest text-violet-500">
                wishversa.com/c/aarav
              </p>

              <div className="mx-auto mt-5 flex h-28 w-28 items-center justify-center rounded-full bg-violet-100 text-5xl">
                🎂
              </div>

              <h2 className="mt-5 text-2xl font-bold">
                Happy Birthday
              </h2>

              <p className="text-gray-500">
                Aarav Turns 21
              </p>

            </div>

            <div className="mt-8 rounded-2xl bg-violet-50 p-4">

              <p className="font-semibold">
                ⏳ Countdown
              </p>

              <h3 className="mt-2 text-3xl font-bold text-violet-600">
                02 : 14 : 32
              </h3>

            </div>

            <div className="mt-5 flex items-center justify-between rounded-2xl bg-gray-100 p-4">

              <span>🎵 Perfect Song</span>

              <span className="rounded-full bg-green-100 px-3 py-1 text-xs text-green-700">
                Playing
              </span>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;