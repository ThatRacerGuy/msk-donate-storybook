import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Input = ({ placeholder, bg, rounded, size, ...props }) => {
  const roundClass = rounded ? 'single-input--rounded' : '';
  return (
    <input
      className={['single-input', `single-input--bg-${bg}`, `single-input--${size}`, roundClass].join(' ')}
      type="text"
      placeholder={placeholder}
    />
  );
};

Input.propTypes = {
  /**
   * Should the input be rounded?
   */
  rounded: PropTypes.bool,
  /**
   * Should the Input be dark or light?
   */
  bg: PropTypes.oneOf(['dark', 'light']),
  /**
   * How large should the input be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Input contents
   */
  placeholder: PropTypes.string.isRequired,
};

Input.defaultProps = {
  rounded: false,
  bg: 'light',
  size: 'medium',
};
