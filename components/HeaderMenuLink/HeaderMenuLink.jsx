import React from 'react';
import PropTypes from 'prop-types';

/**
 * Primary UI component for user interaction
 */
export const HeaderMenuLink = ({ link: { id, type, title, link }, ...props }) => {
  const classes = ['header-menu-item'];
  if (type) {
    classes.push(`header-menu-item--${type}`);
  }
  return (
    <li
      className={classes.join(' ')}
      {...props}
    >
      <a href={link}>{title}</a>
    </li>
  );
};

HeaderMenuLink.propTypes = { };

HeaderMenuLink.defaultProps = { };
