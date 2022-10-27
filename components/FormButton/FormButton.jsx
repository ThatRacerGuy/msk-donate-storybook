import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const FormButton = ({ size, bg, label, ...props }) => {
  return (
    <input
      type="submit"
      className={['form-button', `form-button--${size}`, `form-button--bg-${bg}`].join(' ')}
      value={label}
    />
  );
};

FormButton.propTypes = {
  /**
   * Should the background be dark or light?
   */
  bg: PropTypes.oneOf(['dark', 'light']),
  /**
   * How large should the FormButton be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * FormButton contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

FormButton.defaultProps = {
  size: 'medium',
  bg: 'light',
  onClick: undefined,
};
