/**
 *
 * EarnTranchePopup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import assetIconUsdt from './images/usdt.png';
import assetIconUsdc from './images/usdc.png';
import assetIconDai from './images/dai.png';

import InputField from '../InputField';
import InputRangeIndicator from '../InputRangeIndicator';
import LoginAccessPrompt from '../LoginAccessPrompt';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import './react-tabs.css';

const numeral = require('numeral');


function EarnTranchePopup(props) {
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
    assetSelected,
    onAddAllowance,
    asset,
    allowance,
    onUpdateInputValue,
    trancheWithdrawalBalance,
    trancheTotalBalance,
    trancheUserBalance,
    poolPrincipal,
    poolInterestRate,
    trancheValue,
    trancheBalance,
    selectedAllowance,
    availableDepositBalance,
    availableWithdrawBalance,
    userBalance,
    assetNum,
    interestRate,
    principal,
    price,
  } = props;
    // <img className={(assetSelected == "usdt") ? "" : "hide"} src={assetIconUsdt} />
    // <img className={(assetSelected == "usdc") ? "" : "hide"} src={assetIconUsdc} />
    // <img className={(assetSelected == "dai") ? "" : "hide"} src={assetIconDai} />
    // <img className={(assetSelected == "mockERC") ? "" : "hide"} src={assetIconDai} />
  console.log("assetSelected", assetSelected)
console.log("assetSelected", assetSelected)
console.log("assetSelected", assetSelected)
console.log("assetSelected", assetSelected)
  return (
    <Style>
      <div className="content"> 
        <div className={(selectedAddress == "") ? "" : "hide"}>
          <LoginAccessPrompt />
        </div>
        <div className={(selectedAddress == "") ? "hide" : ""}>
          <div className="trancheHeader">
            <div className="trancheToken">
              <div className="trancheTokenImg">
                <img className={(assetSelected == "usdt") ? "" : ""} src={assetIconUsdt} />
              </div>
              <div className="trancheTokenSymbol">
                {assetSelected}
              </div>
              <div className="clear"></div>
              <div className="trancheLevel">
                Tranche <span className="trancheHighlight">{tranche}</span>
              </div>
            </div>
            <div className="trancheTokenInfo">
              <div className="trancheYield">
                <div className="trancheDetailTitle">
                  Earning Rate
                </div>
                <div className="trancheDetailNum num">
                  {numeral(interestRate).format('0,0.00')} %
                </div>
              </div>
              <div className="trancheTVL">
                <div className="trancheDetailTitle">
                  Pool Deposit
                </div>
                <div className="trancheDetailNum num">
                  $ {numeral(principal * price).format('0,0.00')}
                </div>
                <div className="hide">
                  $ {numeral(trancheBalance).format('0,0.0000')}
                </div>
                <div className="">
                  {numeral(principal).format('0,0.00')} {assetSelected}
                </div>
              </div>
              <div className="trancheRisk">
                <div className="trancheDetailTitle">
                  Risk Level
                </div>
                <div className="trancheDetailNum">
                  {(tranche == "AAA") ? "Conservative" : ""}
                  {(tranche == "AA") ? "Medium Risk" : ""}
                  {(tranche == "B") ? "Risky" : ""}
                </div>
              </div>
              <div className="trancheDepositBalance">
                <div className="trancheDetailTitle">
                  My Deposit
                </div>
                <div className="trancheDetailNum num">
                  {numeral(userBalance).format('0,0.0000')} {assetSelected}
                </div>
              </div>
              <div className="clear"></div>
            </div>
            <div className="clear"></div>
          </div>
          <div className="trancheBody">
            <Tabs>
              <TabList>
                <Tab>Stake</Tab>
                <Tab>Unstake</Tab>
              </TabList>

              <TabPanel>
                <div className="trancheDeposit">
                  <div className="trancheDepositTitle">
                    Stake
                  </div>
                  <div>
                    <div className="trancheBalance">
                      <div className="trancheBalanceTitle">
                        Available balance:
                      </div>
                      <div className="trancheBalanceAmount">
                        {numeral(availableDepositBalance).format('0,0.0000')}
                      </div>
                    </div>
                    <div className="trancheBalanceInput">
                      <div className={(selectedAllowance <= 1) ? "hide" : ""}>
                        <div>
                          <InputField
                            id="depositAmount"
                            type="text"
                            placeholder="Please enter your deposit amount"
                            value={depositAmount}
                            onChange={onChangeDepositAmount}
                          />
                        </div>
                        <div>
                          <InputRangeIndicator balance={availableDepositBalance} onUpdateInputValue={onUpdateInputValue} value={"depositAmount"} />
                        </div>
                      </div>
                      <div className={(selectedAllowance <= 1) ? "" : "hide"}>
                        <div className="trancheBalanceInputPrompt">
                          Please approve allowance before depositing funds
                        </div>
                      </div>
                    </div>
                    <div className={(selectedAllowance <= 1) ? "" : "hide"}>
                      <button onClick={() => onAddAllowance([assetSelected, assetNum])}>
                        Approve Allowance
                      </button>
                    </div>
                    <div className={(selectedAllowance <= 1) ? "hide" : ""}>
                      <div className={(depositAmount > 0) ? "" : "disabled"}>
                        <button onClick={() => onDeposit([assetSelected, assetNum])}>
                          Stake
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </TabPanel>
              <TabPanel>
                <div className="trancheWithdraw">
                  <div className="trancheWithdrawTitle">
                    Unstake
                  </div>
                  <div>
                    <div className="trancheBalance">
                      <div className="trancheBalanceTitle">
                        Available balance:
                      </div>
                      <div className="trancheBalanceAmount">
                        {numeral(availableWithdrawBalance).format('0,0.0000')}
                      </div>
                    </div>
                    <div className="trancheBalanceInput">
                      <div>
                        <InputField
                          id="withdrawAmount"
                          type="text"
                          placeholder="Please enter your withdraw amount"
                          value={withdrawAmount}
                          onChange={onChangeWithdrawAmount}
                        />
                      </div>
                      <div>
                        <InputRangeIndicator balance={availableWithdrawBalance} onUpdateInputValue={onUpdateInputValue} value={"withdrawAmount"} />
                      </div>
                    </div>
                    <div className={(withdrawAmount > 0) ? "" : "disabled"}>
                      <button onClick={() => onWithdraw([assetSelected, assetNum])}>
                        Unstake
                      </button>
                    </div>
                  </div>
                </div>
              </TabPanel>
            </Tabs>
          </div>
        </div>
      </div>
    </Style>
  );
}

EarnTranchePopup.propTypes = {};

export default EarnTranchePopup;
