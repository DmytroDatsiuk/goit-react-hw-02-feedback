import PropTypes from 'prop-types';
import { Notific } from './Notification.styled';

export const Notification = ({ message }) => <Notific>{message}</Notific>;

Notification.prototype = {
  message: PropTypes.string.isRequired,
};
