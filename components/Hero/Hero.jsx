import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '../ButtonLink/ButtonLink';

/**
 * Primary UI component for user interaction
 */
export const Hero = ({ hero: { id, title, summary, image, ctaText, ctaLink }, ...props }) => {
  return (
    <div
      className={['hero'].join(' ')}
      {...props}
    >
      <div className="hero-image">
        <img src={image} alt="Hero Image" />
      </div>

      <div className="hero-content">
        <h1 className="hero-title">{title}</h1>

        <div className="hero-summary"><p>{summary}</p></div>

        <div className="hero-cta"><ButtonLink label={ctaText} link={ctaLink} /></div>
      </div>
    </div>
  );
};
