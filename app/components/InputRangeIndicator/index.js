/**
 *
 * InputRangeIndicator
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

function InputRangeIndicator(props) {
  const {
    balance,
    onUpdateInputValue,
    value,
  } = props;
  
  
  
  return (
    <Style>
      <div className="range rangeFirst">
        <div className="rangeText" onClick={() => onUpdateInputValue([value, 0])}>
          0%
        </div>
      </div>
      <div className="range">
        <div className="rangeText" onClick={() => onUpdateInputValue([value, (25/100) * balance])}>
          25%
        </div>
      </div>
      <div className="range">
        <div className="rangeText" onClick={() => onUpdateInputValue([value, (50/100) * balance])}>
          50%
        </div>
      </div>
      <div className="range">
        <div className="rangeText" onClick={() => onUpdateInputValue([value, (75/100) * balance])}>
          75%
        </div>
      </div>
      <div className="range rangeLast">
        <div className="rangeText" onClick={() => onUpdateInputValue([value, balance])}>
          100%
        </div>
      </div>
      <div className="clear"></div>
    </Style>
  );
}

InputRangeIndicator.propTypes = {};

export default InputRangeIndicator;
