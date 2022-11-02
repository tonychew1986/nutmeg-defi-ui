/**
 *
 * ContractAddress
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import Style from './Style';

let iconLink = <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABmJLR0QA/wD/AP+gvaeTAAAAkklEQVRIie2VQQqAIBQFh+5QdKSuUsetRfs8SG2Mgur7UmvlgLjxvRERhcJLOsABqzF2lDUXlkAwWRBccEMNjF8JGmDymX3OJjjvfAbanIK7cimvCJ7KswiscglLkFxuCdTyqCN6s/MowcBxzxsrHCsA6IXyJIHKJV8llEn8LnB+Dj3Z1jPtMOjQ/oSnsfiOgs4GdhCGDgYn7KYAAAAASUVORK5CYII="/>

function ContractAddress(props) {
  const {
    address,
  } = props;
  
  return (
    <Style>
      <div className="title">
        Contract Address:
      </div>
      <div className="">
        <div className="address">
          <CopyToClipboard text={address}>
            <span>
              {(address).substring(0,8) + "..." + (address).substr(-5)}
            </span>
          </CopyToClipboard>
        </div>
        <div className="link">
          <a href={"https://etherscan.io/address/" + address} target="_blank">
            {iconLink}
          </a>
        </div>
        <div className="clear"></div>
      </div>
    </Style>
  );
}

ContractAddress.propTypes = {};

export default ContractAddress;
