import React, { useEffect, useState } from "react";
import TableCoins from "../modules/TableCoins";
import { getCoinList } from "../../services/cryptoApi";
import Pagination from "../modules/pagination";

function HomePage() {
  const [coins, setCoins] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(true);
    const getData = async () => {
      const res = await fetch(getCoinList(page));
      const json = await res.json();
      setCoins(json);
      setIsLoading(false);
    };
    getData();
  }, [page]);
  return (
    <div>
      <TableCoins coins={coins} isLoading={isLoading} />
      <Pagination page={page} setPage={setPage} />
    </div>
  );
}

export default HomePage;
