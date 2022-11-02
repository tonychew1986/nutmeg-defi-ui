/*
 *
 * PortfolioPage actions
 *
 */

import { 
  CHANGE_UNSTAKE_AMOUNT,
  CHANGE_REDEEM_AMOUNT,
  UPDATE_INPUT_VALUE,
} from './constants';

export function changeUnstakeAmount(amount) {
  return {
    type: CHANGE_UNSTAKE_AMOUNT,
    amount
  };
}


export function changeRedeemAmount(amount) {
  return {
    type: CHANGE_REDEEM_AMOUNT,
    amount
  };
}


export function updateInputValue(response) {
  return {
    type: UPDATE_INPUT_VALUE,
    inputData: response[0],
    value: response[1],
  };
}