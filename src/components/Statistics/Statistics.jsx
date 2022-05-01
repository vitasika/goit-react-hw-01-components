import PropTypes from 'prop-types';

export default function Statistics({ id, label, percentage }) {
  return (
    <section class="statistics">
      <h2 class="title">Upload stats</h2>

      <ul class="stat-list">
        <li class="item" key={id}>
          <span class="label"></span>
          <span class="percentage">%</span>
        </li>
        {/* <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}%</span>
                </li>
                <li class="item">
                    <span class="label">{data.label}</span>
                    <span class="percentage">{data.percentage}%</span>
                </li> */}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
