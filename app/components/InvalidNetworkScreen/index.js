/**
 *
 * InvalidNetworkScreen
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function InvalidNetworkScreen() {
  return (
    <Style>
      <div className="panel">
        <p className="title">
          Current selected network is not supported. 
        </p>
        <p>
          Change to Mainnet or Ropsten and refresh your page to continue.
        </p>
      </div>
    </Style>
  );
}

InvalidNetworkScreen.propTypes = {};

export default InvalidNetworkScreen;
