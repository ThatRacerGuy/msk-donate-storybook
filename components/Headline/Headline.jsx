import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const Headline = ({ title, uppercase, color, ...props }) => {
  const textcase = uppercase ? 'upper' : 'normal';
  return (
    <h2
      className={['headline', `headline--${color}`, `headline--${textcase}`].join(' ')}
      {...props}
    >
      {title}
    </h2>
  );
};

Headline.propTypes = {
  /**
   * Uppercase?
   */
  uppercase: PropTypes.bool,
  /**
   * Should the headline be dark or light?
   */
  color: PropTypes.oneOf(['dark', 'light']),
  /**
   * Headline contents
   */
  title: PropTypes.string.isRequired,
};

Headline.defaultProps = {
  uppercase: false,
  color: 'dark',
};
