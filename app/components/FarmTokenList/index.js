/**
 *
 * FarmTokenList
 *
 */

import React from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import FarmTokenPopup from '../FarmTokenPopup';

import Style from './Style';

import assetIconUsdt from './images/usdt.png';
import assetIconUsdc from './images/usdc.png';
import assetIconDai from './images/dai.png';

import iconCompound from './images/compound.png';
import iconAave from './images/aave.png';
import iconCurve from './images/curve.png';
import iconUniswap from './images/uniswap.png';

function FarmTokenList(props) {
  const {
    asset,
    assetSelected,
    assetSymbolSelected,
    assetNum,
    selectedAddress,
    allowance,
    onFarm,
    onAddAllowance,
    poolInfo,
    selectedPool,
    onSelectFarmPool,
    borrowAmount,
    onChangeBorrowAmount,
    availableBorrowBalance,
    collateralAmount,
    onChangeCollateralAmount,
    availableCollateralBalance,
    poolSymbol,
    onChangeAsset,
    adapterArray,
    onUpdateInputValue,
    selectedAllowance,
    onChangeFarmCollateralAsset,
    assetSelectedForCollateral,
    onChangeFarmBorrowAsset,
    assetNumSelectedForCollateral,
    adapterBaseTokens,
    adapterBaseTokensSelect,
    adapterBaseTokensPairSuite,
    collateralProvidedAmount,
    maxBorrow,
    maxBorrowBasedOnCollateral,
    assetSelectedForBorrow,
    addressSelectedForBorrow,
    addressAdapter,
    addressExternalCollateral,
  } = props;
  
  const poolEntry = adapterArray.map((pool, index) => {
  
    let supportedAsset = adapterBaseTokensSelect[index];

    let farmEntryShowStatus = false;

    if(assetSelected == "all"){
      farmEntryShowStatus = true;
    }else{
      for(let i = 0; i < supportedAsset.length; i++){
        if(assetSymbolSelected == supportedAsset[i][0]){
          farmEntryShowStatus = true;
          
          break;
        }else{
          farmEntryShowStatus = false;
        }
      }
    }
    
    console.log("supportedAsset", supportedAsset);
    console.log("assetSymbolSelected", assetSymbolSelected);
    
    if(farmEntryShowStatus){
      return (
        <div key={index}>
          <div className={(assetSelected == "all") ? "farmList" : "farmList"}>
            <div className="farmListEntry pool">
              <div className="farmListEntryImg">
                <img src={iconCompound} />
              </div>
            </div>
            <div className="farmListEntry pair">
              <div className="namePair">
                <div className="hide">{"pool[3]"}</div>
                Compound
              </div>
            </div>
            <div className="farmListEntry name">
              <div className="nameCategory">
                <div className="hide">{"pool[1]"}</div>
              </div>
              <div className="nameSource">
                <div className="hide">{"pool[2]"}</div>
              </div>
            </div>
            <div className="farmListEntry apy">
              <div className="hide">{"pool[4]"}%</div>
            </div>
            <div className="farmListEntry leverage">
              <div className="hide">{"pool[5]"}x</div>
            </div>
            <div className="farmListEntry farmBtn">
              <button onClick={() => onSelectFarmPool(index)}>
                Farm
              </button>
            </div>
            <div className="clear"></div>
            <div className={(selectedPool == index) ? "dropdownPanel" : "hide"}>
              <FarmTokenPopup selectedAddress={selectedAddress} poolData={pool} onFarm={onFarm} selectedAllowance={selectedAllowance} onAddAllowance={onAddAllowance} borrowAmount={borrowAmount} onChangeBorrowAmount={onChangeBorrowAmount} availableBorrowBalance={availableBorrowBalance} collateralAmount={collateralAmount} onChangeCollateralAmount={onChangeCollateralAmount} availableCollateralBalance={availableCollateralBalance} poolSymbol={poolSymbol} onChangeAsset={onChangeAsset} onUpdateInputValue={onUpdateInputValue} assetSelected={assetSelected} assetNum={assetNum} onChangeFarmCollateralAsset={onChangeFarmCollateralAsset} onChangeFarmBorrowAsset={onChangeFarmBorrowAsset} assetSelectedForCollateral={assetSelectedForCollateral} assetNumSelectedForCollateral={assetNumSelectedForCollateral} adapterBaseTokens={adapterBaseTokens} adapterBaseTokensSelect={adapterBaseTokensSelect} assetSymbolSelected={assetSymbolSelected} id={index} adapterBaseTokensPairSuite={adapterBaseTokensPairSuite} collateralProvidedAmount={collateralProvidedAmount} maxBorrow={maxBorrow} maxBorrowBasedOnCollateral={maxBorrowBasedOnCollateral} assetSelectedForBorrow={assetSelectedForBorrow} addressSelectedForBorrow={addressSelectedForBorrow} addressAdapter={addressAdapter} addressExternalCollateral={addressExternalCollateral} />
              <div className="clear"></div>
            </div>
          </div>
        </div>
      )
    }
  });
  
  return (
    <Style>
      {poolEntry}
    </Style>
  );
}


  // <Popup
  //   trigger={
  //     <button>
  //       Farm
  //     </button>
  //   }
  //   modal
  //   closeOnDocumentClick
  //   closeOnEscape
  // >
  // {close => (
  //   <div className="popupContent">
  //     <FarmTokenPopup selectedAddress={selectedAddress} poolData={pool} onFarm={onFarm} selectedAllowance={selectedAllowance} onAddAllowance={onAddAllowance} />
  //     <div className="clear"></div>
  //   </div>
  // )}
  // </Popup>

FarmTokenList.propTypes = {};

export default FarmTokenList;
