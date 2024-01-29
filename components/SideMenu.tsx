export default function SideMenu() {
  return (
    <div className="bg-black h-screen w-2/12 rounded-r-3xl border-r border-gray-900">
      <div className="flex h-screen justify-center items-center">
        <div>
          <h1 className="mb-4 text-2xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent ">
            ⚓ CryptoBoat
          </h1>
          <h1 className="text-base font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent hover:transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
            Search a Crypto
          </h1>
          <h1 className="text-base font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent hover:transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300">
            About
          </h1>
        </div>
      </div>
    </div>
  );
}
