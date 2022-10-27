import React from 'react';
import PropTypes from 'prop-types';

import { ArrowButtonLink } from '../ArrowButtonLink/ArrowButtonLink';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Headline } from '../Headline/Headline';

/**
 * Primary UI component for user interaction
 */
export const CardFull = ({ card: {id, title, summary, image, imageAlt, linkTitle, linkHref}, position, type, buttonType, ...props }) => {
  let linkClass = '';
  let linkOutput = '';

  if (buttonType === 'arrow') {
    linkOutput = <ArrowButtonLink label={linkTitle} link={linkHref} classes={`arrow-button--${type}`} />
  } else {
    linkOutput = <ButtonLink label={linkTitle} link={linkHref} classes={`button--${type}`} />
  }

  return (
    <div
      className={['card-full', `card-full--${position}`, `card-full--${type}`].join(' ')}
      {...props}
    >
      <img className="card-image" src={image} alt={imageAlt} />

      <div className="card-content">
        <Headline title={title} />

        <div className="card-summary">
          <p>{summary}</p>
        </div>

        <div className="card-link">{linkOutput}</div>
      </div>
    </div>
  );
};

CardFull.propTypes = {
  /**
   * What position should the image be?
   */
  position: PropTypes.oneOf(['left', 'right']),
  /**
   * What kind of cards in card row?
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * What kind of button?
   */
  buttonType: PropTypes.oneOf(['box', 'arrow']),
};

CardFull.defaultProps = {
  position: 'left',
  type: 'primary',
  buttonType: 'box',
};
