/**
 *
 * Navigation
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';


import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import {
  Link,
} from 'react-router-dom';

const numeral = require('numeral');

import Nav from './Nav';
import PopupStyle from './PopupStyle';

import logoLedger from './images/ledger.png';
import logoMetamask from './images/metamask.png';
import logoTrezor from './images/trezor.png';
import logoWalletConnect from './images/walletconnect.png';
import logoNutmeg from './images/nutmeg.png';

function Navigation(props) {
  const {
    address,
    addressShorten,
    onConnectMetamask,
    network,
    onSelectPage,
    currentPage,
    gasMode,
    gasFee,
    onToggleGas,
    currentEarn,
    maxLeverage,
    highestFarmingYield,
    balanceNUT,
  } = props;
  
  let selectedNetwork = "";
  if(network == 1){
    selectedNetwork = "main net"
  }else if(network == 3){
    selectedNetwork = "ropsten"
  }else if(network == 4){
    selectedNetwork = "rinkeby"
  }else{
    selectedNetwork = "not supported"
  }
  
  return (
    <div>
      <Nav>
        <div className="navLeft">
          <div className="navLeftLogo">
            <Link to="/">
              <div>
                <div className="svgLogo">
                  <img src={logoNutmeg} />
                </div>
                <div className="logoText">
                
                </div>
              </div>
            </Link>
          </div>
          <div className="clear"></div>
        </div>
        <div className="navRight">
          <div className="navRightLoggedIn">
            <div className={(address == "") ? "hide" : "balance"}>
              <span className="balanceNum">
                {numeral(balanceNUT).format('0,0.0000')}
              </span>
              <span className="balanceUnit">
                NUT
              </span>
            </div>
            <div className={(address == "") ? "hide" : "network"}>
              {selectedNetwork}
            </div>
            <div className={(address == "") ? "hide" : "address"}>
              {addressShorten}
            </div>
            <div className="clear"></div>
          </div>
          <div className={(address == "") ? "" : "hide"}>
            <PopupStyle
              trigger={
                <div className="connectButton">
                  <button>
                    Connect Wallet
                  </button>
                </div>
              }
              modal
              closeOnDocumentClick
              closeOnEscape
            >
            {close => (
              <div className="popupContent">
                <div className="wallet" onClick={() => { onConnectMetamask(); close();}}>
                  <div className="walletLogo">
                    <img src={logoMetamask} />
                  </div>
                  <div className="walletName">
                    Metamask
                  </div>
                </div>
                <div className="wallet disabled">
                  <div className="walletLogo">
                    <img src={logoLedger} />
                  </div>
                  <div className="walletName">
                    Ledger
                  </div>
                </div>
                <div className="wallet disabled">
                  <div className="walletLogo">
                    <img src={logoTrezor} />
                  </div>
                  <div className="walletName">
                    Trezor
                  </div>
                </div>
                <div className="wallet disabled">
                  <div className="walletLogo">
                    <img src={logoWalletConnect} />
                  </div>
                  <div className="walletName">
                    Wallet Connect
                  </div>
                </div>
                <div className="clear"></div>
              </div>
            )}
            </PopupStyle>
          </div>
        </div>
      </Nav>
    </div>
  );
}

Navigation.propTypes = {};

export default Navigation;
