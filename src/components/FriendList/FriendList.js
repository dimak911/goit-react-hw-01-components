import { Box } from 'components/Box';
import PropTypes from 'prop-types';
import { FriendListItem } from 'components/FriendListItem/FriendListItem';

export const FriendList = ({ friends }) => (
  <Box
    display="flex"
    flexDirection="column"
    justifyContent="space-between"
    width="300px"
    backgroundColor="lightgrey"
    p={3}
    as="ul"
  >
    <FriendListItem friends={friends} />
  </Box>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};
