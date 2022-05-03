// import PropTypes from 'prop-types';
// Импорт компонентов
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import FriendList from '../components/FriendList';
import TransactionHistory from '../components/TransactionHistory';
// Импорт условий в задании
import user from './Profile/user.json';
import data from './Statistics/data.json';
import friends from './FriendList/friends.json';
import transactions from './TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div>
      <Profile
        key={user.key}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />;
      <Statistics stats={data} />;
      <FriendList friends={friends} />,
      <TransactionHistory items={transactions} />;
    </div>
  );
};
