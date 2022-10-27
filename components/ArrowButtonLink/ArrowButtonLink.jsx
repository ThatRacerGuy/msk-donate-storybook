import React from 'react';
import PropTypes from 'prop-types';

import {ReactComponent as Arrow} from '../../src/assets/icon/arrow.svg';

/**
 * Primary UI component for user interaction
 */
export const ArrowButtonLink = ({ classes, size, label, link, ...props }) => {
  return (
    <a
      href={link}
      className={['arrow-button', `arrow-button--${size}`, classes].join(' ')}
      {...props}
    >
      {label}
      <Arrow />
    </a>
  );
};

ArrowButtonLink.propTypes = {
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
};

ArrowButtonLink.defaultProps = {
  size: 'medium',
};
