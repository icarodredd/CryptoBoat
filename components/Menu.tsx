"use client";

export default function Menu() {
  return (
    <>
      <div>
        <div className="flex justify-center h-72 items-center">
          <img className=" w-44 h-48" src="ethereum.png" alt="" />
        </div>
        <h1 className="text-4xl text-center font-black from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          The price of cryptocurrencies in one place.
        </h1>
      </div>
      <div className="divider h-64"></div>
    </>
  );
}
