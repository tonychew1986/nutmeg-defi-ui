/**
 *
 * DashboardPage
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
import makeSelectDashboardPage from './selectors';
import {makeSelectEarnPage} from '../EarnPage/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import HomeTvlGraph from '../../components/HomeTvlGraph';
import HomeTreasuryBalanceGraph from '../../components/HomeTreasuryBalanceGraph';
import HomeTreasuryPool from '../../components/HomeTreasuryPool';
import HomeFundsBorrowed from '../../components/HomeFundsBorrowed';
import HomeUserBalance from '../../components/HomeUserBalance';
import RewardPanel from '../../components/RewardPanel';
import AvailablePools from '../../components/AvailablePools';
import HomePlatformFigures from '../../components/HomePlatformFigures';



import Style from './Style';

export function DashboardPage({
  earnPage,
}) {
  useInjectReducer({ key: 'dashboardPage', reducer });
  useInjectSaga({ key: 'dashboardPage', saga });

  return (
    <Style>
      <div className="row">
        <HomePlatformFigures currentEarn={earnPage.currentEarn} maxLeverage={earnPage.maxLeverage} highestFarmingYield={earnPage.highestFarmingYield} />
      </div>
      <div className="row">
        <div className="tvlGraph">
          <HomeTvlGraph totalTVL={earnPage.totalTVL} graphData={earnPage.tvlGraphData} />
        </div>
        <div className="treasuryGraph">
          <HomeTreasuryBalanceGraph treasuryBalance={earnPage.treasuryBalance} graphData={earnPage.treasuryGraphData} graphKey={earnPage.poolSymbol} />
        </div>
        <div className="clear"></div>
      </div>
      <div className="row">
        <div className="treasuryPool">
          <HomeTreasuryPool 
            poolsArray={earnPage.poolsArray} 
            poolTokenAddress={earnPage.poolTokenAddress} 
            poolName={earnPage.poolName}
            poolSymbol={earnPage.poolSymbol}
            poolPrincipal={earnPage.poolPrincipal} 
            poolInterestRate={earnPage.poolInterestRate} 
          />
        </div>
        <div className="fundsBorrowed">
          <HomeFundsBorrowed />
        </div>
        <div className="clear"></div>
      </div>
      <div className="row">
        <RewardPanel earnedBalance={330.123} availableBalance={earnPage.balanceNUT} lockedBalance={100.123} priceNUT={earnPage.priceNUT} distributionToken={earnPage.distributionToken} distributionEpoch={earnPage.distributionEpoch} blockHeight={earnPage.blockHeight} />
      </div>
      <div className="row">
        <HomeUserBalance selectedAddress={earnPage.selectedAddress} totalUserEarn={earnPage.totalUserEarn} totalUserFarm={earnPage.totalUserFarm} trancheUserBalance={earnPage.trancheUserBalance} trancheUserLoan={earnPage.trancheUserLoan} />
      </div>
    </Style>
  );
}

DashboardPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  dashboardPage: makeSelectDashboardPage(),
  earnPage: makeSelectEarnPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(DashboardPage);
