export default function Navbar() {
  return (
    <div className="p-4 rounded-b-3xl flex justify-between shadow-sm shadow-gray-700">
      <h1 className="text-2xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        ⚓ CriptoBoat
      </h1>
      <div className="flex gap-2 items-center">
        <button
          className="p-2 h-14 from-purple-600 rounded via-pink-600 to-blue-600 bg-gradient-to-r text-black font-bold text-sm"
          type="submit"
        >
          Search a Crypto
        </button>
        <button
          className="p-2 h-14 from-purple-600 rounded via-pink-600 to-blue-600 bg-gradient-to-r text-black font-bold text-sm"
          type="submit"
        >
          About
        </button>
      </div>
    </div>
  );
}
