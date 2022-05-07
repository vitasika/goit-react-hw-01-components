import PropTypes from 'prop-types';
import style from '../Statistics/Statistics.module.css';

export default function Statistics({ title, data }) {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>Upload stats</h2>}

      <ul className={style.statlist}>
        {data.map(item => (
          <li className={style.item} key={item.id}>
            <span className={style.label}>{item.label}</span>
            <span className={style.percentage}>{item.percentage}%</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  data: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};
