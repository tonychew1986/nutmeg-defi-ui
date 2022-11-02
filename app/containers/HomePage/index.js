/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 */

import React from 'react';
import { FormattedMessage } from 'react-intl';
import messages from './messages';

import HomeTvlGraph from '../../components/HomeTvlGraph';
import HomeTreasuryBalanceGraph from '../../components/HomeTreasuryBalanceGraph';
import HomeTreasuryPool from '../../components/HomeTreasuryPool';
import HomeFundsBorrowed from '../../components/HomeFundsBorrowed';
import HomeUserBalance from '../../components/HomeUserBalance';

import Style from './Style';

export default function HomePage() {
  return (
    <Style>
      <div className="row">
        <div className="tvlGraph">
          <HomeTvlGraph />
        </div>
        <div className="treasuryGraph">
          <HomeTreasuryBalanceGraph />
        </div>
        <div className="clear"></div>
      </div>
      <div className="row">
        <div className="treasuryPool">
          <HomeTreasuryPool />
        </div>
        <div className="fundsBorrowed">
          <HomeFundsBorrowed />
        </div>
        <div className="clear"></div>
      </div>
      <div className="row">
        <HomeUserBalance />
      </div>
    </Style>
  );
}
