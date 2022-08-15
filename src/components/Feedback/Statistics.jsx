import PropTypes from 'prop-types';
import s from './feedback.module.css';
// import { Component } from 'react';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <div className={s.statisstics__block}>
    <p>
      Good: <span>{good}</span>
    </p>
    <p>
      Neutral: <span>{neutral}</span>
    </p>
    <p>
      Bad: <span>{bad}</span>
    </p>
    <p>
      Total: <span>{total}</span>
    </p>
    <p>
      Positive feedback: <span>{positivePercentage}%</span>
    </p>
  </div>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;

// class Statistics extends Component {
//   render() {
//     const { good, neutral, bad, total, positivePercentage } = this.props;
//     return (
//       <div className={s.statisstics__block}>
//         <p>
//           Good: <span>{good}</span>
//         </p>
//         <p>
//           Neutral: <span>{neutral}</span>
//         </p>
//         <p>
//           Bad: <span>{bad}</span>
//         </p>
//         <p>
//           Total: <span>{total}</span>
//         </p>
//         <p>
//           Positive feedback: <span>{positivePercentage}%</span>
//         </p>
//       </div>
//     );
//   }
// }

// Statistics.propTypes = {
//   good: PropTypes.number.isRequired,
//   neutral: PropTypes.number.isRequired,
//   bad: PropTypes.number.isRequired,
//   total: PropTypes.number.isRequired,
//   positivePercentage: PropTypes.number.isRequired,
// };

// export default Statistics;
