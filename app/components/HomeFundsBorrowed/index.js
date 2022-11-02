/**
 *
 * HomeFundsBorrowed
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import iconCompound from './images/compound.png';
import iconAave from './images/aave.png';
import iconCurve from './images/curve.png';
import iconUniswap from './images/uniswap.png';

const numeral = require('numeral');

function HomeFundsBorrowed() {
  return (
    <Style>
      <div className="content">
        <div className="title">
          Loaned Collaterals
        </div>
        <div className="platform">
          <div className="platformIcon">
            <img src={iconCompound} />
          </div>
          <div className="platformFigures">
            <div className="platformFiguresTitle">
              TVL Staked:
            </div>
            <div className="platformFiguresAmount num">
              {numeral(parseFloat(1832.44)).format('0,0.000')}
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="platform">
          <div className="platformIcon">
            <img src={iconAave} />
          </div>
          <div className="platformFigures">
            <div className="platformFiguresTitle">
              TVL Staked:
            </div>
            <div className="platformFiguresAmount num">
              {numeral(parseFloat(1832.44)).format('0,0.000')}
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="platform">
          <div className="platformIcon">
            <img src={iconCurve} />
          </div>
          <div className="platformFigures">
            <div className="platformFiguresTitle">
              TVL Staked:
            </div>
            <div className="platformFiguresAmount num">
              {numeral(parseFloat(1832.44)).format('0,0.000')}
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="platform">
          <div className="platformIcon">
            <img src={iconUniswap} />
          </div>
          <div className="platformFigures">
            <div className="platformFiguresTitle">
              TVL Staked:
            </div>
            <div className="platformFiguresAmount num">
              {numeral(parseFloat(1832.44)).format('0,0.000')}
            </div>
          </div>
          <div className="clear"></div>
        </div>
        <div className="clear"></div>
      </div>
    </Style>
  );
}

HomeFundsBorrowed.propTypes = {};

export default HomeFundsBorrowed;
