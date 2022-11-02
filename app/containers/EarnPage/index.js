/**
 *
 * EarnPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectEarnPage} from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  changeDepositAmount,
  changeWithdrawAmount,
  deposit,
  depositApprove,
  withdraw,
  selectTranche,
  changeAsset,
  addAllowance,
  updateInputValue,
} from './actions';


import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import ReactTooltip from "react-tooltip";

import Style from './Style';

import EarnTrancheTriangle from '../../components/EarnTrancheTriangle';
import EarnTranchePopup from '../../components/EarnTranchePopup';
import ContractAddress from '../../components/ContractAddress';
import IndividualTrancheItem from '../../components/IndividualTrancheItem';


import AssetInput from '../../components/AssetInput';


  // <EarnTrancheTriangle selectedAddress={earnPage.selectedAddress} tranche={"AAA"} onWithdraw={onWithdraw} onDeposit={onDeposit} onDepositApprove={onDepositApprove} depositAmount={earnPage.depositAmount} onChangeDepositAmount={onChangeDepositAmount} withdrawAmount={earnPage.withdrawAmount} onChangeWithdrawAmount={onChangeWithdrawAmount}  />
  // 
  // <EarnTrancheTriangle selectedAddress={earnPage.selectedAddress} tranche={"AA"} onWithdraw={onWithdraw} onDeposit={onDeposit} onDepositApprove={onDepositApprove} depositAmount={earnPage.depositAmount} onChangeDepositAmount={onChangeDepositAmount} withdrawAmount={earnPage.withdrawAmount} onChangeWithdrawAmount={onChangeWithdrawAmount} />
  // 
  // <EarnTrancheTriangle selectedAddress={earnPage.selectedAddress} tranche={"B"} onWithdraw={onWithdraw} onDeposit={onDeposit} onDepositApprove={onDepositApprove} depositAmount={earnPage.depositAmount} onChangeDepositAmount={onChangeDepositAmount} withdrawAmount={earnPage.withdrawAmount} onChangeWithdrawAmount={onChangeWithdrawAmount} />

export function EarnPage({
  earnPage,
  onWithdraw,
  onDeposit,
  onDepositApprove,
  onChangeDepositAmount,
  onChangeWithdrawAmount,
  onSelectTranche,
  onChangeAsset,
  onAddAllowance,
  onUpdateInputValue,
}) {
  useInjectReducer({ key: 'earnPage', reducer });
  useInjectSaga({ key: 'earnPage', saga });
  
  let assetSelected = earnPage.assetSelected;
  let trancheValue = 0;
  
  if(earnPage.selectedTranche == "AAA"){
    trancheValue = 0;
  }else if(earnPage.selectedTranche == "AA"){
    trancheValue = 1;
  }else if(earnPage.selectedTranche == "B"){
    trancheValue = 2;
  }
  console.log("trancheValue", trancheValue);
  console.log("earnPage.assetSelected", earnPage.assetSelected);
  console.log("earnPage.assetNumSelected", earnPage.assetNumSelected);
  console.log("earnPage.trancheTotalBalance", earnPage.trancheTotalBalance);
  
  let trancheBalance = earnPage.trancheTotalBalance[earnPage.assetNumSelected][1][trancheValue];
  let selectedAllowance = earnPage.allowance[earnPage.assetNumSelected][1];
  let availableDepositBalance = earnPage.asset[earnPage.assetNumSelected][3];
  let availableWithdrawBalance = earnPage.trancheWithdrawalBalance[earnPage.assetNumSelected][1][trancheValue];
  let userBalance = earnPage.trancheUserBalance[earnPage.assetNumSelected][1][trancheValue];
  
  let principal = 0;
  let principalPool = [];
  if(earnPage.poolPrincipal.length > 0){
    principal = earnPage.poolPrincipal[earnPage.assetNumSelected][trancheValue];
    principalPool = earnPage.poolPrincipal[earnPage.assetNumSelected];
  }
  console.log("earnPage.poolPrincipal", earnPage.poolPrincipal);
  
  let interestRate = 0;
  let interestRatePool = [];
  if(earnPage.poolInterestRate.length > 0){
    interestRate = earnPage.poolInterestRate[earnPage.assetNumSelected][trancheValue];
    interestRatePool = earnPage.poolInterestRate[earnPage.assetNumSelected];
  }
  console.log("earnPage.poolInterestRate", earnPage.poolInterestRate);
  
  interestRate = interestRate/100;

  return (
    <Style>
      <div className={(earnPage.poolInterestRate.length > 0) ? "hide" : "poolMissing"}>
        There are no available pools. Come back later.
      </div>
      <div className={(earnPage.poolInterestRate.length > 0) ? "" : "hide"}>
        <div className="trancheDesc">
          <div className="content">
            <div className="titleSuper">
              Earn
            </div>
            <div className="desc">
              Based on your risk profile, select your desired asset & tranche. Deposit & start earning.
            </div>
          </div>
          <div className="content">
            <div className="selectAsset">
              <AssetInput assetArray={earnPage.poolSymbol} onChangeAsset={onChangeAsset} type="single" />
            </div>
            
            <div className="">
              <div className="title">
                Select Tranche
              </div>
              <div className="trancheSelect">
                <div className="trancheSelectRisk">
                  <ReactTooltip id="trancheData" place="right" type="dark" effect="float"/>
                  
                  <IndividualTrancheItem tranche={earnPage.selectedTranche} trancheType={"AAA"} apy={interestRatePool[0]/100} deposit={principalPool[0]} onSelectTranche={onSelectTranche} />
                  
                  <IndividualTrancheItem tranche={earnPage.selectedTranche} trancheType={"AA"} apy={interestRatePool[1]/100} deposit={principalPool[1]} onSelectTranche={onSelectTranche} />
                  
                  <IndividualTrancheItem tranche={earnPage.selectedTranche} trancheType={"B"} apy={interestRatePool[2]/100} deposit={principalPool[2]} onSelectTranche={onSelectTranche} />
                  
                </div>
                <div className="trancheSelectRiskDesc hide">
                  <div className="trancheSelectRiskDescTop">
                    Most <br /> senior
                  </div>
                  <div className="trancheSelectRiskDescArrow">
                    
                  </div>
                  <div className="trancheSelectRiskDescBottom">
                    Least <br /> senior
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="trancheInfo">
          <div className="content">
            <EarnTranchePopup asset={earnPage.asset} allowance={earnPage.allowance} selectedAddress={earnPage.selectedAddress} tranche={earnPage.selectedTranche} assetSelected={earnPage.assetSelected} onWithdraw={onWithdraw} onDeposit={onDeposit} onDepositApprove={onDepositApprove} depositAmount={earnPage.depositAmount} onChangeDepositAmount={onChangeDepositAmount} withdrawAmount={earnPage.withdrawAmount} onChangeWithdrawAmount={onChangeWithdrawAmount} onAddAllowance={onAddAllowance} onUpdateInputValue={onUpdateInputValue} trancheWithdrawalBalance={earnPage.trancheWithdrawalBalance} trancheTotalBalance={earnPage.trancheTotalBalance} trancheUserBalance={earnPage.trancheUserBalance} poolPrincipal={earnPage.poolPrincipal} poolInterestRate={earnPage.poolInterestRate} trancheValue={trancheValue} trancheBalance={trancheBalance} selectedAllowance={selectedAllowance} availableDepositBalance={availableDepositBalance} availableWithdrawBalance={availableWithdrawBalance} userBalance={userBalance} assetNum={earnPage.assetNumSelected} interestRate={interestRate} principal={principal} price={2500} />
          </div>
        </div>
        <div className="hide">
          <ContractAddress address={"0xeEeEeEeEeEeEeEeEeEeE"} />
        </div>
      </div>
    </Style>
  );
}

EarnPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  earnPage: makeSelectEarnPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeDepositAmount: evt =>
      dispatch(changeDepositAmount(evt.target.value)),
    onChangeWithdrawAmount: evt =>
      dispatch(changeWithdrawAmount(evt.target.value)),
    onChangeAsset: evt => dispatch(changeAsset(evt.value)),
    onDeposit: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(deposit(evt));
    },
    onWithdraw: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(withdraw(evt));
    },
    onDepositApprove: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(depositApprove(evt));
    },
    onSelectTranche: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(selectTranche(evt));
    },
    onAddAllowance: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(addAllowance(evt));
    },
    onUpdateInputValue: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(updateInputValue(evt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(EarnPage);
