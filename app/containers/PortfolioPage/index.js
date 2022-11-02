/**
 *
 * PortfolioPage
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
import makeSelectPortfolioPage from './selectors';
import {makeSelectEarnPage} from '../EarnPage/selectors';

import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  redeem,
  unstake,
} from '../EarnPage/actions';

import {
  changeUnstakeAmount,
  changeRedeemAmount,
  updateInputValue,
} from './actions';


import Style from './Style';

import PortfolioEarnList from '../../components/PortfolioEarnList';
import PortfolioFarmList from '../../components/PortfolioFarmList';
import LoginAccessPrompt from '../../components/LoginAccessPrompt';


export function PortfolioPage({
  earnPage,
  portfolioPage,
  onRedeem,
  onUnstake,
  onChangeUnstakeAmount,
  onChangeRedeemAmount,
  onUpdateInputValue,
}) {
  useInjectReducer({ key: 'portfolioPage', reducer });
  useInjectSaga({ key: 'portfolioPage', saga });

  return (
    <Style>
      <div>
        <div className="title portfolioCategory">
          Earn Portfolio
        </div>
        <div className="content">
          <div className={(earnPage.selectedAddress == "") ? "hide" : "portfolioList"}>
            <PortfolioEarnList portfolioInfo={earnPage.portfolioEarnInfo} inputAmount={portfolioPage.earnAmount} onChangeAmount={onChangeUnstakeAmount} onUnstakeRedeem={onUnstake} unstakeText={"unstake"} onUpdateInputValue={onUpdateInputValue} inputVariableText={"earnAmount"} />
          </div>
          <div className={(earnPage.selectedAddress == "") ? "" : "hide"}>
            <LoginAccessPrompt />
          </div>
        </div>
        
        <div className="title portfolioCategory">
          Farm Portfolio
        </div>
        <div className="content">
          <div className={(earnPage.selectedAddress == "") ? "hide" : "portfolioList"}>
            <PortfolioFarmList positionOpen={earnPage.positionOpen} portfolioInfo={earnPage.portfolioFarmInfo} inputAmount={portfolioPage.farmAmount} onChangeAmount={onChangeRedeemAmount} onUnstakeRedeem={onRedeem} unstakeText={"redeem"} onUpdateInputValue={onUpdateInputValue} inputVariableText={"farmAmount"} />
          </div>
          <div className={(earnPage.selectedAddress == "") ? "" : "hide"}>
            <LoginAccessPrompt />
          </div>
        </div>
      </div>
    </Style>
  );
}

PortfolioPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  portfolioPage: makeSelectPortfolioPage(),
  earnPage: makeSelectEarnPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeUnstakeAmount: evt =>
      dispatch(changeUnstakeAmount(evt.target.value)),
    onChangeRedeemAmount: evt =>
      dispatch(changeRedeemAmount(evt.target.value)),
    onRedeem: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(redeem(evt));
    },
    onUnstake: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(unstake(evt));
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

export default compose(withConnect)(PortfolioPage);
