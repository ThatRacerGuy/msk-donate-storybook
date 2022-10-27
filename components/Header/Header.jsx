import React from 'react';
import PropTypes from 'prop-types';

import { HeaderMenu } from '../HeaderMenu/HeaderMenu';
import { HamburgerButton } from '../HamburgerButton/HamburgerButton';

export const Header = ({ links, displayMenu }) => {
  return (
    <header className={['site-header', `site-header-menu--${displayMenu ? 'visible' : 'hidden'}`].join(' ')}>
      <a className="site-header-logo" href="/"><img src="/logos/logo.svg" alt="Logo" /></a>

      <HamburgerButton label="Menu" open={!displayMenu} />

      <HeaderMenu links={links} />
    </header>
  )
};

Header.propTypes = {
  /**
   * Is the menu visible or hidden?
   */
  displayMenu: PropTypes.bool,
};

Header.defaultProps = {
  displayMenu: false,
};
