"use client";
import { useEffect, useState } from "react";

export default function TopCryptos() {
  interface CryptoData {
    data: {
      0: { name: string };
    };
  }
  const [crypto, setCrypto] = useState<CryptoData>();
  useEffect(() => {
    fetch(
      "https://api.cryptorank.io/v1/currencies?api_key=941e1f87226bb8f4285a7f448a59172b6bd7260c36a4585692365e6d4d2e&symbols=BTC,ETH,MKR,BNB,BCH,LTC"
    )
      .then((data) => data.json())
      .then((dataJson) => setCrypto(dataJson));
  }, []);
  return <>{crypto && console.log(crypto.data[0].name)}</>;
}
