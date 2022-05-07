import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import style from '../FriendList/FriendList.module.css';

export default function Friends({ friends }) {
  return (
    <ul className={style.list}>
      {friends.map(friend => (
        <FriendListItem
          key={friend.id}
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}

Friends.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.string.isRequired,
};
