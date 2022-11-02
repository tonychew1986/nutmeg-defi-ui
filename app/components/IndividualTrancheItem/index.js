/**
 *
 * IndividualTrancheItem
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

const numeral = require('numeral');

function IndividualTrancheItem(props) {
  const {
    tranche,
    trancheType,
    apy,
    deposit,
    onSelectTranche,
  } = props;
  
  let trancheRiskCSS;
  let trancheRiskSelectedCSS;
  
  if(trancheType == "AAA"){
    trancheRiskCSS = "trancheSelectRiskEntry trancheSelectRiskLow";
    trancheRiskSelectedCSS = "trancheSelectRiskEntry trancheSelectRiskEntrySelected trancheSelectRiskLow";
  }else if(trancheType == "AA"){
    trancheRiskCSS = "trancheSelectRiskEntry trancheSelectRiskMedium";
    trancheRiskSelectedCSS = "trancheSelectRiskEntry trancheSelectRiskEntrySelected trancheSelectRiskMedium";
  }else if(trancheType == "B"){
    trancheRiskCSS = "trancheSelectRiskEntry trancheSelectRiskHigh";
    trancheRiskSelectedCSS = "trancheSelectRiskEntry trancheSelectRiskEntrySelected trancheSelectRiskHigh";
  }
  
  return (
    <div>
      <div className={(tranche == trancheType) ? trancheRiskSelectedCSS : trancheRiskCSS} data-for="trancheData" data-multiline="true" data-tip={"APY: " + numeral(apy).format('0,0.00') + "% <br /> Deposits: $" + numeral(deposit).format('0,0.00')} onClick={() => onSelectTranche(trancheType)}>
        {trancheType}
      </div>
    </div>
  );
}

IndividualTrancheItem.propTypes = {};

export default IndividualTrancheItem;
