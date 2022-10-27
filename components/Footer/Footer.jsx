import React from 'react';
import PropTypes from 'prop-types';

import { FooterMenu } from '../FooterMenu/FooterMenu';
import { Headline } from '../Headline/Headline';
import { SingleForm } from '../SingleForm/SingleForm';

export const Footer = ({ user, menus: { menu1, menu2 } }) => (
  <footer className="footer">
    <div className="footer-wrapper">
      <div className="footer-area-1">
        <FooterMenu menu={menu1} />
      </div>

      <div className="footer-area-2">
        <FooterMenu menu={menu2} />
      </div>

      <div className="footer-area-3">
        <Headline title="Sign Up for Updates" uppercase={true} color="light" />

        <SingleForm label="Submit" bg="dark" placeholder="Enter your email address" />
      </div>
    </div>
  </footer>
);

Footer.propTypes = {
  user: PropTypes.shape({}),
};

Footer.defaultProps = {
  user: null,
};
