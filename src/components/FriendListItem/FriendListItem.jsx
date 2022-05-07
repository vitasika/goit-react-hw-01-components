import PropTypes from 'prop-types';
import style from '../FriendListItem/FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline, id }) {
  return (
    <li className={style.item} key={id}>
      {isOnline && <span class="status">Online</span>}
      <img className={style.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={style.status}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
