/**
 *
 * PortfolioFarmList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import PortfolioPopup from '../PortfolioPopup';

import Style from './Style';
import PopupStyle from './PopupStyle';


const numeral = require('numeral');

import assetIconUsdt from './images/usdt.png';
import assetIconUsdc from './images/usdc.png';
import assetIconDai from './images/dai.png';
import assetIconEth from './images/eth.png';
import assetIconBtc from './images/btc.png';

function PortfolioFarmList(props) {
  const {
    unstakeText,
    portfolioInfo,
    onUnstakeRedeem,
    inputAmount,
    inputVariableText,
    onChangeAmount,
    onUpdateInputValue,
    positionOpen,
  } = props;
  

  const portfolioEntry = portfolioInfo.map((portfolio, index) =>
    <div key={index} className="assetEntry">
      <div className="asset">
        <div className={(portfolio[0] == "usdt") ? "assetImg" : "hide"}>
          <img src={assetIconUsdt} />
        </div>
        <div className={(portfolio[0] == "usdc") ? "assetImg" : "hide"}>
          <img src={assetIconUsdc} />
        </div>
        <div className={(portfolio[0] == "dai") ? "assetImg" : "hide"}>
          <img src={assetIconDai} />
        </div>
        <div className={(portfolio[0] == "eth") ? "assetImg" : "hide"}>
          <img src={assetIconEth} />
        </div>
        <div className={(portfolio[0] == "wbtc") ? "assetImg" : "hide"}>
          <img src={assetIconBtc} />
        </div>
      </div>
      <div className="name">
        {portfolio[0]}
      </div>
      <div className="balance">
        <div className="balanceNum">
          {numeral(portfolio[1]).format('0,0.000')}
        </div>
      </div>
      <div className="actions">
        <PopupStyle
          trigger={
            <button>
              Redeem
            </button>
          }
          modal
          closeOnDocumentClick
          closeOnEscape
        >
        {close => (
          <div className="popupContent popupContentSmall">
            <PortfolioPopup unstakeText={unstakeText} asset={portfolio[0]} amount={portfolio[1]} inputAmount={inputAmount} onChangeAmount={onChangeAmount} onUnstakeRedeem={onUnstakeRedeem} onUpdateInputValue={onUpdateInputValue} inputVariableText={inputVariableText} />
            <div className="clear"></div>
          </div>
        )}
        </PopupStyle>
      </div>
      <div className="clear"></div>
    </div>
  );
  
  return (
    <Style>
      <div className="assetEntry assetEntryHeader">
        <div className="asset">
          Asset
        </div>
        <div className="name">
          
        </div>
        <div className="balance">
          Balance
        </div>
        <div className="actions">
        </div>
        <div className="clear"></div>
      </div>
      {portfolioEntry}
    </Style>
  );
}

PortfolioFarmList.propTypes = {};

export default PortfolioFarmList;
