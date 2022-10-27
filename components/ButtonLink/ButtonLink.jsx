import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const ButtonLink = ({ classes, size, label, link, ...props }) => {
  return (
    <a
      href={link}
      className={['button', `button--${size}`, classes].join(' ')}
      {...props}
    >
      {label}
    </a>
  );
};

ButtonLink.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

ButtonLink.defaultProps = {
  classes: 'button--primary',
  size: 'medium',
};
