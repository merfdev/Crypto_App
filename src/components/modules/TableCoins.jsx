import { RotatingLines } from "react-loader-spinner";

import styles from "./TableCoin.module.css";
import chartUp from "../../assets/chart-up.svg";
import chartDown from "../../assets/chart-down.svg";

function TableCoins({ coins, isLoading }) {
  return (
    <div className={styles.container}>
      {isLoading ? (
        <RotatingLines strokeColor="#3874ff" strokeWidth="2" />
      ) : (
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Coin</th>
              <th>Name</th>
              <th>Price</th>
              <th>24h</th>
              <th>Total Valume</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {coins.map((coin) => (
              <TableRow coin={coin} key={coin.id} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default TableCoins;

const TableRow = ({ coin }) => {
  return (
    <tr>
      <td>
        <div className={styles.symbol}>
          <img src={coin.image} />
          <span>{coin.symbol.toUpperCase()}</span>
        </div>
      </td>
      <td>{coin.name}</td>
      <td>{coin.current_price.toLocaleString()}</td>
      <td
        className={
          coin.price_change_percentage_24h > 0 ? styles.success : styles.error
        }
      >
        {coin.price_change_percentage_24h.toFixed(2)}%
      </td>
      <td>{coin.total_volume.toLocaleString()}</td>
      <td>
        <img
          src={coin.price_change_percentage_24h > 0 ? chartUp : chartDown}
          alt={coin.name}
        />
      </td>
    </tr>
  );
};
