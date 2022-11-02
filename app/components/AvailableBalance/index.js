/**
 *
 * AvailableBalance
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

const numeral = require('numeral');

function AvailableBalance(props) {
  const {
    balance,
  } = props;
  
  const balanceContent = balance.map((bal, index) =>
    <div key={index} className="assetEntry">
      <div className="assetEntryName">
        {bal[0]}
      </div>
      <div className="assetEntryAmount num">
        {numeral(bal[2]).format('0,0.0000')}
      </div>
      <div className="assetEntryPriceValue num">
        $0.1029
      </div>
      <div className="clear"></div>
    </div>
  );
  
  return (
    <Style>
      {balanceContent}
    </Style>
  );
}

AvailableBalance.propTypes = {};

export default AvailableBalance;
