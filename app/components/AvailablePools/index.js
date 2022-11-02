/**
 *
 * AvailablePools
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function AvailablePools(props) {
  const {
    poolsArray,
    poolTokenAddress,
  } = props;
  
  const pools = poolsArray.map((pool, index) =>
    <div key={index} className="assetEntry">
      <div>
        {pool}
      </div>
      <div className="clear"></div>
    </div>
  );
    
  return (
    <Style>
      <div className="title">
        Available Pools
      </div>
      <div className="content">
        {pools}
      </div>
    </Style>
  );
}

AvailablePools.propTypes = {};

export default AvailablePools;
