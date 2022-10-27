import React from 'react';
import PropTypes from 'prop-types';

import { ButtonLink } from '../ButtonLink/ButtonLink';

/**
 * Primary UI component for user interaction
 */
export const AlertBanner = ({ banner: {id, summary, linkTitle, linkHref}, type, ...props }) => {
  return (
    <div
      className={['alert-banner', `alert-banner--${type}`].join(' ')}
      id={`alert-banner-${id}`}
      {...props}
    >
      <div className="alert-banner-content">
        <div className="alert-banner-summary">
          <p>{summary}</p>
        </div>

        <div className="alert-banner-link">
          <ButtonLink label={linkTitle} link={linkHref} classes={`button--${type}-transparent`} />
        </div>

        <button className="alert-banner-close" id={`close-alert-banner-${id}`}>
          <svg fill="#ffffff" height="50px" viewBox="0 0 50 50" width="50px" xmlns="http://www.w3.org/2000/svg">
            <path d="M 40.783203 7.2714844 A 2.0002 2.0002 0 0 0 39.386719 7.8867188 L 25.050781 22.222656 L 10.714844 7.8867188 A 2.0002 2.0002 0 0 0 9.2792969 7.2792969 A 2.0002 2.0002 0 0 0 7.8867188 10.714844 L 22.222656 25.050781 L 7.8867188 39.386719 A 2.0002 2.0002 0 1 0 10.714844 42.214844 L 25.050781 27.878906 L 39.386719 42.214844 A 2.0002 2.0002 0 1 0 42.214844 39.386719 L 27.878906 25.050781 L 42.214844 10.714844 A 2.0002 2.0002 0 0 0 40.783203 7.2714844 z"></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

AlertBanner.propTypes = {
  /**
   * What kind of cards in card row?
   */
  type: PropTypes.oneOf(['primary', 'secondary']),
};

AlertBanner.defaultProps = {
  type: 'primary',
};
