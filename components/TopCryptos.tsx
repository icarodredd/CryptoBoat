"use client";
import useSWR from "swr";

export default function TopCryptos() {
  const fetcher = () =>
    fetch(
      `https://api.cryptorank.io/v1/currencies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&symbols=BTC,ETH,MKR,BNB,BCH,LTC`
    ).then((res) => res.json());
  const { data } = useSWR(
    `https://api.cryptorank.io/v1/currencies?api_key=${process.env.NEXT_PUBLIC_API_KEY}&symbols=BTC,ETH,MKR,BNB,BCH,LTC`,
    fetcher
  );

  return (
    <>
      <h1 className="text-2xl text-center p-4 font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
        Todays Cryptocurrency Prices:
      </h1>
      <div className="flex justify-center">
        <div className="w-8/12 border border-gray-900">
          <div className="grid grid-cols-3 border-b border-gray-900 p-4">
            <h1 className="text-center text-xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Name:
            </h1>
            <h1 className="text-center text-xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Symbol:
            </h1>
            <h1 className="text-center text-xl font-bold from-purple-600 via-pink-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent">
              Price:
            </h1>
          </div>
          {data &&
            data.data.map((item: any) => {
              return (
                <div key={item.id} className="grid grid-cols-3 p-4">
                  <h1 className="text-center font-bold text-white ">
                    {item.name}
                  </h1>
                  <h1 className="text-center font-bold text-white">
                    {item.symbol}
                  </h1>
                  <h1 className="text-center font-bold text-white">
                    USD: {item.values.USD.price.toPrecision(6)}
                  </h1>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
}
