import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { Footer } from '../Footer/Footer';

export const Page = ({ user, displayMenu, links, hero, menus }) => {
  return (
    <div className={['layout-container', `layout-container--menu-${displayMenu ? 'visible' : 'hidden'}`].join(' ')}>
      <Header links={links} displayMenu={displayMenu} />

      <main className="container">
        <Hero hero={hero} />
      </main>

      <Footer menus={menus} />
    </div>
  )
};
