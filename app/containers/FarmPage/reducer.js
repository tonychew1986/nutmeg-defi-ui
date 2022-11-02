/*
 *
 * FarmPage reducer
 *
 */
import produce from 'immer';
import { 
  CHANGE_FARM_ASSET_SUCCESS,
  CHANGE_FARM_COLLATERAL_ASSET_SUCCESS,
  CHANGE_FARM_BORROW_ASSET_SUCCESS,
  CHANGE_COLLATERAL_AMOUNT_SUCCESS,
  CHANGE_BORROW_AMOUNT,
  UPDATE_INPUT_VALUE_SUCCESS,
} from './constants';

export const initialState = {
  assetSelected: "all",
  assetSymbolSelected: "all",
  assetSelectedForCollateral: "",
  assetNumSelectedForCollateral: 0,
  assetSelectedForBorrow: "",
  addressSelectedForBorrow: "",
  assetNumSelectedForBorrow: 0,
  collateralAmount: 0,
  collateralProvidedAmount: 0,
  maxBorrow: 0,
  borrowAmount: 0,
  maxBorrowBasedOnCollateral: 0,
  addressExternalCollateral: "",
};

/* eslint-disable default-case, no-param-reassign */
const farmPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_FARM_ASSET_SUCCESS:
        console.log("action.asset", action.asset);
        console.log("action.assetNum", action.assetNum);
        draft.assetSelected = action.assetNum;
        draft.assetSymbolSelected = action.asset;
        // draft.assetNumSelected = action.assetNum;
        // draft.assetSelected = draft.poolSymbol[action.assetNum];
        
        break;
        
      case CHANGE_FARM_COLLATERAL_ASSET_SUCCESS:
        console.log("CHANGE_FARM_COLLATERAL_ASSET action.assetNum", action.asset);
        console.log("CHANGE_FARM_COLLATERAL_ASSET action.assetNum", action.assetNum);
        draft.assetNumSelectedForCollateral = action.assetNum;
        draft.assetSelectedForCollateral = action.asset;
        
        break;
        
      case CHANGE_FARM_BORROW_ASSET_SUCCESS:
        draft.assetNumSelectedForBorrow = action.assetNum;
        draft.assetSelectedForBorrow = action.asset;
        draft.collateralAmount = action.collateralAmount;
        draft.maxBorrow = action.maxBorrow;
        draft.addressSelectedForBorrow = action.address;
        draft.addressExternalCollateral = action.addressExternalCollateral;
        
        draft.collateralProvidedAmount = 0;
        draft.borrowAmount = 0;
        draft.maxBorrowBasedOnCollateral = 0;
        
        break;
        
      case CHANGE_COLLATERAL_AMOUNT_SUCCESS:
        draft.collateralProvidedAmount = action.amount;
        draft.maxBorrowBasedOnCollateral = action.maxBorrowBasedOnCollateral;
        
        break;
        
        
      case CHANGE_BORROW_AMOUNT:
        draft.borrowAmount = action.borrowAmount;

        break;
        
      case UPDATE_INPUT_VALUE_SUCCESS:
        console.log("UPDATE_INPUT_VALUE_SUCCESS");
        
        if(action.inputData == "borrowAmount"){
          draft.borrowAmount = action.amount;
        }else if(action.inputData == "collateralProvidedAmount"){
          draft.collateralProvidedAmount = action.amount;
          draft.maxBorrowBasedOnCollateral = action.maxBorrowBasedOnCollateral;
        }
        
        break;
    }
  });

export default farmPageReducer;
