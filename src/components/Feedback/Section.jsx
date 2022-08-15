import PropTypes from 'prop-types';
// import { Component } from 'react';

const Section = ({ title, children }) => (
  <>
    <h2>{title}</h2>
    <div>{children}</div>
  </>
);

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Section;

// class Section extends Component {
//   render() {
//     const { title, children } = this.props;
//     return (
//       <>
//         <h2>{title}</h2>
//         <div>{children}</div>
//       </>
//     );
//   }
// }
// Section.propTypes = {
//   title: PropTypes.number.isRequired,
//   children: PropTypes.node.isRequired,
// };

// export default Section;
