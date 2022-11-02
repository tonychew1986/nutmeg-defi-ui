/**
 *
 * HomeUserBalance
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import LoginAccessPrompt from '../LoginAccessPrompt';
import AvailableBalance from '../AvailableBalance';


const numeral = require('numeral');

function HomeUserBalance(props) {
  const {
    selectedAddress,
    totalUserEarn,
    totalUserFarm,
    trancheUserBalance,
    trancheUserLoan,
  } = props;
  
  return (
    <Style>
      <div>
        <div className="content">
          <div className="title">
            Available Balance:
          </div>
          <div className={(selectedAddress == "") ? "" : "hide"}>
            <LoginAccessPrompt />
          </div>
          <div className={(selectedAddress == "") ? "hide" : ""}>
            <div className="balancePanel">
              <div className="balancePanelTitle">
                Earning:
              </div>
              <div className="balancePanelNum num">
                $ {numeral(totalUserEarn).format('0,0.000')}
              </div>
              <div>
                <AvailableBalance balance={trancheUserBalance} />
              </div>
            </div>
            <div className="balancePanel disabled">
              <div className="balancePanelTitle">
                Farming: 
              </div>
              <div className="balancePanelNum num">
                $ {numeral(totalUserFarm).format('0,0.000')}
              </div>
              <div>
                <AvailableBalance balance={trancheUserLoan} />
              </div>
            </div>
            <div className="clear"></div>
          </div>
        </div>
      </div>
    </Style>
  );
}

HomeUserBalance.propTypes = {};

export default HomeUserBalance;
