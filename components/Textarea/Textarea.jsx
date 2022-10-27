import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Textarea = ({ placeholder, bg, rounded, size, ...props }) => {
  const roundClass = rounded ? 'multi-input--rounded' : '';
  return (
    <textarea
      className={['multi-input', `multi-input--bg-${bg}`, `multi-input--${size}`, roundClass].join(' ')}
      placeholder={placeholder}
    />
  );
};

Textarea.propTypes = {
  /**
   * Should the textarea be rounded?
   */
  rounded: PropTypes.bool,
  /**
   * Should the textarea be dark or light?
   */
  bg: PropTypes.oneOf(['dark', 'light']),
  /**
   * How large should the textarea be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Textarea contents
   */
  placeholder: PropTypes.string.isRequired,
};

Textarea.defaultProps = {
  rounded: false,
  bg: 'light',
  size: 'medium',
};
