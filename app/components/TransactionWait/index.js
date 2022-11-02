/**
 *
 * TransactionWait
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import MoonLoader from "react-spinners/MoonLoader";
import PulseLoader from "react-spinners/PulseLoader";
import HashLoader from "react-spinners/HashLoader";


 
function TransactionWait(props) {
  const {
    txAction,
    txHash
  } = props;
  
  return (
    <Style>
      <div className={(txAction == "" || txHash == "") ? "hide" : "panel"}>
        <div className="loader">
          <HashLoader
            size={30}
            color={"#666"}
            loading={true}
          />
        </div>
        <div className="info">
          <div className="action">
            {txAction}
          </div>
          <div className="hash">
            <a href={"https://etherscan.io/tx/" + txHash} target="_blank">
              {txHash}
            </a>
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </Style>
  );
}

TransactionWait.propTypes = {};

export default TransactionWait;
