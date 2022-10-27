import React from 'react';
import PropTypes from 'prop-types';

import { HeaderMenuLink } from '../HeaderMenuLink/HeaderMenuLink'

/**
 * Primary UI component for user interaction
 */
export const HeaderMenu = ({ links, ...props }) => {
  return (
    <nav role="navigation" className="header-menu" id="header-menu">
      <ul>
        {links.map(link => (
          <HeaderMenuLink key={link.id} link={link} />
        ))}
      </ul>
    </nav>
  );
};

HeaderMenu.defaultProps = { };
