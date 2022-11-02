/*
 *
 * EarnPage reducer
 *
 */
import produce from 'immer';

import { 
  LOADING,
  LOADED,
  BLOCKCHAIN_TRANSACTION_LOADING,
  BLOCKCHAIN_TRANSACTION_LOADED,
  SELECT_PAGE,
  CONNECT_METAMASK_SUCCESS,
  CHANGE_DEPOSIT_AMOUNT,
  CHANGE_WITHDRAW_AMOUNT,
  CHANGE_ALLOWANCE_AMOUNT, 
  DEPOSIT_SUCCESS,
  WITHDRAW_SUCCESS,
  ADD_ALLOWANCE_SUCCESS,
  GET_BALANCE_SUCCESS,
  GET_VAULT_EXCHANGE_RATE_SUCCESS,
  GET_VAULT_TVL_SUCCESS,
  GET_ALLOWANCE_SUCCESS,
  SET_MAX_ALLOWANCE,
  UPDATE_LOADING_SCREEN,
  UPDATE_GAS,
  GET_ASSET_PRICE_SUCCESS,
  TOGGLE_LAYOUT,
  SELECT_TRANCHE,
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


export const initialState = {
  initialLoaded: false,
  loading: false,
  loadingTitle: "",
  loadingContent: "",
  networkValid: true,
  blockchainTransactionLoading: false,
  blockchainTransactionHash: "",
  blockchainTransactionAction: "",
  currentPage: "dashboard",
  gasMode: "fast",
  gasFee: 0,
  selectedAddress: "",
  selectedAddressShorten: "",
  network: "",
  depositAmount: 0,
  withdrawAmount: 0,
  allowanceAmount: 0,
  collateralAmount: 0,
  layout: "linear",
  selectedTranche: "AAA",
  assetSelected: "",
  assetNumSelected: 0,
  selectedPool: "",
  tvlGraphData: [
    {
      id: 'Compound',
      data: [
        {
          x: 'USDT',
          y: 203,
        },
        {
          x: 'USDC',
          y: 253,
        },
        {
          x: 'WETH',
          y: 63,
        },
      ],
    },
    {
      id: 'Aave',
      data: [
        {
          x: 'USDT',
          y: 42,
        },
        {
          x: 'USDC',
          y: 210,
        },
        {
          x: 'WETH',
          y: 159,
        },
      ],
    },
  ],
  treasuryGraphKey: [],
  treasuryGraphData: [],
  adapters:[],
  adapterBaseTokens: [],
  adapterBaseTokensSelect: [],
  adapterBaseTokensPairSuite: [],
  adapterSelected: 0,
  adapterAddressSelected: "",
  poolsArray: [],
  poolTokenAddress: [],
  poolName: [],
  poolSymbol: [],
  poolPrincipal: [],
  poolInterestRate: [],
  positionOpen: [],
  totalUserEarn: 0,
  totalUserFarm: 0,
  totalTVL: 0,
  treasuryBalance: 0,
  currentEarn: 30,
  maxLeverage: 100,
  highestFarmingYield: 80,
  distributionToken: 0,
  distributionEpoch: 0,
  blockHeight: 0,
  trancheInfo: {
    // asset, tranche, apy, deposit
    "usdt":{
      "AAA":{
        "apy": "3",
        "deposit": "10001"
      },
      "AA":{
        "apy": "5",
        "deposit": "20001"
      },
      "B":{
        "apy": "15",
        "deposit": "50001"
      }
    },
    "usdc":{
      "AAA":{
        "apy": "2",
        "deposit": "10002"
      },
      "AA":{
        "apy": "4",
        "deposit": "20002"
      },
      "B":{
        "apy": "11",
        "deposit": "50002"
      }
    },
    "dai":{
      "AAA":{
        "apy": "3.5",
        "deposit": "10003"
      },
      "AA":{
        "apy": "5.5",
        "deposit": "20003"
      },
      "B":{
        "apy": "12",
        "deposit": "50003"
      }
    },
    "mockERC":{
      "AAA":{
        "apy": "3.5",
        "deposit": "10003"
      },
      "AA":{
        "apy": "5.5",
        "deposit": "20003"
      },
      "B":{
        "apy": "12",
        "deposit": "50003"
      }
    },
    "mockERC-2":{
      "AAA":{
        "apy": "3.5",
        "deposit": "10003"
      },
      "AA":{
        "apy": "5.5",
        "deposit": "20003"
      },
      "B":{
        "apy": "12",
        "deposit": "50003"
      }
    },
    "mockERC-3":{
      "AAA":{
        "apy": "3.5",
        "deposit": "10003"
      },
      "AA":{
        "apy": "5.5",
        "deposit": "20003"
      },
      "B":{
        "apy": "12",
        "deposit": "50003"
      }
    }
  },
  // assetArray: ["mockERC"],
  assetArray: [
    "usdt", 
    "usdc", 
    "mockERC",
    "mockERC-2",
    "mockERC-3",
  ],
  // ganache
  // addressTokenNUT: "0x4c7CA2b35210e1d3886BF7A5EE6ca77Af76F60ec",
  // addressNutmeg: "0xeFF7eb03743e1E705A14bdca52D4f238E29752EC",
  // addressTestNutmeg: "0x0fd7393B181e2750310ed7b77de4Fc3C61262A97",
  
  // ropsten
  // addressTokenNUT: "0x8aDF6C2caC0DdE1374D19F3c43642D384cf126Af", //"0x7623024158195f25D7a1258f8682774a3AfAC795",
  // addressDistributorNUT: "0x875985ab43E9dF4e1928c8CDfcbEb07e2e6156b9", //"0xFCD82eeF0B351D4FCCA6208B6B1cB638B1B872d3",
  // addressNutmeg: "0x43b1551bfe0037C29738F5cBA9Ce81953C9537F5", //"0x382334De6632cA7dBd8d16820ddae9A0AD6DdaCE",
  // addressTestNutmeg: "0xD15e27058DE9dbC777A30AAf9572261799638a03",
  
  // rinkeby
  addressTokenNUT: "0x3a107af0231e53c0A0a53D788EE9D92A368e7adb", 
  addressDistributorNUT: "0x59Bd4D6901c977b2555610A3090D46c6F075d6BB", 
  addressNutmeg: "0xE72a94A569cE4748192b0ec2bDc5495779B42944", 
  addressTestNutmeg: "0xE72a94A569cE4748192b0ec2bDc5495779B42944",
  
  balanceNUT: 0,
  priceNUT: 0.1,
  poolInfo: [
    // asset, pool type, source, pair, apy, leverage
    ["usdt", "yield farming", "sushi", "USDT/SUSHI", 74.28, 2],
    ["usdt", "yield farming", "sushi", "USDT/SUSHI", 30, 3],
    ["usdc", "yield farming", "sushi", "USDC/SUSHI", 22.2, 2],
    ["usdc", "yield farming", "sushi", "USDC/SUSHI", 3.66, 3],
    ["dai", "yield farming", "sushi", "DAI/SUSHI", 19, 2],
    ["dai", "yield farming", "sushi", "DAI/SUSHI", 11.5, 3],
  ],
  selectedPool: -1,
  portfolioEarnInfo: [
    // asset, balance
    ["eth", 51.431],
    ["wbtc", 3.835],
    ["usdt", 1481.03],
    ["usdc", 2294.21],
    ["dai", 3119.345],
  ],
  portfolioFarmInfo: [
    // asset, balance
    ["eth", 20],
    ["wbtc", 1],
    ["usdt", 1050],
    ["usdc", 2050],
    ["dai", 3050],
  ],
  // ropsten
  // asset: [
  //   // coin, asset address, decimal, user balance
  //   ["usdt", "", 6, 0],
  //   ["usdc", "", 6, 0],
  //   // ["mockERC", "0x136e0385b4F1C15272cF407A7c0980e8842f3D57", 18, 0],
  //   ["mockERC", "0x74A648D5fb22df35a8bfc500940399d80df468e0", 18, 0],
  //   ["mockERC-2", "0x6B1731dEeA9d257e12b99458901E227a7c80bB91", 18, 0],
  //   ["mockERC-3", "0x2db532aca2191fd4e214fc7d0eb9123e0dec8c42", 18, 0],
  // ],
  //rinkeby
  asset: [
    // coin, asset address, decimal, user balance
    // ["usdt", "", 6, 0],
    // ["usdc", "", 6, 0],
    // ["mockERC", "0x136e0385b4F1C15272cF407A7c0980e8842f3D57", 18, 0],
    ["METH", "0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49", 18, 0],
    ["MOCKERC20ALTA", "0xEe8502c48dB57115221bA5EdAe181C0425cf8043", 18, 0],
    ["DAI", "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa", 18, 0],
  ],
  assetTestnet: [
    // coin, asset address, decimal, user balance
    // ["usdt", "0xdac17f958d2ee523a2206206994597c13d831ec7", 6, 0],
    // ["usdc", "0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48", 6, 0],
    ["mockERC", "0x76B741390dFcCB59480F95b3297cAb2860F87A50", 18, 0],
    // ["mockERC-2", "0x6B1731dEeA9d257e12b99458901E227a7c80bB91", 18, 0],
    // ["mockERC-3", "0x2db532aca2191fd4e214fc7d0eb9123e0dec8c42", 18, 0],
    
  ],
  assetGanache: [
    // coin, asset address, decimal, user balance
    // ["usdt", "", 6, 0],
    // ["usdc", "", 6, 0],
    ["mockERC", "0x76B741390dFcCB59480F95b3297cAb2860F87A50", 18, 0],
    // ["mockERC-2", "0x6B1731dEeA9d257e12b99458901E227a7c80bB91", 18, 0],
    // ["mockERC-3", "0x2db532aca2191fd4e214fc7d0eb9123e0dec8c42", 18, 0],
  ],
  vaultBalance: [
    // coin, vault address, decimal, user balance, tvl, exchangeRate
    // ["usdt", "", 6, 0, 0, 1],
    // ["usdc", "", 6, 0, 0, 1],
    // ["mockERC", "0xEc81C22f80C03b4560985ecd617FC473A58073a1", 6, 0, 0, 1],
    // ["mockERC-2", "0xEc81C22f80C03b4560985ecd617FC473A58073a1", 6, 0, 0, 1],
    // ["mockERC-3", "0xEc81C22f80C03b4560985ecd617FC473A58073a1", 6, 0, 0, 1],
    ["METH", "0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49", 18, 0, 0, 1],
    ["MOCKERC20ALTA", "0xEe8502c48dB57115221bA5EdAe181C0425cf8043", 18, 0, 0, 1],
    ["DAI", "0x5592EC0cfb4dbc12D3aB100b257153436a1f0FEa", 18, 0, 0, 1],
  ],
  vaultBalanceTestnet: [
    // coin, vault address, decimal, user balance, tvl
    // ["usdt", "", 6, 0, 0, 0],
    // ["usdc", "", 6, 0, 0, 0],
    ["METH", "", 6, 0, 0, 0],
    ["MOCKERC20ALTA", "", 6, 0, 0, 0],
    ["DAI", "", 6, 0, 0, 0],
  ],
  trancheWithdrawalBalance: [
    // coin, withdrawal per tranche [0,1,2]
    // ["usdt", [0,0,0]],
    // ["usdc", [0,0,0]],
    ["METH", [0,0,0]],
    ["MOCKERC20ALTA", [0,0,0]],
    ["DAI", [0,0,0]],
    // ["mockERC-2", [0,0,0]],
    // ["mockERC-3", [0,0,0]],
  ],
  // total users pool deposit
  trancheTotalBalance: [
    // coin, withdrawal per tranche [0,1,2]
    // ["usdt", [0,0,0], 0],
    // ["usdc", [0,0,0], 0],
    ["METH", [0,0,0], 0],
    ["MOCKERC20ALTA", [0,0,0], 0],
    ["DAI", [0,0,0], 0],
    // ["mockERC-2", [0,0,0], 0],
    // ["mockERC-3", [0,0,0], 0],
  ],
  // current users pool deposit
  trancheUserBalance: [
    // coin, withdrawal per tranche [0,1,2]
    // ["usdt", [0,1,2], 1],
    // ["usdc", [3,4,5], 2],
    ["METH", [6,7,8], 3],
    ["MOCKERC20ALTA", [6,7,8], 3],
    ["DAI", [6,7,8], 3],
    // ["mockERC-2", [9,10,11], 4],
    // ["mockERC-3", [12,13,14], 5],
  ],
  trancheUserLoan: [
    // coin, withdrawal per tranche [0,1,2]
    // ["usdt", [0,1,2], 1],
    // ["usdc", [3,4,5], 2],
    ["METH", [6,7,8], 3],
    ["MOCKERC20ALTA", [6,7,8], 3],
    ["DAI", [6,7,8], 3],
    // ["mockERC-2", [9,10,11], 4],
    // ["mockERC-3", [12,13,14], 5],
  ],
  maxDeposit: [
    // ["usdt", 5000000],
    // ["usdc", 5000000],
    ["METH", 5000000],
    ["MOCKERC20ALTA", 5000000],
    ["DAI", 5000000],
    // ["mockERC-2", 5000000],
    // ["mockERC-3", 5000000],
  ],
  exchangeRate: [
    // ["usdt", 0],
    // ["usdc", 0],
    ["METH", 0],
    ["MOCKERC20ALTA", 0],
    ["DAI", 0],
    // ["mockERC-2", 0],
    // ["mockERC-3", 0],
  ],
  assetPrice: [
    // ["usdt", 1],
    // ["usdc", 1],
    ["METH", 1],
    ["MOCKERC20ALTA", 1],
    ["DAI", 1],
    // ["mockERC-2", 1],
    // ["mockERC-3", 1],
  ],
  vaultTVL: [
    // ["usdt", 0],
    // ["usdc", 0],
    ["METH", 0],
    ["MOCKERC20ALTA", 0],
    ["DAI", 0],
    // ["mockERC-2", 0],
    // ["mockERC-3", 0],
  ],
  allowance: [
    // ["usdt", 0],
    // ["usdc", 0],
    ["METH", 0],
    ["MOCKERC20ALTA", 0],
    ["DAI", 0],
    // ["mockERC-2", 0],
    // ["mockERC-3", 0],
  ],
  apy: {
    // "usdt": "4",
    // "usdc": "4",
    "METH": "4",
    "MOCKERC20ALTA": "4",
    "DAI": "4",
    // "mockERC-2": "4",
    // "mockERC-3": "4",
  },
};

/* eslint-disable default-case, no-param-reassign */
const earnPageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOADING:
        draft.loading = true;

        break;
        
      case LOADED:
        draft.loading = false;

        break;
        
      case BLOCKCHAIN_TRANSACTION_LOADING:
        draft.blockchainTransactionLoading = true;

        break;
        
      case BLOCKCHAIN_TRANSACTION_LOADED:
        draft.blockchainTransactionLoading = false;

        break;
        
      case SELECT_PAGE:
        console.log("SELECT_PAGE");
        console.log("action.page", action.page);
        draft.currentPage = action.page;

        break;
        
      case CONNECT_METAMASK_SUCCESS:
        draft.network = action.network;
        draft.selectedAddress = action.address;
        draft.selectedAddressShorten = action.addressShorten;
        console.log("action.network", action.network);

        break;
        
      case CHANGE_DEPOSIT_AMOUNT:
        console.log("action.depositAmount", action.depositAmount)
        draft.depositAmount = action.depositAmount;

        break;
        
      case CHANGE_WITHDRAW_AMOUNT:
        console.log("action.withdrawAmount", action.withdrawAmount)
        draft.withdrawAmount = action.withdrawAmount;

        break;
        
      case CHANGE_ALLOWANCE_AMOUNT:
        console.log("action.allowanceAmount", action.allowanceAmount)
        draft.allowanceAmount = action.allowanceAmount;

        break;
        
      case GET_BALANCE_SUCCESS:
        console.log("draft.asset", draft.asset[0])
        console.log("draft.asset", draft.asset[0][0])
        console.log("action.userBalance", action.userBalance)
        for( var i=0; i<action.userBalance.length; i++){
          console.log("action.userBalance", action.userBalance[i])
          draft.asset[i][3] = action.userBalance[i];
          draft.vaultBalance[i][3] = action.vaultBalance[i];
        }
        
        console.log("draft.asset", draft.asset)

        break;
        
      case GET_VAULT_EXCHANGE_RATE_SUCCESS:
        for( var i=0; i<action.vaultExchangeRate.length; i++){
          draft.exchangeRate[i][1] = action.vaultExchangeRate[i];
        }
        console.log("action.vaultExchangeRate", action.vaultExchangeRate)
        console.log("draft.exchangeRate", draft.exchangeRate)

        break;
        
      case GET_VAULT_TVL_SUCCESS:
        for( var i=0; i<action.vaultTVL.length; i++){
          draft.vaultTVL[i][1] = action.vaultTVL[i];
        }

        break;
        
      case GET_ALLOWANCE_SUCCESS:
        for( var i=0; i<action.allowance.length; i++){
          draft.allowance[i][1] = action.allowance[i];
        }

        break;
        
      case DEPOSIT_SUCCESS:
        console.log("action.assetNum", action.assetNum);
        console.log("action.amount", action.amount);
        console.log("action.tranche", action.tranche);
        
        draft.totalTVL += parseFloat(action.amount);
        draft.treasuryBalance += parseFloat(action.amount);
        draft.asset[action.assetNum][3] -= parseFloat(action.amount);
        draft.trancheWithdrawalBalance[action.assetNum][1][action.tranche] += parseFloat(action.amount);
        draft.trancheTotalBalance[action.assetNum][1][action.tranche] += parseFloat(action.amount);
        draft.trancheUserBalance[action.assetNum][1][action.tranche] += parseFloat(action.amount);
        
        draft.trancheUserBalance[action.assetNum][2] += parseFloat(action.amount);
        
        // action.tranche fails here since poolPrincipal has length 2
        // while hardcoded array has 5
        // should succeed when modular
        draft.poolPrincipal[action.assetNum][action.tranche] += parseFloat(action.amount);

        break;
        
      case WITHDRAW_SUCCESS:
        console.log("action.assetNum", action.assetNum);
        console.log("action.amount", action.amount);
        console.log("action.tranche", action.tranche);
        
        draft.totalTVL -= parseFloat(action.amount);
        draft.treasuryBalance -= parseFloat(action.amount);
        draft.asset[action.assetNum][3] += parseFloat(action.amount);
        draft.trancheWithdrawalBalance[action.assetNum][1][action.tranche] -= parseFloat(action.amount);
        draft.trancheTotalBalance[action.assetNum][1][action.tranche] -= parseFloat(action.amount);
        draft.trancheUserBalance[action.assetNum][1][action.tranche] -= parseFloat(action.amount);
        
        draft.trancheUserBalance[action.assetNum][2] -= parseFloat(action.amount);
        
        // action.tranche fails here since poolPrincipal has length 2
        // while hardcoded array has 5
        // should succeed when modular
        draft.poolPrincipal[action.assetNum][action.tranche] -= parseFloat(action.amount);

        break;
        
      case ADD_ALLOWANCE_SUCCESS:
        draft.allowance[action.assetNum][1] = parseInt(action.amount);

        break;
        
      case SET_MAX_ALLOWANCE:
        draft.allowanceAmount = draft.maxDeposit[action.assetNum][1] - draft.allowance[action.assetNum][1];

        break;
        
      case UPDATE_LOADING_SCREEN:
        draft.blockchainTransactionAction = action.title;
        draft.blockchainTransactionHash = action.content;

        break;
        
      case UPDATE_GAS:
        draft.gasMode = action.mode;
        draft.gasFee = action.fee;

        break;
        
      case GET_ASSET_PRICE_SUCCESS:
        for( var i=0; i<action.asset.length; i++){
          draft.assetPrice[i][1] = action.asset[i];
        }
        console.log("draft.assetPrice", draft.assetPrice[0])

        break;
        
      case TOGGLE_LAYOUT:
        draft.layout = action.mode;

        break;
        
      case SELECT_TRANCHE:
        draft.selectedTranche = action.tranche;

        break;
        
      case CHANGE_ASSET_SUCCESS:
        console.log("action.asset", action.asset);
        console.log("action.assetNum", action.assetNum);
        draft.assetNumSelected = action.assetNum;
        draft.assetSelected = action.asset;
        
        break;
        
      case UPDATE_INPUT_VALUE:
        console.log("UPDATE_INPUT_VALUE");
        
        if(action.inputData == "depositAmount"){
          draft.depositAmount = action.value;
        }else if(action.inputData == "withdrawAmount"){
          draft.withdrawAmount = action.value;
        }
        
        break;
        
      case SELECT_FARM_POOL:
        if(draft.selectedPool !== action.pool){
          draft.selectedPool = action.pool;
          draft.adapterAddressSelected = draft.adapters[action.pool];
        }else{
          draft.selectedPool = -1;
        }
        
        console.log("draft.selectedPool", draft.selectedPool);
        console.log("draft.adapterAddressSelected", draft.adapterAddressSelected);
        console.log("action.pool", action.pool);
        
        break;
        
      case GET_TOKEN_DISTRIBUTION_INFO_SUCCESS:
        draft.distributionEpoch = action.epoch;
        draft.distributionToken = action.amount;
        draft.blockHeight = action.blockheight;
        
        break;
        
      case INVALID_NETWORK:
        draft.networkValid = false;
        
        break;
        
      case GET_TRANCHE_BALANCE_SUCCESS:
        console.log("action.trancheBalanceArray", action.trancheBalanceArray);
        console.log("action.trancheBalanceArray", action.trancheBalanceArray);
        draft.trancheWithdrawalBalance = action.trancheBalanceArray;
        draft.trancheUserBalance = action.poolTrancheDepositArray;
        draft.trancheUserLoan = action.poolTrancheLoanArray;
        
        
        break;
        
      case INITIAL_LOADED:
        draft.initialLoaded = true;
        
        break;
        
      case GET_POOLS_DATA:
        console.log("action.poolData", action.poolData);
        // draft.poolsArray = action.poolData;
        draft.totalTVL = action.totalTVL;
          // type: GET_POOLS_DATA,
          // poolData: response[0],
          // totalTVL: response[1],
          // poolInterestRate: response[2],
          // poolInterest: response[3],
          // poolLoan: response[4],
        
        break;
        
      case GET_POOL_ADDRESS:
        draft.poolsArray = action.poolsArray;
        draft.poolTokenAddress = action.poolTokenAddress;
        console.log("action.poolsArray", action.poolsArray);
        console.log("action.poolTokenAddress", action.poolTokenAddress);
        
        break;
        
      case GET_TOTAL_TVL:
        draft.totalTVL = action.totalTVL;
        
        break;
        
      case GET_TREASURY_BALANCE:
        draft.treasuryBalance = action.treasuryBalance;
        
        break;
        
      case GET_POOL_PRINCIPAL:
        console.log("action.principal", action.principal);
        draft.poolPrincipal = action.principal;
        
        break;
        
      case GET_POOL_INTEREST_RATE:
        draft.poolInterestRate = action.interestRate;
        
        break;
        
      case GET_POOL_SYMBOL:
        draft.poolSymbol = action.symbol;
        
        draft.assetNumSelected = 0;
        draft.assetSelected = action.symbol[0];
        
        break;
        
      case GET_POOL_NAME:
        draft.poolName = action.name;
        
        break;
        
      case GET_BALANCE_NUT:
        draft.balanceNut = action.amount;
        
        break;
        
      case GET_ADAPTERS:
        draft.adapters = action.adapters;
        draft.adapterBaseTokens = action.baseTokens;
        draft.adapterBaseTokensSelect = action.baseTokensSelect;
        draft.adapterBaseTokensPairSuite = action.adapterBaseTokensPairSuite;
        
        break;
        
      case GET_DASHBOARD_INFO:
        draft.currentEarn = action.highestEarn;
        
        break;
        
      case GET_TVL_GRAPH:
        // draft.tvlGraphData = action.graph;
        
        break;
        
      case GET_TREASURY_GRAPH:
        draft.treasuryGraphData = action.graph;
        
        break;
        
      case SET_FARM_POSITIONS:
        draft.positionOpen = action.positionOpen;
        
        break;
        
    }
  });

export default earnPageReducer;
