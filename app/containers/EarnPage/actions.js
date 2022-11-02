/*
 *
 * EarnPage actions
 *
 */
 
 import { 
   LOADING,
   LOADED,
   BLOCKCHAIN_TRANSACTION_LOADING,
   BLOCKCHAIN_TRANSACTION_LOADED,
   SELECT_PAGE,
   CONNECT_METAMASK,
   CONNECT_METAMASK_SUCCESS,
   CONNECT_METAMASK_ERROR,
   CHANGE_DEPOSIT_AMOUNT,
   CHANGE_WITHDRAW_AMOUNT,
   CHANGE_ALLOWANCE_AMOUNT,
   DEPOSIT,
   DEPOSIT_SUCCESS,
   DEPOSIT_ERROR,
   WITHDRAW,
   WITHDRAW_SUCCESS,
   WITHDRAW_ERROR,
   GET_BALANCE,
   GET_BALANCE_SUCCESS,
   GET_VAULT_EXCHANGE_RATE_SUCCESS,
   GET_VAULT_TVL_SUCCESS,
   GET_ALLOWANCE_SUCCESS,
   ADD_ALLOWANCE,
   ADD_ALLOWANCE_SUCCESS,
   ADD_ALLOWANCE_ERROR,
   SET_MAX_ALLOWANCE,
   UPDATE_LOADING_SCREEN,
   UPDATE_TVL,
   UPDATE_GAS,
   TOGGLE_GAS,
   GET_ASSET_PRICE_SUCCESS,
   TOGGLE_LAYOUT,
   FARM,
   FARM_SUCCESS,
   FARM_ERROR,
   REDEEM,
   REDEEM_SUCCESS,
   REDEEM_ERROR,
   UNSTAKE,
   UNSTAKE_SUCCESS,
   UNSTAKE_ERROR,
   DEPOSIT_APPROVE,
   DEPOSIT_APPROVE_SUCCESS,
   DEPOSIT_APPROVE_ERROR,
   FARM_APPROVE,
   FARM_APPROVE_SUCCESS,
   FARM_APPROVE_ERROR,
   SELECT_TRANCHE,
   CHANGE_ASSET,
   CHANGE_ASSET_SUCCESS,
   UPDATE_INPUT_VALUE,
   SELECT_FARM_POOL,
   GET_TOKEN_DISTRIBUTION_INFO_SUCCESS,
   INVALID_NETWORK,
   GET_TRANCHE_BALANCE_SUCCESS,
   INITIAL_LOADED,
   GET_POOLS_DATA,
   GET_POOL_ADDRESS,
   GET_TOTAL_TVL,
   GET_TREASURY_BALANCE,
   GET_POOL_PRINCIPAL,
   GET_POOL_INTEREST_RATE,
   GET_POOL_SYMBOL,
   GET_POOL_NAME,
   GET_BALANCE_NUT,
   GET_ADAPTERS,
   GET_DASHBOARD_INFO,
   GET_TVL_GRAPH,
   GET_TREASURY_GRAPH,
   SET_FARM_POSITIONS,
 } from './constants';
 
 import { toast } from "react-toastify";

 export function loading() {
   console.log("loading");
   return {
     type: LOADING,
   };
 }

 export function loaded() {
   return {
     type: LOADED,
   };
 }

 export function blockchainTransactionLoading() {
   console.log("blockchainTransactionLoading");
   // toast.error('blockchainTransactionLoading', {
   //   position: "bottom-right",
   //   autoClose: 5000,
   //   hideProgressBar: false,
   //   closeOnClick: true,
   //   pauseOnHover: true,
   //   draggable: true,
   // });
     
   return {
     type: BLOCKCHAIN_TRANSACTION_LOADING,
   };
 }

 export function blockchainTransactionLoaded() {
   console.log("blockchainTransactionLoaded");
   // toast.error('blockchainTransactionLoaded', {
   //   position: "bottom-right",
   //   autoClose: 5000,
   //   hideProgressBar: false,
   //   closeOnClick: true,
   //   pauseOnHover: true,
   //   draggable: true,
   // });
   return {
     type: BLOCKCHAIN_TRANSACTION_LOADED,
   };
 }
 
 export function selectPage(page) {
   console.log("SELECT_PAGE");
   console.log("selectPage", page);
   return {
     type: SELECT_PAGE,
     page
   };
 }

 export function connectMetamask() {
   console.log("connectMetamask");
   return {
     type: CONNECT_METAMASK,
   };
 }

 export function connectMetamaskSuccess(network, address, addressShorten) {
   console.log(network, address);
   
   return {
     type: CONNECT_METAMASK_SUCCESS,
     network,
     address,
     addressShorten
   };
 }

 export function connectMetamaskError() {
   toast.error('Could not detect your metamask account. Try logging in to Metamask first.', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: CONNECT_METAMASK_ERROR,
   };
 }


 export function changeDepositAmount(depositAmount) {
   console.log("changeDepositAmount", depositAmount);
   return {
     type: CHANGE_DEPOSIT_AMOUNT,
     depositAmount
   };
 }


 export function changeWithdrawAmount(withdrawAmount) {
   console.log("changeWithdrawAmount", withdrawAmount);
   return {
     type: CHANGE_WITHDRAW_AMOUNT,
     withdrawAmount
   };
 }

 export function changeAllowanceAmount(allowanceAmount) {
   console.log("changeAllowanceAmount", allowanceAmount);
   return {
     type: CHANGE_ALLOWANCE_AMOUNT,
     allowanceAmount
   };
 }



 export function deposit(response) {
   console.log("deposit");
   console.log("deposit", response);
   
   return {
     type: DEPOSIT,
     asset: response[0],
     assetNum: response[1],
   };
 }
 
 // export function depositSuccess(asset, amount, txHash) {
 export function depositSuccess(assetNum, amount, txHash, tranche) {
   console.log("depositSuccess");
   toast.success('Your funds have been deposited', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: DEPOSIT_SUCCESS,
     assetNum, 
     amount,
     tranche
   };
 }

 export function depositError() {
   toast.error('There is error when depositing your funds', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: DEPOSIT_ERROR,
   };
 }


 export function addAllowance(response) {
   console.log("addAllowance");
   console.log("addAllowance", response);
   
   return {
     type: ADD_ALLOWANCE,
     asset: response[0],
     assetNum: response[1],
   };
 }

 export function addAllowanceSuccess(assetNum, amount, txHash) {
   console.log("addAllowanceSuccess");
   console.log("addAllowanceSuccess");
   console.log("addAllowanceSuccess");
   console.log(assetNum, amount, txHash);
   toast.success('Your allowance has been topped up', {
     position: "top-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: ADD_ALLOWANCE_SUCCESS,
     assetNum, 
     amount,
     txHash
   };
 }

 export function addAllowanceError() {
   toast.error('There is error when depositing your funds', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: ADD_ALLOWANCE_ERROR,
   };
 }



 export function withdraw(response) {
   console.log("withdraw");
   return {
     type: WITHDRAW,
     asset: response[0],
     assetNum: response[1],
   };
 }
 
 export function withdrawSuccess(assetNum, amount, txHash, tranche) {
   console.log("withdrawSuccess");
   toast.success('You have successfully withdrawn', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: WITHDRAW_SUCCESS,
     assetNum, 
     amount,
     tranche
   };
 }

 export function withdrawError() {
   toast.error('There is error when withdrawing your funds', {
     position: "bottom-right",
     autoClose: 5000,
     hideProgressBar: false,
     closeOnClick: true,
     pauseOnHover: true,
     draggable: true,
   });
   
   return {
     type: WITHDRAW_ERROR,
   };
 }

 export function getBalance(address) {
   console.log("GET_BALANCE");
   return {
     type: GET_BALANCE,
     address
   };
 }

 export function getBalanceSuccess(userBalance, vaultBalance, vaultExchangeRate) {
   return {
     type: GET_BALANCE_SUCCESS,
     userBalance, 
     vaultBalance,
     vaultExchangeRate
   };
 }


 export function getVaultExchangeRateSuccess(vaultExchangeRate) {
   return {
     type: GET_VAULT_EXCHANGE_RATE_SUCCESS,
     vaultExchangeRate
   };
 }


 export function getVaultTVLSuccess(vaultTVL) {
   return {
     type: GET_VAULT_TVL_SUCCESS,
     vaultTVL
   };
 }

 export function getAssetPriceSuccess(asset) {
   return {
     type: GET_ASSET_PRICE_SUCCESS,
     asset
   };
 }


 export function getAllowanceSuccess(allowance) {
   return {
     type: GET_ALLOWANCE_SUCCESS,
     allowance
   };
 }

 export function setMaxAllowance(assetNum) {
   console.log("assetNum", assetNum);
   return {
     type: SET_MAX_ALLOWANCE,
     assetNum
   };
 }


 export function updateLoadingScreen(response) {
   console.log("response", response);
   return {
     type: UPDATE_LOADING_SCREEN,
     title: response[0],
     content: response[1],
   };
 }


 export function updateTVL() {
   console.log("updateTVL");
   return {
     type: UPDATE_TVL,
   };
 }

 export function toggleGas() {
   return {
     type: TOGGLE_GAS,
   };
 } 

 export function updateGas(mode, fee) {
   return {
     type: UPDATE_GAS,
     mode,
     fee
   };
 }

 export function toggleLayout(mode) {
   return {
     type: TOGGLE_LAYOUT,
     mode,
   };
 }





export function farm(response) {
  console.log("farm");
  console.log("farm", response);
  
  return {
    type: FARM,
    asset: response[0],
    assetNum: response[1],
  };
}

export function farmSuccess(asset, amount, txHash) {
  console.log("farmSuccess");
  toast.success('Your funds will start farming', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  return {
    type: FARM_SUCCESS,
    asset, 
    amount
  };
}

export function farmError() {
  // toast.error('There is error when depositing your funds', {
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });
  
  return {
    type: FARM_ERROR,
  };
}

export function redeem(response) {
  console.log("redeem");
  console.log("redeem", response);
  
  return {
    type: REDEEM,
    asset: response[0],
    assetNum: response[1],
  };
}

export function redeemSuccess(asset, amount, txHash) {
  console.log("redeemSuccess");
  toast.success('Your funds have been redeemed', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  return {
    type: REDEEM_SUCCESS,
    asset, 
    amount
  };
}

export function redeemError() {
  // toast.error('There is error when depositing your funds', {
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });
  
  return {
    type: REDEEM_ERROR,
  };
}

export function unstake(response) {
  console.log("unstake");
  console.log("unstake", response);
  
  return {
    type: UNSTAKE,
    asset: response[0],
    assetNum: response[1],
  };
}

export function unstakeSuccess(asset, amount, txHash) {
  console.log("unstakeSuccess");
  toast.success('Your funds have been unstaked', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  return {
    type: UNSTAKE_SUCCESS,
    asset, 
    amount
  };
}

export function unstakeError() {
  // toast.error('There is error when depositing your funds', {
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });
  
  return {
    type: UNSTAKE_ERROR,
  };
}


export function depositApprove(response) {
  console.log("depositApprove");
  console.log("depositApprove", response);
  
  return {
    type: DEPOSIT_APPROVE,
    asset: response[0],
    assetNum: response[1],
  };
}

export function depositApproveSuccess(asset, amount, txHash) {
  console.log("depositApproveSuccess");
  toast.success('Your allowance have been approved', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  return {
    type: DEPOSIT_APPROVE_SUCCESS,
    asset, 
    amount
  };
}

export function depositApproveError() {
  // toast.error('There is error when depositing your funds', {
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });
  
  return {
    type: DEPOSIT_APPROVE_ERROR,
  };
}




export function farmApprove(response) {
  console.log("farmApprove");
  console.log("farmApprove", response);
  
  return {
    type: FARM_APPROVE,
    asset: response[0],
    assetNum: response[1],
  };
}

export function farmApproveSuccess(asset, amount, txHash) {
  console.log("farmApproveSuccess");
  toast.success('Your allowance have been approved', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
  
  return {
    type: FARM_APPROVE_SUCCESS,
    asset, 
    amount
  };
}

export function farmApproveError() {
  // toast.error('There is error when depositing your funds', {
  //   position: "bottom-right",
  //   autoClose: 5000,
  //   hideProgressBar: false,
  //   closeOnClick: true,
  //   pauseOnHover: true,
  //   draggable: true,
  // });
  
  return {
    type: FARM_APPROVE_ERROR,
  };
}

export function selectTranche(tranche) {
  return {
    type: SELECT_TRANCHE,
    tranche
  };
}


export function changeAsset(assetNum) {
  console.log("changeAsset asset", assetNum);
  return {
    type: CHANGE_ASSET,
    assetNum
  };
}

export function changeAssetSuccess(asset, assetNum) {
  console.log("changeAsset asset", assetNum);
  return {
    type: CHANGE_ASSET_SUCCESS,
    assetNum,
    asset
  };
}


export function updateInputValue(response) {
  return {
    type: UPDATE_INPUT_VALUE,
    inputData: response[0],
    value: response[1],
  };
}

export function selectFarmPool(pool) {
  return {
    type: SELECT_FARM_POOL,
    pool
  };
}


export function getTokenDistributionInfoSuccess(response) {
  return {
    type: GET_TOKEN_DISTRIBUTION_INFO_SUCCESS,
    epoch: response[0], 
    amount: response[1], 
    blockheight: response[2]
  };
}

export function invalidNetwork() {
  return {
    type: INVALID_NETWORK,
  };
} 

export function getTrancheBalanceSuccess(response) {
  return {
    type: GET_TRANCHE_BALANCE_SUCCESS,
    trancheBalanceArray: response[0],
    poolTrancheDepositArray: response[1],
    poolTrancheLoanArray: response[2],
  };
} 

export function initialLoaded() {
  return {
    type: INITIAL_LOADED,
    
  };
} 

export function getPoolsData(response) {
  return {
    type: GET_POOLS_DATA,
    poolData: response[0],
    totalTVL: response[1],
    poolInterestRate: response[2],
    poolInterest: response[3],
    poolLoan: response[4],
  };
} 


export function getPoolAddress(poolsArray, poolTokenAddress) {
  return {
    type: GET_POOL_ADDRESS,
    poolsArray,
    poolTokenAddress
  };
} 

export function getTotalTVL(totalTVL) {
  return {
    type: GET_TOTAL_TVL,
    totalTVL
  };
} 

export function getTreasuryBalance(treasuryBalance) {
  return {
    type: GET_TREASURY_BALANCE,
    treasuryBalance
  };
} 

export function getPoolName(name) {
  return {
    type: GET_POOL_NAME,
    name
  };
}

export function getPoolSymbol(symbol) {
  return {
    type: GET_POOL_SYMBOL,
    symbol
  };
}

export function getPoolPrincipal(principal) {
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("getPoolPrincipal");
  console.log("principal", principal);
  return {
    type: GET_POOL_PRINCIPAL,
    principal
  };
} 

export function getPoolInterestRate(interestRate) {
  return {
    type: GET_POOL_INTEREST_RATE,
    interestRate
  };
} 

export function getBalanceNut(amount) {
  return {
    type: GET_BALANCE_NUT,
    amount
  };
} 

export function getAdapters(adapters, baseTokens, baseTokensSelect, adapterBaseTokensPairSuite) {
  return {
    type: GET_ADAPTERS,
    adapters,
    baseTokens,
    baseTokensSelect,
    adapterBaseTokensPairSuite,
  };
} 

export function getDashboardInfo(highestEarn) {
  return {
    type: GET_DASHBOARD_INFO,
    highestEarn
  };
} 

export function getTreasuryGraph(graph) {
  return {
    type: GET_TREASURY_GRAPH,
    graph
  };
} 

export function getTvlGraph(graph) {
  return {
    type: GET_TVL_GRAPH,
    graph
  };
} 

export function setFarmPositions(positionOpen) {
  return {
    type: SET_FARM_POSITIONS,
    positionOpen
  };
} 

