import React from 'react';
import PropTypes from 'prop-types';

import { CardFull } from '../CardFull/CardFull';
import { Card } from '../Card/Card';

/**
 * Primary UI component for user interaction
 */
export const CardRow = ({ title, cards, columns, type, buttonType, ...props }) => {
  const cardCount = cards.length;
  let cardOutput = '';

  if (cardCount <= 1) {
    let card = cards[0];
    cardOutput = <CardFull key={card.id} card={card} type={type} buttonType={buttonType} />
  } else {
    cardOutput = cards.map(card => (
      <Card key={card.id} card={card} type={type} buttonType={buttonType} />
    ));
  }

  return (
    <div className="section">
      <h1 className="section-title">{title}</h1>

      <div
        className={['card-row', `card-row--${type}`, `card-row--${columns}-col`].join(' ')}
      >
        {cardOutput}
      </div>
    </div>
  );
};

CardRow.propTypes = {
  /**
   * What kind of cards in card row?
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * How many columns?
   */
  columns: PropTypes.oneOf([1, 2, 3, 4]),
};

CardRow.defaultProps = {
  type: 'primary',
  columns: 3,
  buttonType: 'box',
};
