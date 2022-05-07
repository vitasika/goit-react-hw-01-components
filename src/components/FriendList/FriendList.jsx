import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import styles from '../FriendList/FriendList.module.css';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.list}>
      {friends.map(frd => (
        <FriendListItem
          key={frd.id}
          avatar={frd.avatar}
          name={frd.name}
          isOnline={frd.isOnline}
        />
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired),
};
