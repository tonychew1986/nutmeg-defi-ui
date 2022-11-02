/**
 *
 * FarmTokenPopup
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Style from './Style';

import InputField from '../InputField';
import InputRangeIndicator from '../InputRangeIndicator';
import LoginAccessPrompt from '../LoginAccessPrompt';

import AssetInput from '../../components/AssetInput';

const numeral = require('numeral');

function FarmTokenPopup(props) {
  const {
    id,
    selectedAddress,
    onFarm,
    onAddAllowance,
    selectedAllowance,
    onUpdateInputValue,
    borrowAmount,
    onChangeBorrowAmount,
    availableBorrowBalance,
    collateralAmount,
    onChangeCollateralAmount,
    availableCollateralBalance,
    poolSymbol,
    onChangeAsset,
    assetSelected, 
    assetSymbolSelected, 
    assetNum,
    onChangeFarmCollateralAsset,
    onChangeFarmBorrowAsset,
    assetSelectedForCollateral,
    assetNumSelectedForCollateral,
    adapterBaseTokens,
    adapterBaseTokensSelect,
    collateralProvidedAmount,
    maxBorrow,
    maxBorrowBasedOnCollateral,
    assetSelectedForBorrow,
    addressSelectedForBorrow,
    addressAdapter,
    addressExternalCollateral,
  } = props;
  
  let supportedAsset = adapterBaseTokensSelect[id];
  const supportedAssetEntry = supportedAsset.map((asset, index) =>
    <div key={index}>
      {asset}
    </div>
  )
  
  return (
    <Style>
      <div className={(selectedAddress == "") ? "" : "hide"}>
        <LoginAccessPrompt />
      </div>
      <div className={(selectedAddress == "") ? "hide" : ""}>
        {supportedAssetEntry}
        <div className="category">
          <div className="section">
            X current open positions on Y. Check out your positions >
          </div>
        </div>
        <div className="category">
          <div className="section">
            <div className="sectionTitle">
              Adapter Address:
            </div>
            <div>
              {addressAdapter}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Select token to farm:
            </div> 
            <div className="selectAsset">
              <AssetInput assetArray={adapterBaseTokensSelect[id]} onChangeAsset={onChangeFarmBorrowAsset} type="single" disabled={(assetSelected == "all") ? false : true} assetSelected={assetSymbolSelected} assetNumSelected={assetSelected} titleStatus={false} />
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Farm Token Address:
            </div>
            <div>
              {addressSelectedForBorrow}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Maximum available collateral:
            </div>
            <div>
              {numeral(collateralAmount).format('0,0.0000')} {assetSelectedForBorrow}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Amount of collateral provided for position:
            </div>
            <div>
              <InputField
                id="collateralProvidedAmount"
                type="text"
                placeholder="Please enter your borrow amount"
                value={collateralProvidedAmount}
                onChange={onChangeCollateralAmount}
              />
            </div>
            <div>
              <InputRangeIndicator balance={collateralAmount} onUpdateInputValue={onUpdateInputValue} value={"collateralProvidedAmount"} />
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className="category">
          <div className="section">
            <div className="sectionTitle">
              Maximum available to borrow:
            </div>
            <div>
              {numeral(maxBorrow).format('0,0.0000')}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Maximum available to borrow based on collateral provided:
            </div>
            <div>
              {numeral(maxBorrowBasedOnCollateral).format('0,0.0000')}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Leverage used:
            </div>
            <div>
              {numeral(borrowAmount/collateralProvidedAmount).format('0,0.0000')}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              External Collateral Token Address:
            </div>
            <div>
              {addressExternalCollateral}
            </div>
          </div>
          <div className="section">
            <div className="sectionTitle">
              Amount of funds to borrow:
            </div>
            <div>
              <InputField
                id="borrowAmount"
                type="text"
                placeholder="Please enter your borrow amount"
                value={borrowAmount}
                onChange={onChangeBorrowAmount}
              />
            </div>
            <div>
              <InputRangeIndicator balance={maxBorrowBasedOnCollateral} onUpdateInputValue={onUpdateInputValue} value={"borrowAmount"} />
            </div>
            <div className="clear"></div>
          </div>
        </div>
        <div className={(selectedAllowance <= 1) ? "" : "hide"}>
          <button onClick={() => onAddAllowance([assetSelectedForCollateral, assetNumSelectedForCollateral])}>
            Approve Allowance
          </button>
        </div>
        {assetSelected}, {assetNum}, {selectedAllowance}, {assetNumSelectedForCollateral}, {assetSelectedForCollateral}
        <div className={(selectedAllowance <= 1) ? "hide" : ""}>
          <div className={(borrowAmount > 0 && collateralProvidedAmount > 0) ? "" : "disabled"}>
            <button onClick={() => onFarm([assetSelectedForCollateral, assetNumSelectedForCollateral])}>
              Open Positions
            </button>
          </div>
        </div>
      </div>
    </Style>
  );
}

FarmTokenPopup.propTypes = {};

export default FarmTokenPopup;
