/*
 *
 * FarmPage actions
 *
 */

import { 
  CHANGE_FARM_ASSET,
  CHANGE_FARM_ASSET_SUCCESS,
  CHANGE_FARM_COLLATERAL_ASSET,
  CHANGE_FARM_COLLATERAL_ASSET_SUCCESS,
  CHANGE_FARM_BORROW_ASSET,
  CHANGE_FARM_BORROW_ASSET_SUCCESS,
  CHANGE_COLLATERAL_AMOUNT,
  CHANGE_COLLATERAL_AMOUNT_SUCCESS,
  UPDATE_INPUT_VALUE,
  UPDATE_INPUT_VALUE_SUCCESS,
  CHANGE_BORROW_AMOUNT,
} from './constants';

export function changeFarmAsset(asset) {
  console.log("changeFarmAsset asset", asset);
  return {
    type: CHANGE_FARM_ASSET,
    asset
  };
}

export function changeFarmAssetSuccess(asset, assetNum) {
  console.log("assetSymbol", asset, assetNum);
  return {
    type: CHANGE_FARM_ASSET_SUCCESS,
    asset,
    assetNum
  };
}

export function changeFarmCollateralAsset(assetNum) {
  return {
    type: CHANGE_FARM_COLLATERAL_ASSET,
    assetNum
  };
}

export function changeFarmCollateralAssetSuccess(asset, assetNum) {
  return {
    type: CHANGE_FARM_COLLATERAL_ASSET_SUCCESS,
    asset,
    assetNum
  };
}

export function changeFarmBorrowAsset(assetInfo) {
  console.log("changeFarmBorrowAsset", assetInfo);
  return {
    type: CHANGE_FARM_BORROW_ASSET,
    assetInfo
  };
}

export function changeFarmBorrowAssetSuccess(asset, assetNum, collateralAmount, maxBorrow, address, addressExternalCollateral) {
  return {
    type: CHANGE_FARM_BORROW_ASSET_SUCCESS,
    asset,
    assetNum, 
    collateralAmount, 
    maxBorrow,
    address,
    addressExternalCollateral,
  };
}


export function changeCollateralAmount(collateralAmount) {
  console.log("changeCollateralAmount", collateralAmount);
  return {
    type: CHANGE_COLLATERAL_AMOUNT,
    collateralAmount
  };
}


export function changeCollateralAmountSuccess(amount, maxBorrowBasedOnCollateral) {
  console.log("changeCollateralAmountSuccess", amount, maxBorrowBasedOnCollateral);
  return {
    type: CHANGE_COLLATERAL_AMOUNT_SUCCESS,
    amount, 
    maxBorrowBasedOnCollateral
  };
}


export function updateInputValue(response) {
  return {
    type: UPDATE_INPUT_VALUE,
    inputData: response[0],
    value: response[1],
  };
}

export function updateInputValueSuccess(inputData, amount, maxBorrowBasedOnCollateral) {
  return {
    type: UPDATE_INPUT_VALUE_SUCCESS,
    inputData,
    amount, 
    maxBorrowBasedOnCollateral
  };
}


export function changeBorrowAmount(borrowAmount) {
  console.log("changeBorrowAmount", borrowAmount);
  return {
    type: CHANGE_BORROW_AMOUNT,
    borrowAmount
  };
}