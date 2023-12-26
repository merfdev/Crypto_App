import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/pagination";
import Search from "../modules/Search";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  const [currency, setCurrency] = useState("usd");
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      try {
        const res = await fetch(getCoinList(page, currency));
        const json = await res.json();
        setCoins(json);
        setIsLoading(false);
      } catch {
        console.log(error);
      }
    };
    getData();
  }, [page, currency]);
  return (
    <div>
      <Search currency={currency} setCurrency={setCurrency} />
      <TableCoins coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
