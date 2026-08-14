import Button from "../common/Button";

function Footer() {
  return (
    <footer className="mt-20 bg-gray-950 text-gray-300">

      {/* CTA Section */}

      <div className="border-b border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-14 text-center lg:flex-row lg:text-left">

          <div>

            <h2 className="text-4xl font-bold text-white">
              Ready to Create Your Celebration?
            </h2>

            <p className="mt-3 text-gray-400">
              Build beautiful celebration pages in minutes and share them
              with your loved ones.
            </p>

          </div>

          <Button>
            🚀 Start for Free
          </Button>

        </div>

      </div>

      {/* Footer Content */}

      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-2 lg:grid-cols-4">

        {/* Logo */}

        <div>

          <h2 className="text-3xl font-bold text-white">
            WishVersa
          </h2>

          <p className="mt-4 leading-7 text-gray-400">
            Create premium celebration pages for birthdays,
            anniversaries, weddings and every special moment.
          </p>

        </div>

        {/* Product */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Product
          </h3>

          <ul className="space-y-3">

            <li>Templates</li>

            <li>Features</li>

            <li>Pricing</li>

            <li>Community</li>

          </ul>

        </div>

        {/* Resources */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Resources
          </h3>

          <ul className="space-y-3">

            <li>Blog</li>

            <li>Help Center</li>

            <li>Contact</li>

            <li>Privacy Policy</li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h3 className="mb-4 text-lg font-semibold text-white">
            Company
          </h3>

          <ul className="space-y-3">

            <li>About</li>

            <li>Careers</li>

            <li>Terms</li>

            <li>Support</li>

          </ul>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-800">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 py-6 text-sm md:flex-row">

          <p>
            © 2026 WishVersa. Made with ❤️ in India.
          </p>

          <div className="flex gap-5 text-xl">

            <span>📷</span>

            <span>🐦</span>

            <span>💼</span>

            <span>📧</span>

          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;