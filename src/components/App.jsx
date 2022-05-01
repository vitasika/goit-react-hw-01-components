// import PropTypes from 'prop-types';
// Импорт компонентов
import Profile from '../components/Profile';
import Statistics from '../components/Statistics';
// Импорт условий в задании
import user from './Profile/user.json';
import data from './Statistics/data.json';
// import friends from './FriendList/friends.json';
// import transactions from './TransactionHistory/transactions.json';

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
      {/* <Statistics stats={data} />; */}
      {/* <FriendList
        friends={friends}
      />, */}
      {/* <TransactionHistory
        items={transactions}
      />; */}
    </div>

    // <div class="description">
    //     <img
    //       src={user.avatar}
    //       // src="https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
    //       alt="User avatar"
    //       class="avatar"
    //     />
    //     <p class="name">{user.username}</p>
    //     <p class="tag">@{user.tag}</p>
    //     <p class="location">{user.location}</p>
    //   </div>

    //   <ul class="stats">
    //     <li>
    //       <span class="label">Followers</span>
    //       <span class="quantity">{user.stats.followers}</span>
    //     </li>
    //     <li>
    //       <span class="label">Views</span>
    //       <span class="quantity">{user.stats.views}</span>
    //     </li>
    //     <li>
    //       <span class="label">Likes</span>
    //       <span class="quantity">{user.stats.likes}</span>
    //     </li>
    //   </ul>

    // <div
    //   style={{
    //     height: '100vh',
    //     display: 'flex',
    //     justifyContent: 'center',
    //     alignItems: 'center',
    //     fontSize: 40,
    //     color: '#010101'
    //   }}
    // >
    //   1. React homework template
    // </div>
  );
};
