import React from 'react';
import PropTypes from 'prop-types';

import { ArrowButtonLink } from '../ArrowButtonLink/ArrowButtonLink';
import { ButtonLink } from '../ButtonLink/ButtonLink';
import { Headline } from '../Headline/Headline';

/**
 * Primary UI component for user interaction
 */
export const Card = ({ card: {id, title, summary, image, imageAlt, linkTitle, linkHref}, type, buttonType, ...props }) => {
  let linkClass = '';
  let linkOutput = '';

  if (buttonType === 'arrow') {
    linkClass = `arrow-button--${type}`;
    linkOutput = <ArrowButtonLink label={linkTitle} link={linkHref} classes={linkClass} />
  } else {
    linkClass = `button--${type}`;
    linkOutput = <ButtonLink label={linkTitle} link={linkHref} classes={linkClass} />
  }

  return (
    <div
      className={['card', `card--${type}`].join(' ')}
      {...props}
    >
      <div className="card-image">
        <img src={image} alt={imageAlt} />
      </div>

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

Card.propTypes = {
  /**
   * What kind of cards in card row?
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
  /**
   * What kind of button?
   */
  buttonType: PropTypes.oneOf(['box', 'arrow']),
};

Card.defaultProps = {
  type: 'primary',
  buttonType: 'box',
};
