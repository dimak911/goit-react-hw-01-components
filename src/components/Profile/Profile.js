import PropTypes from 'prop-types';
import { Box } from 'components/Box';
import { Description, StatsList, StatsListItem } from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <Box
    display="flex"
    flexDirection="column"
    backgroundColor="primary"
    mx="auto"
    my="0"
    p={3}
    width="300px"
    as="div"
  >
    <Description>
      <img src={avatar} alt="User avatar" width="200px" />
      <p>{username}</p>
      <p>@{tag}</p>
      <p>{location}</p>
    </Description>

    <StatsList>
      <StatsListItem>
        <span>Followers</span>
        <span>{followers}</span>
      </StatsListItem>
      <StatsListItem>
        <span>Views</span>
        <span>{views}</span>
      </StatsListItem>
      <StatsListItem>
        <span>Likes</span>
        <span>{likes}</span>
      </StatsListItem>
    </StatsList>
  </Box>
);

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};
