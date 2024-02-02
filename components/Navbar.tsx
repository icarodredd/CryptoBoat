"use client";

export function SearchCrypto() {
  return (
    <div className="fixed w-screen h-screen flex justify-center items-center">
      <div className="w-6/12 h-80 bg-black rounded-xl border border-gray-900">
        <div className="flex justify-between p-4  border-b border-gray-900">
          <h1 className="text-center p-4 text-3xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Search a Crypto:
          </h1>
          <button className="font-bold">X</button>
        </div>

        <div className="flex h-32 justify-center items-center">
          <input type="text" className="bg-gray-800 w-6/12 rounded-3xl p-2" />
        </div>
      </div>
    </div>
  );
}

export default function Navbar() {
  return (
    <>
      <SearchCrypto />
      <div className="p-4 rounded-b-3xl flex justify-between shadow-sm shadow-gray-700">
        <h1 className="text-2xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          ⚓ CriptoBoat
        </h1>
        <div className="flex gap-2 items-center">
          <button
            className="p-2 hover:contrast-125 h-14 from-purple-600 rounded via-pink-600 to-blue-600 bg-gradient-to-r text-black font-bold text-sm"
            type="submit"
          >
            Search a Crypto
          </button>
          <button
            className="p-2 h-14 hover:contrast-125 from-purple-600 rounded via-pink-600 to-blue-600 bg-gradient-to-r text-black font-bold text-sm"
            type="submit"
          >
            About
          </button>
        </div>
      </div>
    </>
  );
}
