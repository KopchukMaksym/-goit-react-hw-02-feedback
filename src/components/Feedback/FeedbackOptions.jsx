import PropTypes from 'prop-types';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <div>
    {options.map((el, idx) => (
      <button
        key={el + idx}
        style={{ textTransform: 'capitalize' }}
        onClick={() => onLeaveFeedback(el)}
      >
        {el}
      </button>
    ))}
  </div>
);
export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
