import PropTypes from 'prop-types';
import s from './feedback.module.css';
// import { Component } from 'react';

const Notification = ({ message }) => (
  <p className={s.ntf__styles}>{message}</p>
);

Notification.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Notification;

// class Notification extends Component {
//   render() {
//     return <p className={s.ntf__styles}>{this.message}</p>;
//   }
// }
// export default Notification;

// Notification.propTypes = {
//   message: PropTypes.string.isRequired,
// };
