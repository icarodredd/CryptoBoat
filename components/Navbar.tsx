"use client";

import { useEffect, useState } from "react";

interface CryptoData {
  data: [{ name: string; values: { USD: { price: number } } }];
}

export default function Navbar() {
  const [click, setClick] = useState(false);

  return (
    <>
      {click && <SearchCrypto setClick={setClick} />}
      <div className="p-4 rounded-b-3xl flex justify-between shadow-sm shadow-gray-700">
        <h1 className="text-2xl p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
          ⚓ CriptoBoat
        </h1>
        <div className="flex gap-2 items-center">
          <button
            onClick={() => setClick(true)}
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

export function SearchCrypto({ setClick }: any) {
  const [value, setValue] = useState("");
  const [result, setResult] = useState<CryptoData>();

  useEffect(() => {
    fetch(
      `https://api.cryptorank.io/v1/currencies?api_key=941e1f87226bb8f4285a7f448a59172b6bd7260c36a4585692365e6d4d2e&symbols=${value}`
    )
      .then((res) => res.json())
      .then((data: any) => {
        if (data.data[0]) setResult(data);
      });
  }, [value]);

  return (
    <div className="fixed w-screen h-screen flex justify-center items-center">
      <div className="w-6/12 h-80 bg-black rounded-xl border border-gray-900">
        <div className="flex justify-between p-4  border-b border-gray-900">
          <h1 className="text-center p-4 text-3xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
            Search a Crypto:
          </h1>
          <button onClick={() => setClick(false)} className="font-bold">
            X
          </button>
        </div>
        <div className="flex h-24 justify-center items-center">
          <input
            placeholder="Type a symbol."
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value.toLocaleUpperCase())}
            className="bg-gray-800 w-6/12 rounded-3xl p-2"
          />
        </div>
        <div className="flex justify-center gap-4 ">
          {result ? (
            <>
              <h1>{result.data[0].name}</h1>
              <h1>USD: {result.data[0].values.USD.price.toPrecision(5)}</h1>
            </>
          ) : (
            <>
              <h1>Nothing here...</h1>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
