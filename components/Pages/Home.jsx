import React from 'react';
import PropTypes from 'prop-types';

import { Header } from '../Header/Header';
import { Hero } from '../Hero/Hero';
import { CardRow } from '../CardRow/CardRow';
import { Footer } from '../Footer/Footer';

export const Page = ({ user, displayMenu, links, hero, cardRow1, cards, title, menus }) => {
  return (
    <div className={['layout-container', `layout-container--menu-${displayMenu ? 'visible' : 'hidden'}`].join(' ')}>
      <Header links={links} displayMenu={displayMenu} />

      <main className="container">
        <Hero hero={hero} />

        <CardRow cards={cards} title={title} />

        <CardRow cards={cardRow1.cards} />
      </main>

      <Footer menus={menus} />
    </div>
  )
};
