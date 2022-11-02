/**
 *
 * HomePlatformFigures
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function HomePlatformFigures(props) {
  const {
    currentEarn,
    maxLeverage,
    highestFarmingYield,
  } = props;
  
  return (
    <Style>
      <div className="navLeftIndicators">
        <div className="navLeftIndicator">
          <div className="title">
            Current Earn
          </div>
          <div className="navLeftIndicatorNumber num">
            {currentEarn}%
          </div>
        </div>
        <div className="navLeftIndicator hide">
          <div className="title">
            Max Leverage
          </div>
          <div className="navLeftIndicatorNumber num">
            {maxLeverage} X
          </div>
        </div>
        <div className="navLeftIndicator hide">
          <div className="title">
            Highest Farming Yield
          </div>
          <div className="navLeftIndicatorNumber num">
            {highestFarmingYield}%
          </div>
        </div>
        <div className="clear"></div>
      </div>
      <div className="clear"></div>
    </Style>
  );
}

HomePlatformFigures.propTypes = {};

export default HomePlatformFigures;
