import { Message } from './NotificationMessage.styled';
import propTypes from 'prop-types';

function NotificationMessage({ message }) {
  return <Message>{message}</Message>;
}

NotificationMessage.propTypes = {
  message: propTypes.string.isRequired,
};
export default NotificationMessage;
