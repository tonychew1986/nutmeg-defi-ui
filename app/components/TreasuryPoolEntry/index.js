/**
 *
 * TreasuryPoolEntry
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';


import {
  Link,
} from 'react-router-dom';

const numeral = require('numeral');

let arrowRight = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABmJLR0QA/wD/AP+gvaeTAAADZ0lEQVRoge2Zy0tVURTGf+nNkO4gHw1SB2FEgyapN2sUvSjk2iQknGj9DQ2aZZPKaZHRpCiURhFEQUFUKg3NgijIR5AlPjKjQaBBdBusc7jrHI/evc/ZXYruBxvOfXzf+tY5+3XWhhJK+L+xzpFOGdAKHARagB1AHZD2fv8OzADvgFHgGTAC/HIUPzYagF5gGshZtk/ARaC+6K6BGuAa8MPQ7FptGbgKVBfLfCfwJcLIDHAd6AKakSTXe60W6VrdwA1gNoK/AJz4k8ZTyF0PBx4EskC5pVY7MBSh1+f97hSVwINQoHHgiAPtNmAipH3fi+kEKVaavwVsdBUAma36WZmEkycR7jZnXYiugp5QrCtJBTspnnkf4SQ64grVEJxtbrlwZ4gBFfczUBVHRHedcQr3+UZkML5HptEkSAOTJOhKDQQXqaMGnNPq/4skT6JN6S0jWxNj9CryoCFnK2LcZRLDSu+CKamc4N4maxGwGbdJtCutKWTTWBB7FWkG+7nYZRIpYE5ptYb/EJXRIXX9EPhpGfSlp7Hofa4GngK7LXXwYj9Snw+YkO6Sz7grRlAfTbh5EieVxh0TwhtFSDoIXSSRUfzXJgQdsMYyWBSikthmwd+suAsmBD3/V9g4XQPdSjOHrBmm2KB4yyYE1wkkfQLWCbjsQlHmmyw1rLuQHsQtlsE0XJgHmX5XHcRR68CYut4ZIyDITPOE/Iv6V+Aw8CqGlvYwFv4xKoFRdb0vRsBdwGPy5r8hm8E45gH2q+sRE8Ie8o9sFrutRNQ2Ik638ZEC5pVexoRUhhSdbDdzjbg1D3BM6Rlv5kAqZj5xyJBzBrfmAZ4rzfM2xHpkzvXJbQac7cAH4C1uzGdV/CUsX2hAyn2+wAT5Qm0xkEZeTf34l+OI1CALhy/S78qdAW6ruPPEfKkHqVXqPUyPC3cFcC4U83hSwT6Kl0TY/CUXoimkzKeFB3A7JtIEu00OuIddwXhNVLIyiUnMZqdCyBIcsL55Z8VdHymkwJQLtWGkemCzYqeQRUrP83rGcXbno9BBcHn32xxwE3mHzSCHGhVeq/W+O4WUKFfjJx6wpqhCnoZe7OK2JeSubyqWeY06pGL20dCsblPI9mBLEgMuj1kzBI9Z6wkes04jReIXyDHrKH/BMWsJJfzr+A1uBJN9WNzstgAAAABJRU5ErkJggg==" />;

function TreasuryPoolEntry(props) {
  const {
    poolAddress,
    assetIcon,
    asset,
    rate,
    rateNut,
    principle,
    interest,
    name,
    symbol,
  } = props;
  
  return (
    <Style>
      <div className="poolEntry">
        <div className="poolEntryLogo">
          <img src={assetIcon} />
        </div>
        <div className="poolEntryAssetInfo">
          <div className="poolEntryAssetName">
            {name}
          </div>
          <div className="poolEntryAssetSymbol">
            {symbol}
          </div>
        </div>
        <div className="poolEntryAssetDeposit">
          <span className="num">
            {numeral(parseFloat(principle)).format('0,0.000')}
          </span> 
          <span>
            {symbol}
          </span>
        </div>
        <div className="poolEntryAssetInterest">
          <span className="num">
            {numeral(interest[0]/100).format('0,0.000')}
          </span> 
          <span>
            %
          </span>
        </div>
        <div className="poolEntryAssetAddress">
          <a href={"https://etherscan.io/address/" + poolAddress} target="_blank">
            {(poolAddress).substring(0,8) + "..." + (poolAddress).substr(-5)}
          </a>
        </div>
        <div className="poolEntryBtn">
          <Link to="/earn">
            {arrowRight}
          </Link>
        </div>
      </div>
    </Style>
  );
}

TreasuryPoolEntry.propTypes = {};

export default TreasuryPoolEntry;
