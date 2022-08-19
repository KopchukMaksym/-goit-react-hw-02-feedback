import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import s from './feedback.module.css';
// import { Component } from 'react';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div className={s.button__block}>
    {options.map(el => (
      <button key={nanoid()} onClick={() => onLeaveFeedback(el)}>
        {el}
      </button>
    ))}
  </div>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;

// class FeedbackOptions extends Component {
//   render() {
//     const { options, onLeaveFeedback } = this.props;
//     return (
//       <div {s.button__block}>
//         {options.map((el, idx) => (
//           <button
//             key={nanoid()}
//             style={{ textTransform: 'capitalize' }}
//             onClick={() => onLeaveFeedback(el)}
//           >
//             {el}
//           </button>
//         ))}
//       </div>
//     );
//   }
// }

// FeedbackOptions.propTypes = {
//   options: PropTypes.arrayOf(PropTypes.string).isRequired,
//   onLeaveFeedback: PropTypes.func.isRequired,
// };

// export default FeedbackOptions;
