import React from 'react';
import PropTypes from 'prop-types';

import Open from '../../src/assets/icon/hamburger_menu.svg';
import Close from '../../src/assets/icon/close.svg';

/**
 * Primary UI component for user interaction
 */
export const HamburgerButton = ({ classes, open, label, ...props }) => {
  const extraClass = open ? 'header-menu-toggle--hidden' : 'header-menu-toggle--visible';
  return (
    <button
      type="button"
      className={['header-menu-toggle', extraClass].join(' ')}
      id="header-menu-toggle"
      {...props}
    >
      <img src={Open} className="icon--hidden" alt="Open Menu"
      /><img src={Close} className="icon--visible" alt="Close Menu" />
    </button>
  );
};

HamburgerButton.propTypes = {
  /**
   * Is the hamburger menu icon set to open or close?
   */
  open: PropTypes.bool,
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

HamburgerButton.defaultProps = {
  open: true,
  onClick: undefined,
};
