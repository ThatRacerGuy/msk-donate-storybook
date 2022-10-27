import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Arrow} from '../../src/assets/icon/arrow.svg';

/**
 * Primary UI component for user interaction
 */
export const ArrowButton = ({ classes, size, label, ...props }) => {
  return (
    <button
      type="button"
      className={['arrow-button', `arrow-button--${size}`, classes].join(' ')}
      {...props}
    >
      {label}
      <Arrow />
    </button>
  );
};

ArrowButton.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

ArrowButton.defaultProps = {
  size: 'medium',
  onClick: undefined,
};
