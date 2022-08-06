import { GlobalStyle } from './GlobalStyle';
import user from '../user.json';
import { Profile } from './Profile/Profile';

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
    </>
  );
};
