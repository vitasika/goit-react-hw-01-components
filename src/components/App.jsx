// Импорт компонентов
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
import FriendList from '../components/FriendList';
import TransactionHistory from '../components/TransactionHistory';

// Импорт условий в задании
import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';

import s from '../components/App.module.css';

export const App = () => {
  return (
    <div className={s.conteiner}>
      <Profile
        key={user.key}
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" data={data} />
      <Statistics data={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};
