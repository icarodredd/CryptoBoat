export default function Footer() {
  return (
    <footer className="border border-gray-900 rounded-lg m-4">
      <div className="w-full max-w-screen-xl mx-auto  p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <h1 className="text-2xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            ⚓ CriptoBoat
          </h1>
          <ul className="flex flex-wrap items-center mb-2 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                href="/about"
                className="font-bold me-4 md:me-6 from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent"
              >
                About
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="/about" className="hover:underline">
            icarodredd™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
}
