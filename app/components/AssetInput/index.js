/**
 *
 * AssetInput
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

function AssetInput(props) {
  const {
    assetArray,
    onChangeAsset,
    type,
    titleStatus,
    disabled,
    assetSelected,
    assetNumSelected,
  } = props;
  
  const options = [
    { value: 0, label: 'METH' }
  ]
  
  let assetOption = [];
  
  assetOption = assetArray.map(populateOptions);
  
  function populateOptions(asset, index) {
    return {value: index, label: asset};
  }
  
  if(type == "multi"){
    assetOption.unshift({value: "all", label: "all"})
  }
  
  // console.log("AssetInput", assetSelected, assetNumSelected);
  console.log("assetOption", assetOption);
  
  return (
    <Style>
      <div className={(titleStatus == false) ? "hide" : "title"}>
       Select Asset:
      </div>
      <div className={(assetArray.length > 0) ? "selectInput" : "selectInput"}>
        <Select 
          options={assetOption} 
          // defaultValue={(assetSelected) ? {value: assetNumSelected, label: assetSelected} : assetOption[0]}
          onChange={onChangeAsset}
          isDisabled={disabled}
        />
      </div>
    </Style>
  );
}

AssetInput.propTypes = {};

export default AssetInput;
