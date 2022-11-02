/**
 *
 * LoginAccessPrompt
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function LoginAccessPrompt() {
  return (
    <Style>
      Please login to access feature
    </Style>
  );
}

LoginAccessPrompt.propTypes = {};

export default LoginAccessPrompt;
