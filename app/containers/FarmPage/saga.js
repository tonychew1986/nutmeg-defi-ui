
import { take, delay, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  CHANGE_FARM_ASSET,
  CHANGE_FARM_COLLATERAL_ASSET,
  CHANGE_FARM_BORROW_ASSET,
  CHANGE_COLLATERAL_AMOUNT,
  UPDATE_INPUT_VALUE,
} from 'containers/FarmPage/constants';

import {
  changeFarmAssetSuccess,
  changeFarmCollateralAssetSuccess,
  changeFarmBorrowAssetSuccess,
  changeCollateralAmountSuccess,
  updateInputValueSuccess,
} from 'containers/FarmPage/actions';

import {
  loading,
  loaded,
} from 'containers/EarnPage/actions';

import {
  makeSelectEarnPage
} from 'containers/EarnPage/selectors';

import {
  makeSelectFarmPage
} from 'containers/FarmPage/selectors';

import mainnet_token_usdt from '../../abis/mainnet_token_usdt.js'
import mainnet_token_usdc from '../../abis/mainnet_token_usdc.js'

import mock_erc_abi from '../../abis/mock_erc_abi.js'

import nutmeg_abi from '../../abis/nutmeg_abi.js'
import nutmeg_abi_test from '../../abis/nutmeg_abi_test.js'
import nut_abi from '../../abis/nut_abi.js'
import nut_distributor_abi from '../../abis/nut_distributor_abi.js'
import compoundAdapter_abi from '../../abis/compoundAdapter_abi.js'

// Individual exports for testing
export default function* farmPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CHANGE_FARM_ASSET, _changeAsset);
  yield takeLatest(CHANGE_FARM_COLLATERAL_ASSET, _changeCollateral);
  yield takeLatest(CHANGE_FARM_BORROW_ASSET, _changeBorrow);
  yield takeLatest(CHANGE_COLLATERAL_AMOUNT, _changeCollateralAmount);
  yield takeLatest(UPDATE_INPUT_VALUE, _updateInputValue);
  
}

export function* _updateInputValue(data) {
  yield put(loading());
  
  let earnInfo = yield select(makeSelectEarnPage());
  let farmInfo = yield select(makeSelectFarmPage());
  let assetInfo = earnInfo["asset"];
  let selectedSymbol = farmInfo["assetSelectedForBorrow"];
  console.log("selectedSymbol", selectedSymbol)
  
  let inputData = data["inputData"];
  let maxBorrowBasedOnCollateral = 0;
  
  let collateralAmount = data["value"];
  console.log("collateralAmount", collateralAmount)
  
  if(inputData == "collateralProvidedAmount"){
    let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
    console.log("abiArrayNutmeg", abiArrayNutmeg)
    
    
    let nutmegAddress = earnInfo["addressNutmeg"]; 
    
    let contractNutmeg = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
    console.log("contractNutmeg", contractNutmeg)
    
    let tokenAddress;
    let amtSuffix;
    
    const BN = web3.utils.BN;
    
    for(let i=0; i<assetInfo.length; i++){
      if(assetInfo[i][0] == selectedSymbol){
        tokenAddress = assetInfo[i][1];
        amtSuffix = new BN(10).pow(new BN(assetInfo[i][2]));
      }
    }
    
    console.log("tokenAddress", tokenAddress)
    
    
    maxBorrowBasedOnCollateral = yield call(contractNutmeg.methods.getMaxBorrowAmount(tokenAddress, collateralAmount).call);
    console.log("maxBorrowBasedOnCollateral", maxBorrowBasedOnCollateral)
  }
  
  yield put(updateInputValueSuccess(inputData, collateralAmount, maxBorrowBasedOnCollateral));
  
  yield put(loaded());
}

export function* _changeAsset(data) {
  yield put(loading());
  
  let earnInfo = yield select(makeSelectEarnPage());
  
  let asset = "";
  let assetNum = data["asset"]; 
  
  try{
    asset = earnInfo["poolSymbol"][data["asset"]][0];
  }catch{
    asset = "all";
  }
  console.log("_changeAsset earnInfo[poolSymbol]", earnInfo["poolSymbol"]);
  console.log("_changeAsset asset", asset);
  
  yield put(changeFarmAssetSuccess(asset, assetNum));
  
  yield put(loaded());
}

export function* _changeCollateral(data) {
  yield put(loading());
  
  let earnInfo = yield select(makeSelectEarnPage());
  
  let n = parseFloat(data["assetNum"]);
  
  let asset = earnInfo["poolSymbol"][n][0];
  let assetNum = n;
  
  yield put(changeFarmCollateralAssetSuccess(asset, assetNum));
  
  yield put(loaded());
}

export function* _changeCollateralAmount(data) {
  yield put(loading());
  
  let earnInfo = yield select(makeSelectEarnPage());
  let farmInfo = yield select(makeSelectFarmPage());
  let assetInfo = earnInfo["asset"];
  let selectedSymbol = farmInfo["assetSelectedForBorrow"];
  console.log("selectedSymbol", selectedSymbol)
  
  console.log("_changeCollateralAmount", data);
  
  let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
  console.log("abiArrayNutmeg", abiArrayNutmeg)
  
  
  let nutmegAddress = earnInfo["addressNutmeg"]; 
  
  let contractNutmeg = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
  console.log("contractNutmeg", contractNutmeg)
  
  let tokenAddress;
  let amtSuffix;
  
  const BN = web3.utils.BN;
  
  for(let i=0; i<assetInfo.length; i++){
    if(assetInfo[i][0] == selectedSymbol){
      tokenAddress = assetInfo[i][1];
      amtSuffix = new BN(10).pow(new BN(assetInfo[i][2]));
    }
  }
  
  console.log("tokenAddress", tokenAddress)
  
  let collateralAmount = data["collateralAmount"];
  
  let maxBorrowBasedOnCollateral = yield call(contractNutmeg.methods.getMaxBorrowAmount(tokenAddress, collateralAmount).call);
  console.log("maxBorrowBasedOnCollateral", maxBorrowBasedOnCollateral)
  
  yield put(changeCollateralAmountSuccess(collateralAmount, maxBorrowBasedOnCollateral));
  
  yield put(loaded());
}

export function* _changeBorrow(data) {
  yield put(loading());
  
  console.log("_changeBorrow");
  let earnInfo = yield select(makeSelectEarnPage());
  
  let addressUser = earnInfo["selectedAddress"];
  let assetInfo = earnInfo["asset"];
  let adapterBaseTokensPairSuite = earnInfo["adapterBaseTokensPairSuite"];
  let adapterAddress = earnInfo["adapterAddressSelected"];
  
  let n = parseFloat(data["assetInfo"]);
  
  let asset = data["assetInfo"]["label"];
  let assetNum = data["assetInfo"]["value"];
  console.log("asset", asset)
  console.log("assetNum", assetNum)
  
  let abi = mainnet_token_usdt;
  
  let abiArrayToken = JSON.parse(abi, 'utf-8');
  console.log("abiArrayToken", abiArrayToken)
  
  let tokenAddress;
  let amtSuffix;
  
  const BN = web3.utils.BN;
  
  for(let i=0; i<assetInfo.length; i++){
    if(assetInfo[i][0] == asset[0]){
      tokenAddress = assetInfo[i][1];
      amtSuffix = new BN(10).pow(new BN(assetInfo[i][2]));
    }
  }
  
  console.log("tokenAddress", tokenAddress)
  
  let contractToken = new web3.eth.Contract(abiArrayToken, tokenAddress)
  console.log("contractToken", contractToken)
  
  let collateralAmount = 0;
  
  try{
    collateralAmount = yield call(contractToken.methods.balanceOf(addressUser).call);
  }catch{
    collateralAmount = 0;
  }
  
  let tokenAmt = new BN(amtSuffix.mul(new BN(10)));
  
  collateralAmount = collateralAmount/amtSuffix;
  
  console.log("collateralAmount", collateralAmount)
  
  
  
  let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
  console.log("abiArrayNutmeg", abiArrayNutmeg)
  
  
  let nutmegAddress = earnInfo["addressNutmeg"]; 
  
  let contractNutmeg = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
  console.log("contractNutmeg", contractNutmeg)
  
  
  let getMaxBorrowAmount = yield call(contractNutmeg.methods.getMaxBorrowAmount(tokenAddress, collateralAmount).call);
  console.log("getMaxBorrowAmount", getMaxBorrowAmount)
  
  let addressExternalCollateral;
  console.log("adapterAddress", adapterAddress)
  console.log("adapterBaseTokensPairSuite", adapterBaseTokensPairSuite)
  
  // let adapterAddress = adapterBaseTokensPairSuite[1][0]; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"
  // let baseToken = adapterBaseTokensPairSuite[1][1][0][0]; //"0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49";
  // let collateralToken = adapterBaseTokensPairSuite[1][1][0][1]; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"; /
  for(var i=0;i<adapterBaseTokensPairSuite.length; i++){
    if(adapterBaseTokensPairSuite[i][0] == adapterAddress){
      console.log("adapterBaseTokensPairSuite[i][0]", adapterBaseTokensPairSuite[i][0])
      
      let tokenPair = adapterBaseTokensPairSuite[i][1];
      console.log("tokenPair", tokenPair)
      
      for(var r=0;r<tokenPair.length; r++){
        if(tokenPair[r][0] == tokenAddress){
          console.log("tokenPair[r][0]", tokenPair[r][0])
          
          addressExternalCollateral = tokenPair[r][1];
          
          break;
        }
      }
    }
  }
  console.log("addressExternalCollateral", addressExternalCollateral)
  
  yield put(changeFarmBorrowAssetSuccess(asset, assetNum, collateralAmount, getMaxBorrowAmount, tokenAddress, addressExternalCollateral));
  
  yield put(loaded());

}

