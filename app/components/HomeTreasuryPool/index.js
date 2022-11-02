/**
 *
 * HomeTreasuryPool
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import TreasuryPoolEntry from '../TreasuryPoolEntry';

import assetIconUsdt from './images/usdt.png';
import assetIconUsdc from './images/usdc.png';
import assetIconDai from './images/dai.png';

function HomeTreasuryPool(props) {
  const {
    asset,
    poolsArray,
    poolName,
    poolSymbol,
    poolPrincipal,
    poolInterestRate,
  } = props;
  
  
  const pools = poolsArray.map((pool, index) =>
    <TreasuryPoolEntry 
      key={index}
      poolAddress={pool}
      name={poolName[index]}
      symbol={poolSymbol[index]}
      principle={poolPrincipal[index]}
      interest={poolInterestRate[index]}
      poolAddress={pool}
      assetIcon={assetIconUsdt}
      asset={"USDT"}
      rate={0.09}
      rateNut={31.52}
    />
  )
  
  return (
    <Style>
      <div className="content">
        <div className="title">
          Available Treasury Pools
        </div>
        
        <div className={(poolsArray.length > 0) ? "hide" : "nullDisplay"}>
          There is currently no available pool
        </div>
        
        <div className={(poolsArray.length > 0) ? "pool" : "hide"}>
          <div className="header">
            <div className="headerPool">
              Pool
            </div>
            <div className="headerDeposit">
              Deposit
            </div>
            <div className="headerInterest">
              Interest
            </div>
            <div className="headerAddress">
              Address
            </div>
            <div className="clear"></div>
          </div>
          {pools}
          <div className="clear"></div>
        </div>
      </div>
    </Style>
  );
}

  // <TreasuryPoolEntry 
  //   assetIcon={assetIconUsdt}
  //   asset={"USDT"}
  //   rate={0.09}
  //   rateNut={31.52}
  // />
  // <TreasuryPoolEntry 
  //   assetIcon={assetIconUsdc}
  //   asset={"USDC"}
  //   rate={0.09}
  //   rateNut={31.52}
  // />
  // <TreasuryPoolEntry 
  //   assetIcon={assetIconDai}
  //   asset={"DAI"}
  //   rate={0.09}
  //   rateNut={31.52}
  // />

HomeTreasuryPool.propTypes = {};

export default HomeTreasuryPool;
