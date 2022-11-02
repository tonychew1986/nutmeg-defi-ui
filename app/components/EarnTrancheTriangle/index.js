/**
 *
 * EarnTrancheTriangle
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import EarnTranchePopup from '../EarnTranchePopup';

import Style from './Style';

function EarnTrancheTriangle(props) {
  const {
    tranche,
    onWithdraw,
    onDeposit,
    onDepositApprove,
    depositAmount,
    onChangeDepositAmount,
    withdrawAmount,
    onChangeWithdrawAmount,
    selectedAddress,
  } = props;
  
  
  return (
    <Style>
      
      <div>
      
        <Popup
          trigger={
            <div className="trancheTriangle">
              <div className={tranche}>
                <div className="trancheText">
                
                </div>
              </div>
            </div>
          }
          modal
          closeOnDocumentClick
          closeOnEscape
        >
        {close => (
          <div className="popupContent">
            <EarnTranchePopup selectedAddress={selectedAddress} tranche={tranche} onWithdraw={onWithdraw} onDeposit={onDeposit} onDepositApprove={onDepositApprove} depositAmount={depositAmount} onChangeDepositAmount={onChangeDepositAmount} withdrawAmount={withdrawAmount} onChangeWithdrawAmount={onChangeWithdrawAmount} />
            <div className="clear"></div>
          </div>
        )}
        </Popup>
      </div>
    </Style>
  );
}

EarnTrancheTriangle.propTypes = {};

export default EarnTrancheTriangle;
