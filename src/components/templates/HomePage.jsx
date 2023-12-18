import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";

function HomePage() {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=20&page=1&x_cg_demo_api_key=CG-FKCtssNj4VA4Vj197wM1smE2"
    ).then((res) => res.json().then((json) => setCoins(json)));
  }, []);
  return (
    <div>
      <TableCoins coins={coins} />
    </div>
  );
}

export default HomePage;
