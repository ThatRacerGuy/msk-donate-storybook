import React from 'react';
import PropTypes from 'prop-types';

import { Headline } from '../Headline/Headline';

/**
 * Primary UI component for user interaction
 */
export const FooterMenu = ({ menu: { links, title }, ...props }) => {
  return (
    <div className="footer-menu-wrap">
      <Headline title={title} uppercase={true} color="light" />

      <ul className="footer-menu">
        {links.map(link => (
          <li key={link.id}>
            <a href={link.href} target={link.target} dangerouslySetInnerHTML={{ __html: link.title }} />
          </li>
        ))}
      </ul>
    </div>
  );
};
