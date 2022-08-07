import PropTypes from 'prop-types';
import { Status, ListItem } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <ListItem>
    <Status isOnline={isOnline}></Status>
    <img src={avatar} alt="User avatar" width="48" />
    <p>{name}</p>
  </ListItem>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
