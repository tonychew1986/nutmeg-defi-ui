/**
 *
 * PortfolioPopup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

const numeral = require('numeral');

import assetIconUsdt from './images/usdt.png';
import assetIconUsdc from './images/usdc.png';
import assetIconDai from './images/dai.png';
import assetIconEth from './images/eth.png';
import assetIconBtc from './images/btc.png';
  

import InputField from '../InputField';
import InputRangeIndicator from '../InputRangeIndicator';

function PortfolioPopup(props) {
  const {
    unstakeText,
    asset,
    amount,
    inputAmount,
    inputVariableText,
    onRedeem,
    onChangeAmount,
    onUpdateInputValue,
  } = props;
  
  return (
    <Style>
      <div>
        <div className="title">
          I want to {unstakeText}
        </div>
        <div>
          Available <span className="assetName">{asset}</span> to {unstakeText}: 
        </div>
        <div className="availableNum">
          <div className="availableNumIcon">
            <div className={(asset == "usdt") ? "assetImg" : "hide"}>
              <img src={assetIconUsdt} />
            </div>
            <div className={(asset == "usdc") ? "assetImg" : "hide"}>
              <img src={assetIconUsdc} />
            </div>
            <div className={(asset == "dai") ? "assetImg" : "hide"}>
              <img src={assetIconDai} />
            </div>
            <div className={(asset == "eth") ? "assetImg" : "hide"}>
              <img src={assetIconEth} />
            </div>
            <div className={(asset == "wbtc") ? "assetImg" : "hide"}>
              <img src={assetIconBtc} />
            </div>
          </div>
          <div className="availableNumFigure">
            {numeral(amount).format('0,0.000')}
          </div>
          <div className="clear"></div>
        </div>
        <div className="">
          <InputField
            id=""
            type="text"
            placeholder=""
            value={inputAmount}
            onChange={onChangeAmount}
          />
        </div>
        <div>
          <InputRangeIndicator balance={amount} onUpdateInputValue={onUpdateInputValue} value={inputVariableText} />
        </div>
        <div
        className={
          inputAmount > 0 &&
          inputAmount <= amount
            ? 'poolFormButton'
            : 'poolFormButton disabled'
        }
        >
          <button className="full" onClick={() => onRedeem(["usdt", 1])}>
            {unstakeText}
          </button>
        </div>
      </div>
    </Style>
  );
}

PortfolioPopup.propTypes = {};

export default PortfolioPopup;
