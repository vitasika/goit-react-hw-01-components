import PropTypes from 'prop-types';
import styles from './Transactions.module.css';

export default function TransactionHistory({ items }) {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          const className = index % 2 === 0 ? styles.even : styles.odd;
          return (
            <tr key={id}>
              <td className={className}>{type}</td>
              <td>{amount}</td>
              <td className={styles.odd}>{currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};

/* <tbody>
  {items.map(
    ({ id, type, amount, currency }) => (
      // index % 2 === 0 ?
      <tr key={id}>
        <td className={styles.odd}>{type}</td>
        <td>{amount}</td>
        <td className={styles.odd}>{currency}</td>
      </tr>
    )
    ) : (
      <tr key={item.id}>
        <td className={styles.odd}>{item.type}</td>
        <td className={styles.odd}>{item.amount}</td>
        <td className={styles.odd}>{item.currency}</td>
      </tr>
    )
  )}
</tbody>; */
