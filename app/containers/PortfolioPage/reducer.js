/*
 *
 * PortfolioPage reducer
 *
 */
import produce from 'immer';
import { 
  CHANGE_UNSTAKE_AMOUNT,
  CHANGE_REDEEM_AMOUNT, 
  UPDATE_INPUT_VALUE,
} from './constants';

export const initialState = {
  farmAmount: "",
  earnAmount: "",
};

/* eslint-disable default-case, no-param-reassign */
const portfolioPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_UNSTAKE_AMOUNT:
        draft.earnAmount = action.amount;
      
        break;
        
      case CHANGE_REDEEM_AMOUNT:
        draft.farmAmount = action.amount;
        
        break;
        
      case UPDATE_INPUT_VALUE:
        console.log("UPDATE_INPUT_VALUE");
        
        if(action.inputData == "farmAmount"){
          draft.farmAmount = action.value;
        }else if(action.inputData == "earnAmount"){
          draft.earnAmount = action.value;
        }
        
        break;
    }
  });

export default portfolioPageReducer;
