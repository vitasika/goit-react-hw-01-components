import PropTypes from 'prop-types';

export default function Transactions({ id, type, amount, currency }) {
  return (
    <table class="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        <tr key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </tr>
        {/* <tr>
      <td>Withdrawal</td>
      <td>85</td>
      <td>USD</td>
    </tr> */}
      </tbody>
    </table>
  );
}

Transactions.propTypes = {
  id: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  currency: PropTypes.string.isRequired,
};
