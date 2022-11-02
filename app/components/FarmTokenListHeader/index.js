/**
 *
 * FarmTokenListHeader
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function FarmTokenListHeader() {
  return (
    <Style>
      <div className="">
        <div className="farmListEntry farmListEntryHeader pool">
          Pool
        </div>
        <div className="farmListEntry farmListEntryHeader pair">
        
        </div>
        <div className="farmListEntry farmListEntryHeader name">
        
        </div>
        <div className="farmListEntry farmListEntryHeader apy">
          
        </div>
        <div className="farmListEntry farmListEntryHeader leverage">
          
        </div>
        <div className="farmListEntry farmListEntryHeader farmBtn">
        
        </div>
        <div className="clear"></div>
      </div>
    </Style>
  );
}

FarmTokenListHeader.propTypes = {};

export default FarmTokenListHeader;
