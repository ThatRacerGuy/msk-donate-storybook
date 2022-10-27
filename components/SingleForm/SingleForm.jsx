import React from 'react';
import PropTypes from 'prop-types';

import { Input } from '../Input/Input';
import { FormButton } from '../FormButton/FormButton';

/**
 * Primary UI component for user interaction
 */
export const SingleForm = ({ label, bg, placeholder, ...props }) => {
  return (
    <div className="single-line-form">
      <Input bg={bg} placeholder={placeholder} />
      <FormButton bg={bg} label={label} />
    </div>
  );
};

SingleForm.propTypes = { };

SingleForm.defaultProps = {
  bg: 'light',
};
