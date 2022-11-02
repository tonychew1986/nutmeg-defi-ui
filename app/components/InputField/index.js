/**
 *
 * InputField
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function InputField(props) {
  const {
    id,
    type,
    placeholder,
    value,
    onChange,
  } = props;
  
  return (
    <Style>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </Style>
  );
}


InputField.propTypes = {};

export default InputField;
