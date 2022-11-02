

import { take, delay, call, put, select, takeLatest, takeEvery } from 'redux-saga/effects';

import {
  CONNECT_METAMASK,
  DEPOSIT,
  WITHDRAW,
  GET_BALANCE,
  ADD_ALLOWANCE,
  UPDATE_TVL,
  TOGGLE_GAS,
  FARM,
  REDEEM,
  UNSTAKE,
  GET_COIN_PRICE,
  CHANGE_ASSET,
} from 'containers/EarnPage/constants';

import {
  loading,
  loaded,
  blockchainTransactionLoading,
  blockchainTransactionLoaded,
  connectMetamaskSuccess,
  connectMetamaskError,
  depositSuccess,
  depositError,
  withdrawSuccess,
  withdrawError,
  getBalance,
  getBalanceSuccess,
  getBalanceError,
  getVaultExchangeRateSuccess,
  getVaultTVLSuccess,
  getAllowanceSuccess,
  addAllowanceSuccess,
  updateLoadingScreen,
  updateGas,
  getAssetPriceSuccess,
  farmSuccess,
  farmError,
  redeemSuccess,
  redeemError,
  unstakeSuccess,
  unstakeError,
  getCoinPriceSuccess,
  getCoinPriceError,
  getTokenDistributionInfoSuccess,
  invalidNetwork,
  getTrancheBalanceSuccess,
  initialLoaded,
  getPoolsData,
  getPoolAddress,
  getTotalTVL,
  getTreasuryBalance,
  getPoolPrincipal,
  getPoolInterestRate,
  getPoolName,
  getPoolSymbol,
  getBalanceNut,
  getAdapters,
  getDashboardInfo,
  getTreasuryGraph,
  getTvlGraph,
  changeAssetSuccess,
  setFarmPositions,
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


// 
// const Web3 = require('web3');
// // const provider = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
// const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
// 
// const web3utils = new Web3(provider);
// // web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
// let ethereum = window.ethereum;
// 
// web3 = new Web3(ethereum);

const axios = require('axios');

const Web3 = require("web3");

const BigNumber = require('bignumber.js');
const JSBI = require('jsbi');
const BNlib = require('bn.js');
// import JSBI from './jsbi.mjs';

import { ethers } from "ethers";

var ccxt = require ('ccxt');
let binance = new ccxt.binance()
// const provider = new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
// 
// const web3utils = new Web3(provider);
// // web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
// let ethereum = window.ethereum;
// 
// web3 = new Web3(ethereum);

// const MOCK_USDC_ADDRESS = '0xb7a4F3E9097C08dA09517b5aB877F7a917224ede' //kovan
// const YVAULT_ADDRESS = '0xE13e4e7846b407f6bfF601e23a75ceEF5798348a'
// const YVAULT_ADDRESS = '0xbD40Ec2839FD401b87320E0324Ff419BfcC56308' //kovan

// Individual exports for testing
export default function* earnPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(CONNECT_METAMASK, _connectMetamask);
  yield takeLatest(DEPOSIT, _deposit);
  yield takeLatest(WITHDRAW, _withdraw);
  yield takeLatest(GET_BALANCE, _getBalance);
  yield takeLatest(ADD_ALLOWANCE, _addAllowance);
  yield takeLatest(UPDATE_TVL, _updateTVL);
  yield takeLatest(CHANGE_ASSET, _changeAsset);
  
  // yield takeLatest(TOGGLE_GAS, _toggleGas);
  yield takeLatest(FARM, _farm);
  yield takeLatest(REDEEM, _redeem);
  yield takeLatest(UNSTAKE, _unstake);
}

// let stakeMap = yield call(contract.methods.stakeMap(nutmegErc20Address, addressUser, 0).call);
// console.log("stakeMap", stakeMap)

export function* _connectMetamask() {
  yield put(loading());
  
  console.log("connectMetamask1");
  const { web3 } = window;
  // const ethAccounts = getAccounts();
  window.web3 = new Web3(window.ethereum);
  window.ethereum.enable();
  
  // // A Web3Provider wraps a standard Web3 provider, which is
  // // what Metamask injects as window.ethereum into each page
  // const provider = new ethers.providers.Web3Provider(window.ethereum)
  // 
  // // If you don't specify a //url//, Ethers connects to the default 
  // // (i.e. ``http:/\/localhost:8545``)
  // const provider = new ethers.providers.JsonRpcProvider();
  // 
  // // The Metamask plugin also allows signing transactions to
  // // send ether and pay to change state within the blockchain.
  // // For this, you need the account signer...
  // const signer = provider.getSigner()
  // Look up the current block number
  
  // provider.getBlockNumber()
  // // { Promise: 11817915 }
  // 
  // // Get the balance of an account (by address or ENS name, if supported by network)
  // balance = await provider.getBalance("ethers.eth")
  // // { BigNumber: "2337132817842795605" }
  // 
  // // Often you need to format the output to something more user-friendly,
  // // such as in ether (instead of wei)
  // ethers.utils.formatEther(balance)
  // // '2.337132817842795605'
  // 
  // // If a user enters a string in an input field, you may need
  // // to convert it from ether (as a string) to wei (as a BigNumber)
  // ethers.utils.parseEther("1.0")
  // // { BigNumber: "1000000000000000000" }
  
  // const tx = signer.sendTransaction({
  //   to: "ricmoo.firefly.eth",
  //   value: ethers.utils.parseEther("1.0")
  // });
  
  if (window.ethereum) {
    console.log("connectMetamask2");
    window.web3 = new Web3(ethereum);
    console.log("connectMetamask3");
    try {
        // Request account access if needed
        console.log("connectMetamask4");
        yield call(ethereum.enable());
        yield call(ethereum.send('eth_requestAccounts'));
        console.log("connectMetamask5");
    } catch (error) {
        // User denied account access...
    }
  }
  const ethAccounts = yield call(getAccounts);
  const network = yield call(getNetwork);
  
  // const Web3 = require("web3");
  // const ethEnabled = () => {
  //   if (window.web3) {
  //     window.web3 = new Web3(window.web3.currentProvider);
  //     window.ethereum.enable();
  //     return true;
  //   }
  //   return false;
  // }
  // 
  // const Web3 = require("web3");
  // const ethEnabled = () => {
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     window.ethereum.enable();
  //     return true;
  //   }
  //   return false;
  // }
  // if(isEmpty(ethAccounts)) {
  //   web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
  //     if (err) {
  //       reject(err);
  //     } else {
  //       resolve(accounts);
  //     }
  //   });
  // } else {
  //   resolve(ethAccounts);
  // }
  console.log("network", network);
  console.log("ethAccounts", ethAccounts);
  
  // let web3 = window.web3;
  // console.log(web3);
  // if (typeof ethereum !== 'undefined') {
  //  accounts = await ethereum.enable();
  //  console.log("accounts", accounts);
  // 
  //  web3 = new Web3(ethereum);
  //  console.log("11111");
  // } else if (typeof web3 !== 'undefined') {
  //  web3 = new Web3(web3.currentProvider);
  //  console.log("2222");
  // } else {
  //  web3 = new Web3(new Web3.providers.HttpProvider(process.env.WEB3_PROVIDER));
  //  console.log("33333");
  // }
  
  if(ethAccounts.length > 0){
    yield put(connectMetamaskSuccess(network, ethAccounts[0], shortenAddress(ethAccounts[0])));
    yield put(getBalance(ethAccounts[0]));
    
    let farmInfo = yield select(makeSelectEarnPage());
    
    let gasMode = farmInfo["gasMode"];
    
    let gasFee = yield call(getGasPrice, gasMode);
    
    yield put(updateGas(gasMode, gasFee));
    
  }else{
    yield put(connectMetamaskError());
  }
  yield put(loaded());
}

function getAccounts() {
  return new Promise((resolve, reject) => {
    const { web3 } = window;
    
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }

    web3 && web3.version && web3.eth.getAccounts((err, accounts) => {
      if (err) {
        // reject(err);
        resolve([]);
      } else {
        resolve(accounts);
      }
    });
  });
  // try {
  //   // const { web3 } = window;
  //   // // throws if no account selected
  //   // return web3.eth.accounts;
  // 
  //   if (window.ethereum) {
  //     window.web3 = new Web3(window.ethereum);
  //     window.ethereum.enable();
  //     return true;
  //   }
  //   //   web3 && web3.eth && web3.eth.getAccounts((err, accounts) => {
  //   //   return false;
  // } catch (e) {
  //   return [];
  // }
}

async function getGasPrice(gasMode) {
  console.log("------getGasPrice------")
  
  try{
    //https://api.etherscan.io/api?module=gastracker&action=gasoracle
    let gasPriceData = await axios.get("https://ethgasstation.info/api/ethgasAPI.json")
    // let gasPriceBackupData = await axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=PW9BUN7EZ173SGXS2W4IVW1V7DHAF36INH")
    
    console.log("gasPriceData", gasPriceData)
    // console.log("gasPriceBackupData", gasPriceBackupData)
    
    // let gasPrice = gasPriceData["data"]["average"];
    let gasPrice = gasPriceData["data"][gasMode];
    // let gasPriceBackup = gasPriceBackupData["data"][result]["ProposeGasPrice"];
    
    console.log("gasPrice", gasPrice)
    // console.log("gasPriceBackup", gasPriceBackup)
    
    if(Number.isInteger(gasPrice)){
      gasPrice = gasPrice/10;
    }else{
      gasPrice = 30;
    }
    
    if(gasPrice > 150){
      gasPrice = 150;
    }

    return(gasPrice.toString());
    // return("30");
  }catch{
    return("150");
  }
}

async function getNetwork() {
  return new Promise((resolve, reject) => {
    const { web3 } = window;
    
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      window.ethereum.enable();
    }
    
    web3 && web3.version && web3.eth.net.getNetworkType((err, netId) => {
      if (err) {
        reject(err);
      } else {
        let network = 0;
        if(netId == "main"){
          network = 1;
        }else if(netId == "ropsten"){
          network = 3;
        }else if(netId == "rinkeby"){
          network = 4;
        }
        resolve(network);
      }
    });
  });
}

async function getBlockHeight(network) {
  console.log("------getGasPrice------")
  
  let apiSource
  let mainnetBlockSource = "https://api.blockcypher.com/v1/eth/main";
  let ropstenBlockSource = "https://api.blockcypher.com/v1/eth/main";
  let rinkebyBlockSource = "https://api.blockcypher.com/v1/eth/main";
  
  if(network == "ropsten"){
    apiSource = ropstenBlockSource;
  }else if(network == "rinkeby"){
    apiSource = ropstenBlockSource;
  }else{
    apiSource = mainnetBlockSource;
  }
  
  try{
    //https://api.etherscan.io/api?module=gastracker&action=gasoracle
    let blockHeightData = await axios.get(apiSource)
    // let gasPriceBackupData = await axios.get("https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=PW9BUN7EZ173SGXS2W4IVW1V7DHAF36INH")
    
    console.log("blockHeightData", blockHeightData)
    // console.log("gasPriceBackupData", gasPriceBackupData)
    
    // let gasPrice = gasPriceData["data"]["average"];
    let blockHeight = blockHeightData["data"]["height"];
    // let gasPriceBackup = gasPriceBackupData["data"][result]["ProposeGasPrice"];
    
    console.log("blockHeight", blockHeight)
    // console.log("gasPriceBackup", gasPriceBackup)
    
    // if(Number.isInteger(gasPrice)){
    //   gasPrice = gasPrice/10;
    // }else{
    //   gasPrice = 30;
    // }
    // 
    // if(gasPrice > 150){
    //   gasPrice = 150;
    // }

    return(blockHeight.toString());
    // return("30");
  }catch{
    return("fail");
  }
}


export function* _toggleGas() {
  let farmInfo = yield select(makeSelectEarnPage());
  
  let gasMode = farmInfo["gasMode"];
  
  if(gasMode == "average"){
    gasMode = "fast";
  }else if(gasMode == "fast"){
    gasMode = "fastest";
  }else if(gasMode == "fastest"){
    gasMode = "average";
  }
  
  let gasFee = yield call(getGasPrice, gasMode);
  
  yield put(updateGas(gasMode, gasFee));
}


export function* _addAllowance(data) {
  console.log("_addAllowance", _addAllowance)
  yield put(loading());
  console.log("_addAllowance", _addAllowance)
  
  // import mainnet_token_usdc from '../../abis/mainnet_token_usdc.js'
  // import nutmeg_abi from '../../abis/nutmeg_abi.js'
  // import nutmeg_abi_test from '../../abis/nutmeg_abi_test.js'
  
  let farmInfo = yield select(makeSelectEarnPage());
  
  web3 = new Web3(ethereum);
  // web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545/'));
  // web3 = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
  
  let addressUser = farmInfo["selectedAddress"];
  let assetType = farmInfo["asset"]; 
  let vaultBalance = farmInfo["vaultBalance"];
  let depositAmount = farmInfo["depositAmount"];
  let allowanceAmount = farmInfo["allowanceAmount"];
  let allowanceData = farmInfo["allowance"];
  console.log("allowanceData", allowanceData);
  
  let selectedAllowanceAsset = data["asset"];
  let selectedAllowanceAssetNum = data["assetNum"];
  console.log("selectedAllowanceAsset", selectedAllowanceAsset);
  console.log("selectedAllowanceAssetNum", selectedAllowanceAssetNum);
  
  let abiToken = "";
  let abiVault = "";
  let tokenAddress = "";
  let vaultAddress = "";
  let decimal = "";
  let assetNum = 0;
  let allowanceOrigin = 0;
  
  const BN = web3.utils.BN;
    
  // for(var i = 0; i < vaultBalance.length; i++){
  //   console.log("i", i)
  //   console.log("assetType[i]", assetType)
  //   console.log("assetType[i]", assetType[i])
  // 
  //   if(vaultBalance[i][1] !== ""){
  //     if(selectedAllowanceAsset == "usdc"){
  //       abiVault = mainnet_vault_usdc; //mainnet_usdc;
  //       // abiToken = mainnet_token_usdc; 
  //     }else if(selectedAllowanceAsset == "usdt"){
  //       abiVault = mainnet_vault_usdt;
  //       // abiToken = mainnet_token_usdt; 
  //     }else if(selectedAllowanceAsset == "dai"){
  //       abiVault = mainnet_vault_dai;
  //       // abiToken = mainnet_token_dai; 
  //     }else if(selectedAllowanceAsset == "tusd"){
  //       abiVault = mainnet_vault_tusd;
  //       // abiToken = mainnet_token_tusd; 
  //     }else if(selectedAllowanceAsset == "aeth"){
  //       abiVault = mainnet_vault_aeth;
  //       // abiToken = mainnet_token_aeth; 
  //     }else if(selectedAllowanceAsset == "aave"){
  //       abiVault = mainnet_vault_aave;
  //       // abiToken = mainnet_token_aave; 
  //     }else if(selectedAllowanceAsset == "knc"){
  //       abiVault = mainnet_vault_knc;
  //       // abiToken = mainnet_token_knc; 
  //     }else{
  //       abiVault = mainnet_vault_knc;
  //       // abiToken = mainnet_token_knc; 
  //     }
  // 
  //     tokenAddress = assetType[selectedAllowanceAssetNum][1];
  //     vaultAddress = vaultBalance[selectedAllowanceAssetNum][1];
  //     decimal = vaultBalance[selectedAllowanceAssetNum][2];
      assetNum = selectedAllowanceAssetNum;
  //     allowanceOrigin = allowanceData[selectedAllowanceAssetNum][1];
  // 
  //     break;
  //   }
  // }
  
  let abi = "";
  
  abi = nutmeg_abi; //nutmeg_abi_test; //nutmeg_abi;
  let abi_erc = mainnet_token_usdt;
  
  let abiArrayNutmeg = JSON.parse(abi, 'utf-8');
  console.log("abiArrayNutmeg", abiArrayNutmeg)
  
  let abiArrayNutmegERC = JSON.parse(abi_erc, 'utf-8');
  console.log("abiArrayNutmegERC", abiArrayNutmegERC)
  
  // addressUser = "0xa6aB73B52b3836C1F45DE84959646661b25ad2B9";
  
  // Ganache local
  let nutmegAddress = farmInfo["addressNutmeg"]; //"0xeFF7eb03743e1E705A14bdca52D4f238E29752EC";
  let nutmegTestAddress = farmInfo["addressTestNutmeg"]; //"0x4c7CA2b35210e1d3886BF7A5EE6ca77Af76F60ec";
  // let nutmegErc20Address = farmInfo["asset"][2][1]; //'0x76B741390dFcCB59480F95b3297cAb2860F87A50';
  let selectedErc20Address = farmInfo["asset"][selectedAllowanceAssetNum][1]; //'0x76B741390dFcCB59480F95b3297cAb2860F87A50';
  console.log("selectedErc20Address", selectedErc20Address)
  
  // Ropsten
  // let nutmegAddress = "0x5FD8457B279B6Eb86C781fc431bdE35Bef7Be4B7";
  // let nutmegTestAddress = "0xc41Cb327a06fA64229625893764FEFE085eE9f57";
  // let nutmegErc20Address = '0xF636E6F7b46CBb16C5De4DfFf625871eA92aE0a1';
  
  let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
  let contractTest = new web3.eth.Contract(abiArrayNutmeg, nutmegTestAddress)
  let contractERC = new web3.eth.Contract(abiArrayNutmegERC, selectedErc20Address)
  console.log("contractERC", contractERC)
  
  // let abiArrayToken = JSON.parse(abiToken, 'utf-8');
  // console.log("abiArrayToken", abiArrayToken)
  
  // let abiArrayVault = JSON.parse(mainnet_token_usdt, 'utf-8');
  // console.log("abiArrayVault", abiArrayVault)
  
  
  
  // let contractToken = new web3.eth.Contract(abiArrayToken, tokenAddress)
  // console.log("contractToken", contractToken)
  
  // let contractVault = new web3.eth.Contract(abiArrayVault, nutmegErc20Address)
  // console.log("contractVault", contractVault)
  
  // let balanceVault = 0;
  // 
  // balanceVault = yield call(contract.methods.balanceOf(addressUser).call);
  // console.log("balanceVault", balanceVault)
  
  console.log("decimal", decimal)
  let amtSuffix = new BN(10).pow(new BN(18));
  // let amtSuffix = new BN(10).pow(new BN(decimal));
  console.log("amtSuffix", amtSuffix)
  // let tokenAmt = new BN(amtSuffix.mul(new BN(10)));
  
  
  
  allowanceAmount = 999999; //parseInt(allowanceAmount) + parseInt(allowanceOrigin);
  console.log("allowanceAmount", allowanceAmount)
  
  // let tokenAmt = allowanceAmount * (Math.pow(10, decimal)); //
  
  // let tokenAmt = (10 * Math.pow(10, 18));
  let tokenAmt = (999999999999999 * Math.pow(10, 18)); //"999999999999999"
  
  
  // let tokenAmt = (allowanceAmount * Math.pow(10, decimal));
  console.log("tokenAmt", tokenAmt)
  // tokenAmt = new BigNumber(tokenAmt)
  tokenAmt = web3.utils.toHex(new BigNumber(tokenAmt))
  console.log("tokenAmt", tokenAmt)
  // let tokenAmt = new BN(amtSuffix * (new BN(parseFloat(allowanceAmount))));
  // const approveData = contractVault.methods.approve("0x415B357871824e3816a95a1f802D3D00a6897C01", tokenAmt.toString()).encodeABI();
  // const approveData = contractERC.methods.approve(nutmegAddress, tokenAmt.toString()).encodeABI();
  const approveData = contractERC.methods.approve(nutmegAddress, tokenAmt.toString()).encodeABI();
  console.log("approveData", approveData)
  // const approveData = contract.methods.approve(nutmegAddress, tokenAmt.toString()).encodeABI();
  
  
  // window.ethereum.enable();
  
  const Tx = require ('ethereumjs-tx').Transaction;
  
  console.log("ethereum", ethereum)
  
  let txCount = yield call(web3.eth.getTransactionCount, addressUser);
  console.log("txCount", txCount)
  console.log("addressUser", addressUser)
  
  let gasMode = farmInfo["gasMode"];
  
  let gas = yield call(getGasPrice, gasMode);
  console.log("gas", gas)
  
  
  if (txCount >= 0) {
    
    // approve
    const txObjApprove = {
        nonce:      web3.utils.toHex(txCount),
        to:         selectedErc20Address, //tokenAddress, //vaultAddress, //tokenAddress
        from:       addressUser,
        value:      web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit:   web3.utils.toHex(2100000),
        gasPrice:   web3.utils.toHex(web3.utils.toWei(gas, 'gwei')), //30
        data: approveData
    };
    console.log("txObjApprove", txObjApprove)
  
    // var batch = new web3.BatchRequest();
    // 
    // let callback;
    // let callback2;
    // 
    // batch.add(contractToken.approve(vaultAddress, tokenAmt, {from: addressUser, gas: web3.utils.toHex(web3.utils.toWei(gas, 'gwei'))}, callback));
    // batch.add(contractVault.deposit(tokenAmt, {from: addressUser, gas: web3.utils.toHex(web3.utils.toWei(gas, 'gwei'))}, callback2));
    // console.log("callback", callback)
    // console.log("callback2", callback2)
    // 
    // batch.execute();
    
    let txHash = ""
    txHash = yield call(sendTx, txObjApprove);
    console.log("txHash", txHash)
    
    yield put(blockchainTransactionLoading());
    yield put(updateLoadingScreen(["Amending Allowance", txHash]));
    
    // wait 5-6 block?
    // this works. thus it means it requires a delay and loop to check receipt multuple times
    let txConfirmation = null;
    
    for(var i = 0; i < 50; i++){
      console.log("loop", i)
      
      yield delay(10000);
      txConfirmation = yield call(web3.eth.getTransactionReceipt, txHash);
      // let txConfirmation = yield call(web3.eth.getTransactionReceipt, "0xf71304de0fe0b850540968a0a1d046088eef9f28c99c042b947f28905b842101");
      console.log("txConfirmation", txConfirmation)
      
      if(txConfirmation !== null){
        yield put(blockchainTransactionLoaded());
      
        break;
      }
    }
    
    
    // console.log("ethResponse", ethResponse);
    console.log("txHash", txHash);
    // console.log("ethResponse.result", ethResponse.result);
  
    // yield delay(100000);
    yield put(addAllowanceSuccess(assetNum, allowanceAmount, txHash));
    yield put(updateLoadingScreen(["", ""]));
  
    yield put(loaded());
  
  }else{
    console.log('Failed in getting tx count');
  
    yield put(loaded());
  }
}

export function* _deposit(data) {
  console.log("_deposit");
  yield put(loading());
  
  let farmInfo = yield select(makeSelectEarnPage());
  
  web3 = new Web3(ethereum);
  
  let addressUser = farmInfo["selectedAddress"];
  let assetType = farmInfo["asset"]; 
  let vaultBalance = farmInfo["vaultBalance"];
  let depositAmount = farmInfo["depositAmount"];
  
  let selectedAllowanceAsset = data["asset"];
  let selectedAllowanceAssetNum = data["assetNum"];
  console.log("data", data);
  console.log("selectedAllowanceAsset", selectedAllowanceAsset);
  console.log("selectedAllowanceAssetNum", selectedAllowanceAssetNum);
  
  let selectedTranche = farmInfo["selectedTranche"];
  
  let abiToken = "";
  let abiVault = "";
  let tokenAddress = "";
  let vaultAddress = "";
  let decimal = "";
  let assetNum = 0;
  
  const BN = web3.utils.BN;
  
  try{
  
    for(var i = 0; i < vaultBalance.length; i++){
      console.log("i", i)
      console.log("assetType[i]", assetType)
  
      if(vaultBalance[i][1] !== ""){
        abiToken = mainnet_token_usdt; 
        
  
        tokenAddress = assetType[selectedAllowanceAssetNum][1];
        vaultAddress = vaultBalance[selectedAllowanceAssetNum][1];
        decimal = 18; //vaultBalance[selectedAllowanceAssetNum][2];
        assetNum = selectedAllowanceAssetNum;
  
        console.log("selectedAllowanceAsset", selectedAllowanceAsset)
        console.log("tokenAddress", tokenAddress)
  
        break;
      }
    }
  
  
    let abiArrayToken = JSON.parse(abiToken, 'utf-8');
    console.log("abiArrayToken", abiArrayToken)
  
  
    let contractToken = new web3.eth.Contract(abiArrayToken, tokenAddress)
    console.log("contractToken", contractToken)
    
    
    let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
    console.log("abiArrayNutmeg", abiArrayNutmeg)
    
    
    let nutmegAddress = farmInfo["addressNutmeg"]; 
    let nutmegTestAddress = farmInfo["addressTestNutmeg"];
    let selectedErc20Address = farmInfo["asset"][selectedAllowanceAssetNum][1];
    
    let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
    let contractTest = new web3.eth.Contract(abiArrayNutmeg, nutmegTestAddress)
    console.log("contract", contract)
    
    let contractVault = contract; 
    vaultAddress = nutmegAddress;
  
    console.log("decimal", decimal)
  
    let tokenAmt = (depositAmount * Math.pow(10, decimal));
    console.log("tokenAmt", tokenAmt)
    tokenAmt = new BigNumber(tokenAmt)
    // tokenAmt = JSBI.BigInt(tokenAmt)
    // tokenAmt = new BN(tokenAmt)
  
  
    console.log("tokenAmt", tokenAmt)
    // tokenAmountParsed = toHex(tokenAmountParsed)
    // console.log("tokenAmountParsed", tokenAmountParsed)
    
    console.log("selectedTranche", selectedTranche)
    let selectedTrancheValue = 0;
    
    if(selectedTranche == "AAA"){
      selectedTrancheValue = 0;
    }else if(selectedTranche == "AA"){
      selectedTrancheValue = 1;
    }else if(selectedTranche == "B"){
      selectedTrancheValue = 2;
    }
    console.log("selectedTrancheValue", selectedTrancheValue)
  
    const stakeData = contractVault.methods.stake(selectedErc20Address, selectedTrancheValue, tokenAmt).encodeABI();
    // const stakeData = contractVault.methods.stake(tokenAmt).encodeABI();
    // const stakeData = contractVault.methods.deposit(tokenAmt.toString()).encodeABI();
    
    console.log("stakeData", stakeData)
  
    window.ethereum.enable();
  
    const Tx = require ('ethereumjs-tx').Transaction;
  
    console.log("ethereum", ethereum)
  
    let txCount = yield call(web3.eth.getTransactionCount, addressUser);
    console.log("txCount", txCount)
  
    let gasMode = farmInfo["gasMode"];
  
    let gas = yield call(getGasPrice, gasMode);
    console.log("gas", gas)
  
  
    if (txCount >= 0) {
      const txObjDeposit = {
          nonce:      web3.utils.toHex(txCount),
          to:         vaultAddress,
          from:       addressUser,
          value:      web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          gasLimit:   web3.utils.toHex(2100000),
          gasPrice:   web3.utils.toHex(web3.utils.toWei(gas, 'gwei')), //30
          data: stakeData
      };
      console.log("txObjDeposit", txObjDeposit)
  
      let txHash = ""
      txHash = yield call(sendTx, txObjDeposit);
      console.log("txHash", txHash)
      
      yield put(blockchainTransactionLoading());
      yield put(updateLoadingScreen(["Staking Funds", txHash]));
      
      let txConfirmation = null;
      
      for(var i = 0; i < 50; i++){
        console.log("loop", i)
        
        yield delay(10000);
        txConfirmation = yield call(web3.eth.getTransactionReceipt, txHash);
        // let txConfirmation = yield call(web3.eth.getTransactionReceipt, "0xf71304de0fe0b850540968a0a1d046088eef9f28c99c042b947f28905b842101");
        console.log("txConfirmation", txConfirmation)
        
        if(txConfirmation !== null){
          yield put(blockchainTransactionLoaded());
        
          break;
        }
      }
      
      
      // console.log("ethResponse", ethResponse);
      console.log("txHash", txHash);
  
      // yield put(updateLoadingScreen(["Depositing Funds", txHash]));
  
      yield delay(100000);
      yield put(depositSuccess(assetNum, depositAmount, txHash, selectedTrancheValue));
      yield put(updateLoadingScreen(["", ""]));
  
      yield put(loaded());
  
    }else{
      console.log('Failed in getting tx count');
  
      yield put(loaded());
    }
  
  }catch(err){
    console.error(err.message)
    yield put(depositError());
    yield put(loaded());
  }
}


export function* _withdraw(data) {
  yield put(loading());
  
  let farmInfo = yield select(makeSelectEarnPage());
  
  web3 = new Web3(ethereum);
  
  let addressUser = farmInfo["selectedAddress"];
  let assetType = farmInfo["asset"]; 
  let vaultBalance = farmInfo["vaultBalance"];
  let withdrawAmount = farmInfo["withdrawAmount"];
  
  let selectedAllowanceAsset = data["asset"];
  let selectedAllowanceAssetNum = data["assetNum"];
  console.log("selectedAllowanceAsset", selectedAllowanceAsset);
  console.log("selectedAllowanceAssetNum", selectedAllowanceAssetNum);
  
  let selectedTranche = farmInfo["selectedTranche"];
  
  let abi = "";
  let tokenAddress = "";
  let decimal = 18;
  let assetNum = 0;
  
  
  let vaultAddress;
  
  
  let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
  console.log("abiArrayNutmeg", abiArrayNutmeg)
  
  

  
  // Ropsten
  let nutmegAddress = farmInfo["addressNutmeg"]; //"0xeFF7eb03743e1E705A14bdca52D4f238E29752EC";
  let nutmegTestAddress = farmInfo["addressTestNutmeg"]; //"0x4c7CA2b35210e1d3886BF7A5EE6ca77Af76F60ec"
  // let nutmegErc20Address = farmInfo["asset"][2][1]; //'0x76B741390dFcCB59480F95b3297cAb2860F87A50';
  let selectedErc20Address = farmInfo["asset"][selectedAllowanceAssetNum][1]; //'0x76B741390dFcCB59480F95b3297cAb2860F87A50';
  
  let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
  let contractTest = new web3.eth.Contract(abiArrayNutmeg, nutmegTestAddress)
  console.log("contract", contract)
  
  let contractVault = contract; //contractTest;
  vaultAddress = nutmegAddress; //nutmegTestAddress;
  
  // let governor = yield call(contract.methods.getGovernor().call);
  // console.log("governor", governor)
  // 
  // let maxNumPool = yield call(contract.methods.MAX_NUM_POOL().call);
  // console.log("maxNumPool", maxNumPool)
  // 
  // let governorTest = yield call(contractTest.methods.getGovernor().call);
  // console.log("governorTest", governorTest)
  
  const BN = web3.utils.BN;
  
  // for(var i = 0; i < vaultBalance.length; i++){
  //   console.log("vaultBalance[i][0]", vaultBalance[i][0])
  // 
  //   if(vaultBalance[i][1] !== ""){
  //     if(selectedAllowanceAsset == "usdc"){
  //       abi = mainnet_vault_usdc; 
  //     }else if(selectedAllowanceAsset == "usdt"){
  //       abi = mainnet_vault_usdt;
  //     }else if(selectedAllowanceAsset == "dai"){
  //       abi = mainnet_vault_dai;
  //     }else if(selectedAllowanceAsset == "tusd"){
  //       abi = mainnet_vault_tusd;
  //     }else if(selectedAllowanceAsset == "aeth"){
  //       abi = mainnet_vault_aeth;
  //     }else if(selectedAllowanceAsset == "aave"){
  //       abi = mainnet_vault_aave;
  //     }else if(selectedAllowanceAsset == "knc"){
  //       abi = mainnet_vault_knc;
  //     }else{
  //       abi = mainnet_vault_knc;
  //     }
  // 
  //     tokenAddress = vaultBalance[selectedAllowanceAssetNum][1];
  //     decimal = vaultBalance[selectedAllowanceAssetNum][2];
  //     assetNum = selectedAllowanceAssetNum;
  // 
  //     break;
  //   }
  // }
  
  // let abiArrayToken = JSON.parse(abi, 'utf-8');
  // console.log("abiArrayToken", abiArrayToken)
  // 
  // let contract = new web3.eth.Contract(abiArrayToken, tokenAddress)
  // console.log("contract", contract)
  
  // let balanceVault = 0;
  // 
  // balanceVault = yield call(contract.methods.balanceOf(addressUser).call);
  // console.log("balanceVault", balanceVault)
  
  console.log("decimal", decimal)
  let amtSuffix = new BN(10).pow(new BN(decimal));
  console.log("amtSuffix", amtSuffix)
  // let tokenAmt = new BN(amtSuffix.mul(new BN(10)));
  
  
  let tokenAmt = (withdrawAmount * Math.pow(10, decimal));
  console.log("tokenAmt", tokenAmt)
  tokenAmt = new BigNumber(tokenAmt)
  // let tokenAmt = new BN(amtSuffix * (new BN(parseFloat(withdrawAmount))));
  
  
  console.log("selectedTranche", selectedTranche)
  let selectedTrancheValue = 0;
  
  if(selectedTranche == "AAA"){
    selectedTrancheValue = 0;
  }else if(selectedTranche == "AA"){
    selectedTrancheValue = 1;
  }else if(selectedTranche == "B"){
    selectedTrancheValue = 2;
  }
  console.log("selectedTrancheValue", selectedTrancheValue)
  
  const stakeData = contractVault.methods.unstake(selectedErc20Address, selectedTrancheValue, tokenAmt).encodeABI();
  // const stakeData = contract.methods.withdraw(tokenAmt.toString()).encodeABI();
  
  console.log("tokenAmt", tokenAmt)
  console.log("stakeData", stakeData)
  
  window.ethereum.enable();
  
  const Tx = require ('ethereumjs-tx').Transaction;
  
  console.log("ethereum", ethereum)
  
  let txCount = yield call(web3.eth.getTransactionCount, addressUser);
  console.log("txCount", txCount)
  
  let gasMode = farmInfo["gasMode"];
  
  let gas = yield call(getGasPrice, gasMode);
  console.log("gas", gas)
  
  if (txCount >= 0) {
  
    const txObj = {
        nonce:      web3.utils.toHex(txCount),
        to:         vaultAddress,
        from:       addressUser,
        value:      web3.utils.toHex(web3.utils.toWei('0', 'ether')),
        gasLimit:   web3.utils.toHex(2100000),
        gasPrice:   web3.utils.toHex(web3.utils.toWei(gas, 'gwei')), //30
        data: stakeData
    };
    console.log("txObj", txObj)
  
  
  
    // ethereum.sendAsync({
    //   method: 'eth_sendTransaction',
    //   params: [txObj],
    // }, (error, response) => {
    //   if (error) {
    //     console.error(error)
    //     // getAccountsResults.innerHTML = `Error: ${error}`
    //   } else {
    //     console.log(response)
    //     console.log(response.result)
    //     console.log(response.result[0])
    //   }
    // })
  
    let txHash = ""
    txHash = yield call(sendTx, txObj);
  
    yield put(updateLoadingScreen(["Withdrawing Funds", txHash]));
  
    yield delay(100000);
    yield put(withdrawSuccess(assetNum, withdrawAmount, txHash, selectedTrancheValue));
    // yield put(withdrawSuccess(assetNum, withdrawAmount, txHash));
    yield put(updateLoadingScreen(["", ""]));
  
    yield put(loaded());
  
  }else{
    console.log('Failed in getting tx count');
  
    yield put(loaded());
  }
  
  yield put(withdrawSuccess());
  yield put(loaded());
  
}


export function* _getBalance(data) {
  yield put(loading());
  console.log("_getBalance")
  console.log("_getBalance")
  console.log("_getBalance")
  console.log("_getBalance")
  
  // let balanceUser = yield call(contractERC.methods.balanceOf(addressUser).call);
  // console.log("balanceUser", balanceUser)
  
  let farmInfo = yield select(makeSelectEarnPage());
  
  web3 = new Web3(ethereum);
  // web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545/'));
  // web3 = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
  
  let addressUser = data["address"]; //farmInfo["selectedAddress"];
  let vaultBalance = farmInfo["vaultBalance"];
  let assetInfo = farmInfo["asset"];
  // let assetInfo = farmInfo["assetGanache"];
  
  
  console.log("assetInfo", assetInfo);
  console.log("getBalance saga");
  console.log("addressUser", addressUser);
  
  // var contractPoolmasterAddress = homeInfo["contractPoolmasterAddress"];
  // console.log("contractPoolmasterAddress", contractPoolmasterAddress)
  // 
  // 
  const BN = web3.utils.BN;
  
  
  let balanceETH = yield call(web3.eth.getBalance, addressUser);
  console.log("balanceETH", balanceETH)
  // 
  // let balanceETH = yield call(web3.eth.getBalance, data["address"]);
  // console.log("balanceETH", balanceETH)
  // 
  // balanceETH = balanceETH/amtSuffix;
  // 
  // console.log("balanceETH", balanceETH)
  // 
  // var abiArrayToken = JSON.parse(mainnet_usdc, 'utf-8');
  // var abiArrayToken = JSON.parse(abi_mainnet_knc, 'utf-8');
  
  let balanceArray = [];
  let allowanceArray = [];
  let vaultArray = [];
  let vaultExchangeRate = [];
  let vaultTVL = [];
  
  for(var i = 0; i < assetInfo.length; i++){
    console.log("-------------")
    console.log("assetInfo")
    console.log("assetInfo")
    console.log("assetInfo")
    console.log("assetInfo")
    console.log("assetInfo")
    console.log("assetInfo")
    console.log("-------------")
    console.log("assetInfo[i][0]", assetInfo[i][0])
    
    if(assetInfo[i][1] !== ""){
    
      let abi = "";
      // if(assetInfo[i][0] == "usdc"){
      //   abi = mainnet_token_usdt; //mainnet_usdc;
      // }else if(assetInfo[i][0] == "usdt"){
      //   abi = mainnet_token_usdt;
      // }else if(assetInfo[i][0] == "dai"){
      //   abi = mainnet_token_usdt;
      // }else if(assetInfo[i][0] == "tusd"){
      //   abi = mainnet_token_usdt;
      // }else if(assetInfo[i][0] == "aeth"){
      //   abi = mainnet_token_usdt;
      //   // abi = mainnet_token_aeth;
      // }else if(assetInfo[i][0] == "aave"){
      //   abi = mainnet_token_usdt;
      //   // abi = mainnet_token_aeth;
      // }else if(assetInfo[i][0] == "knc"){
      //   abi = mainnet_token_usdt;
      //   // abi = mainnet_token_aeth;
      // }else{
      //   abi = mainnet_token_usdt;
      // }
      abi = mainnet_token_usdt;
      
      let abiArrayToken = JSON.parse(abi, 'utf-8');
      console.log("abiArrayToken", abiArrayToken)
      
      let tokenAddress = assetInfo[i][1]; //mainnet usdc
      console.log("tokenAddress", tokenAddress)
      
      let contract = new web3.eth.Contract(abiArrayToken, tokenAddress)
      console.log("contract", contract)
      
      let balanceToken = 0;
      
      try{
        balanceToken = yield call(contract.methods.balanceOf(addressUser).call);
      }catch{
        balanceToken = 0;
      }
      
      let amtSuffix = new BN(10).pow(new BN(assetInfo[i][2]));
      let tokenAmt = new BN(amtSuffix.mul(new BN(10)));
      
      balanceToken = balanceToken/amtSuffix;
      
      console.log("balanceToken", balanceToken)
      
      balanceArray.push(balanceToken)
    }else{
      balanceArray.push(0)
    }
  }
  
  
  for(var i = 0; i < vaultBalance.length; i++){
    console.log("-------------")
    console.log("vaultBalance")
    console.log("-------------")
    console.log("vaultBalance[i][0]", vaultBalance[i][0])
  
    if(vaultBalance[i][1] !== ""){
      let abi = "";
  
      // if(vaultBalance[i][0] == "usdc"){
      //   abi = mainnet_vault_usdc; //mainnet_usdc;
      // }else if(vaultBalance[i][0] == "usdt"){
      //   abi = mainnet_vault_usdt;
      // }else if(vaultBalance[i][0] == "dai"){
      //   abi = mainnet_vault_dai;
      // }else if(vaultBalance[i][0] == "tusd"){
      //   abi = mainnet_vault_tusd;
      // }else if(vaultBalance[i][0] == "aeth"){
      //   abi = mainnet_vault_aeth;
      // }else if(vaultBalance[i][0] == "aave"){
      //   abi = mainnet_vault_aave;
      // }else if(vaultBalance[i][0] == "knc"){
      //   abi = mainnet_vault_knc;
      // }else{
      //   abi = mainnet_vault_usdt;
      // }
      abi = mainnet_token_usdt;
  
      let abiArrayToken = JSON.parse(abi, 'utf-8');
      console.log("abiArrayToken", abiArrayToken)
      
      let nutmegAddress = farmInfo["addressNutmeg"]; //"0xeFF7eb03743e1E705A14bdca52D4f238E29752EC";
      let nutmegTestAddress = farmInfo["addressTestNutmeg"]; //"0x4c7CA2b35210e1d3886BF7A5EE6ca77Af76F60ec";
      let nutmegErc20Address = farmInfo["asset"][i][1]; //'0x76B741390dFcCB59480F95b3297cAb2860F87A50';
  
      let tokenAddress = assetInfo[i][1]; //mainnet usdc
      // let tokenAddress = "0x76B741390dFcCB59480F95b3297cAb2860F87A50"; //mainnet usdc
      let vaultAddress = nutmegAddress;
      // let vaultAddress = vaultBalance[i][1];
  
      // let contract = new web3.eth.Contract(abiArrayToken, vaultAddress)
      // console.log("contract", contract)
  
      let contractToken = new web3.eth.Contract(abiArrayToken, tokenAddress)
      console.log("contractToken", contractToken)
  
      let balanceVault = 0;
      let exchangeRate = 0;
      let balanceVaultTVL = 0;
      let allowanceVault = 0;
  
      // try{
      //   balanceVault = yield call(contract.methods.balanceOf(addressUser).call);
      //   console.log("balanceVault", balanceVault)
      // }catch{
      //   balanceVault = 0;
      //   console.log("balanceVault", balanceVault)
      // }
      
      console.log("addressUser", addressUser)
      console.log("vaultAddress", vaultAddress)
      allowanceVault = yield call(contractToken.methods.allowance(addressUser, vaultAddress).call);
      console.log("allowanceVault", allowanceVault)
      console.log("allowanceVault", allowanceVault)
      console.log("allowanceVault", allowanceVault)
      console.log("allowanceVault", allowanceVault)
  
      // if(balanceVault > 0){
      //   balanceVaultTVL = yield call(contract.methods.balance().call);
      // }else{
      //   balanceVaultTVL = 0;
      // }
      // console.log("balanceVaultTVL", balanceVaultTVL)
      // console.log("-------")
      // 
      // if(balanceVaultTVL > 0){
      //   exchangeRate = yield call(contract.methods.getPricePerFullShare().call);
      // }
      // 
      // console.log("exchangeRate", exchangeRate)
      // console.log("-------")
      // 
      // console.log("vaultBalance[i][2]", vaultBalance[i][2])
      // let amtSuffix = new BN(10).pow(new BN(vaultBalance[i][2]));
      let amtSuffix = new BN(10).pow(new BN(18));
      // console.log("amtSuffix", amtSuffix)
      // console.log("amtSuffixDefault", amtSuffixDefault)
      // let tokenAmt = new BN(amtSuffix.mul(new BN(10)));
      // console.log("-------")
      // 
      // if(balanceVault > 0){
      //   balanceVault = balanceVault/amtSuffix;
      // }else{
      //   balanceVault = 0
      // }
      // 
      // if(balanceVaultTVL > 0){
      //   balanceVaultTVL = balanceVaultTVL/amtSuffix;
      // }else{
      //   balanceVaultTVL = 0
      // }
      // 
      // console.log("exchangeRate", exchangeRate)
      // console.log("exchangeRate", exchangeRate)
      // 
      // exchangeRate = exchangeRate/amtSuffixDefault;
  
      allowanceVault = allowanceVault/amtSuffix;
  
      // console.log("exchangeRate", exchangeRate)
      // 
      // console.log("balanceVault", balanceVault)
      // console.log("balanceVaultTVL", balanceVaultTVL)
  
      // vaultArray.push(balanceVault);
      // vaultTVL.push(balanceVaultTVL);
      // vaultExchangeRate.push(exchangeRate);
      allowanceArray.push(allowanceVault)
  
    }else{
  
      // vaultArray.push("");
      // vaultTVL.push("0");
      // vaultExchangeRate.push("0");
      allowanceArray.push("0")
      console.log("vault has empty address")
    }
  }
  
  
  let abiArrayNutToken = JSON.parse(nut_abi, 'utf-8');
  console.log("abiArrayNutToken", abiArrayNutToken)
  
  // Ropsten
  let nutTokenAddress = farmInfo["addressTokenNUT"];
  
  let contractNut = new web3.eth.Contract(abiArrayNutToken, nutTokenAddress)
  let balanceNut = yield call(contractNut.methods.balanceOf(addressUser).call);
  // let balanceVault = yield call(contract.methods.getGovernor());
  // let balanceVault = yield call(contract.address());
  console.log("balanceNut", balanceNut)
  
  let assetAddressArray = farmInfo["asset"]
  let trancheWithdrawalBalance = farmInfo["trancheWithdrawalBalance"];
  
  let withdrawalBalanceArray = [];
  let poolTrancheDepositArray = [];
  let poolTrancheLoanArray = [];
  
  let abi = "";
  
  abi = nutmeg_abi; //nutmeg_abi_test; //nutmeg_abi;
  let abi_erc = mock_erc_abi; //mainnet_token_usdt;
  
  let abiArrayNutmegERC = JSON.parse(abi_erc, 'utf-8');
  console.log("abiArrayNutmegERC", abiArrayNutmegERC)
  
  
  let abiArrayNutmeg = JSON.parse(abi, 'utf-8');
  
  // Ropsten
  let nutmegAddress = farmInfo["addressNutmeg"]; 
  
  let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
  
  // 
  // NEED TO MATCH AMOUNT OF ASSETS WITH REDUCER ASSET ARRAY
  // CURRENTLY HARDCODED
  //
  
  for(let i=0; i<farmInfo["poolsArray"].length; i++){
    let assetWithdrawalBalanceArray = [];
    let trancheDepositArray = [];
    let trancheLoanArray = [];
    
    let withdrawTotal = 0;
    let depositTotal = 0;
    let loanTotal = 0;
    
    let contractERC; 
    let assetDecimal; 
    let assetValid = false;
    
    if(assetAddressArray[i][1] !== ""){
      contractERC = new web3.eth.Contract(abiArrayNutmegERC, assetAddressArray[i][1])
      assetDecimal= yield call(contractERC.methods.decimals().call);
      assetValid = true;
    }
    
    // 3 being number of tranches
    for(let r=0; r<3; r++){
      let getMaxUnstakePrincipal;
      let stakeMap;
      let poolDeposit = 0;
      let poolLoan = 0;
      
      if(assetValid == true){
        if(assetAddressArray[i][1] > 0){
          getMaxUnstakePrincipal = yield call(contract.methods.getMaxUnstakePrincipal(assetAddressArray[i][1], addressUser, r).call);
          getMaxUnstakePrincipal = getMaxUnstakePrincipal / (Math.pow(10, assetDecimal))
          
          stakeMap = yield call(contract.methods.stakeMap(assetAddressArray[i][1], addressUser, r).call);
          poolDeposit = stakeMap["principal"];
          poolDeposit = poolDeposit / (Math.pow(10, assetDecimal))
          
          poolLoan = 0;
          
          depositTotal += poolDeposit;
          loanTotal += poolLoan;
          
        }else{
          getMaxUnstakePrincipal = 0;
          poolDeposit = 0;
          poolLoan = 0;
        }
      }else{
        getMaxUnstakePrincipal = 0;
        poolDeposit = 0;
        poolLoan = 0;
      }
      console.log("getMaxUnstakePrincipal", getMaxUnstakePrincipal);
      assetWithdrawalBalanceArray.push(getMaxUnstakePrincipal);
      trancheDepositArray.push(poolDeposit);
      trancheLoanArray.push(poolLoan);
    }
    
    withdrawalBalanceArray.push([farmInfo["poolSymbol"][i][0], assetWithdrawalBalanceArray, withdrawTotal]);
    poolTrancheDepositArray.push([farmInfo["poolSymbol"][i][0], trancheDepositArray, depositTotal]);
    poolTrancheLoanArray.push([farmInfo["poolSymbol"][i][0], trancheLoanArray, loanTotal]);
  }
  console.log("withdrawalBalanceArray", withdrawalBalanceArray)
  console.log("poolTrancheDepositArray", poolTrancheDepositArray)
  console.log("poolTrancheLoanArray", poolTrancheLoanArray)
  
  let getPositionIds = yield call(contract.methods.getPositionIds(addressUser).call);
  console.log("getPositionIds", getPositionIds)
  
  let positionOpen = [];
  
  for(let i=0; i<getPositionIds.length; i++){
   let getPosition= yield call(contract.methods.getPosition(getPositionIds[i]).call);
   console.log("getPosition", getPosition)
   
   if(getPosition[1] == "1"){
     positionOpen.push(getPositionIds[i]);
   }
  }
  
  console.log("positionOpen", positionOpen)
  
  
  yield put(getTrancheBalanceSuccess([withdrawalBalanceArray, poolTrancheDepositArray, poolTrancheLoanArray]));
  
  yield put(getBalanceNut(balanceNut));
  
  yield put(setFarmPositions(positionOpen));
  
  // yield put(getPoolTrancheInfoSuccess(poolTrancheArray));
  
  yield put(getBalanceSuccess(balanceArray, vaultArray));
  yield put(getVaultExchangeRateSuccess(vaultExchangeRate));
  // yield put(getVaultTVLSuccess(vaultTVL));
  console.log("allowanceArray", allowanceArray)
  yield put(getAllowanceSuccess(allowanceArray));
  
  
  // // if(data["response_status"] !== 400){
  // //   yield put(getBalanceSuccess(data));
  // // }else{
  // //   yield put(getBalanceError(data));
  // // }
  
  yield put(loaded());
}

export function* _updateTVL() {
  yield put(loading());
  
  console.log("_updateTVL");
  let farmInfo = yield select(makeSelectEarnPage());
  
  let network = "";
  
  try{
    network = yield call(getNetwork);
  }catch(e){
    console.log("e", e);
  }
  console.log("network", network);
  console.log("network", network);
  console.log("network", network);
  // console.log("_updateTVL");
  
  if(farmInfo["initialLoaded"] == false){
  // if(true){
  
    yield put(initialLoaded());
    
    if(network == 4){
    // if(network == 1 || network == 3){
    // if(true){
      let farmInfo = yield select(makeSelectEarnPage());
      
      // 
      web3 = new Web3(ethereum);
      // web3 = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:9545/'));
      // web3 = new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/cd24784a162c4ff8878a58fde5162e94");
      // 
      // // web3 = new Web3(new Web3.providers.HttpProvider("https://mainnet.infura.io/v3/cd24784a162c4ff8878a58fde5162e94"));
      // web3 = new Web3(new Web3.providers.HttpProvider("https://ropsten.infura.io/v3/ba29ca3746574629bccb2063975f1cf7"));
      // 
      // // let vaultBalance = farmInfo["vaultBalance"];
      // // let assetInfo = farmInfo["asset"];
      // 
      // 
      const BN = web3.utils.BN;
      // 
      // let vaultTVL = [];
      // let assetPrice = [];
      // 
      let abi = "";
      
      abi = nutmeg_abi; //nutmeg_abi_test; //nutmeg_abi;
      let abi_erc = mock_erc_abi; //mainnet_token_usdt;
      
      let abiArrayNutmeg = JSON.parse(abi, 'utf-8');
      console.log("abiArrayNutmeg", abiArrayNutmeg)
      
      let abiArrayNutmegERC = JSON.parse(abi_erc, 'utf-8');
      console.log("abiArrayNutmegERC", abiArrayNutmegERC)
      
      
      let abiArrayNutToken = JSON.parse(nut_abi, 'utf-8');
      console.log("abiArrayNutToken", abiArrayNutToken)
      
      let abiArrayNutDistributor = JSON.parse(nut_distributor_abi, 'utf-8');
      console.log("abiArrayNutDistributor", abiArrayNutDistributor)
      
      
      let addressUser = "0xa6aB73B52b3836C1F45DE84959646661b25ad2B9";
      
      // Ropsten
      let nutTokenAddress = farmInfo["addressTokenNUT"];
      let nutDistributorAddress = farmInfo["addressDistributorNUT"];
      
      let nutmegAddress = farmInfo["addressNutmeg"]; //"0xeFF7eb03743e1E705A14bdca52D4f238E29752EC";
      // let nutmegTestAddress = farmInfo["addressTestNutmeg"]; //"0x4c7CA2b35210e1d3886BF7A5EE6ca77Af76F60ec";
      
      // Ganache local
      // let nutmegAddress = "0x5FD8457B279B6Eb86C781fc431bdE35Bef7Be4B7";
      // let nutmegTestAddress = "0xc41Cb327a06fA64229625893764FEFE085eE9f57";
      // let nutmegErc20Address = '0xF636E6F7b46CBb16C5De4DfFf625871eA92aE0a1';
      
      let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
      // let contractTest = new web3.eth.Contract(abiArrayNutmeg, nutmegTestAddress)
      let contractNut = new web3.eth.Contract(abiArrayNutToken, nutTokenAddress)
      let contractNutDistributor = new web3.eth.Contract(abiArrayNutDistributor, nutDistributorAddress)
      console.log("contract", contract)
      
      // let balanceVault = yield call(contractERC.methods.balanceOf(nutmegAddress).call);
      // console.log("balanceVault", balanceVault)
      
      
      // let balanceUser = yield call(contractERC.methods.balanceOf(addressUser).call);
      // console.log("balanceUser", balanceUser)
      // 
      // let name = yield call(contractERC.methods.name().call);
      // console.log("name", name)
      // 
      // let totalSupply = yield call(contractERC.methods.totalSupply().call);
      // console.log("totalSupply", totalSupply)
      
      // let governor = yield call(contract.methods.getGovernor().call);
      // console.log("governor", governor)
      
      let maxNumPool = yield call(contract.methods.MAX_NUM_POOL().call);
      console.log("maxNumPool", maxNumPool)
      
      // let governorTest = yield call(contractTest.methods.getGovernor().call);
      // console.log("governorTest", governorTest)
      
      // let maxNumPoolTest = yield call(contractTest.methods.MAX_NUM_POOL().call);
      // console.log("maxNumPoolTest", maxNumPoolTest)
      
      // let pools = yield call(contract.methods.pools(0).call);
      // let pools = yield call(contract.methods.getPools(0).call);
      // console.log("pools", pools)
      
      let getPools = yield call(contract.methods.getPools().call);
      console.log("getPools", getPools)
      
      let totalTVL = 0;
      let highestEarn = 0;
      let treasuryBalance = 0;
      let poolName = [];
      let poolSymbol = [];
      let poolPrinciple = [];
      let poolInterestRate = [];
      let poolInterest = [];
      let poolLoan = [];
      let poolTokenAddress = []
      
      let tvlGraphData = [];
      let treasuryGraphData = [];
      let treasuryGraphUnsortedData = [];
      
      let treasuryGraphDataStep1Obj = {};
      let treasuryGraphDataStep2Obj = {};
      let treasuryGraphDataStep3Obj = {};
      let treasuryGraphDataStep4Obj = {};
      let treasuryGraphDataFinalObj = {};
      
      for(let i = 0; i < getPools.length; i++){
        console.log("getPools[i]", getPools[i]);
        let poolSingle = yield call(contract.methods.getPool(getPools[i]).call);
        console.log("poolSingle", poolSingle);
        
        let poolTokenAddr = poolSingle["baseToken"];
        poolTokenAddress.push(poolTokenAddr);
        
        let abiArrayNutmegERC = JSON.parse(abi_erc, 'utf-8');
        let contractERC = new web3.eth.Contract(abiArrayNutmegERC, poolTokenAddr)
        
        let poolTokenDecimal = yield call(contractERC.methods.decimals().call);
        let poolTokenName = yield call(contractERC.methods.name().call);
        let poolTokenSymbol = yield call(contractERC.methods.symbol().call);
        console.log("poolTokenName", poolTokenName);
        console.log("poolTokenSymbol", poolTokenSymbol);
        
        let poolTempNameArray = [];
        let poolTempSymbolArray = [];
        let poolTempPrincipleArray = [];
        let poolTempLoanArray = [];
        
        let poolTempSpecificTreasuryBalance = 0;
        
        
        
        poolTempNameArray.push(poolTokenName);
        poolTempSymbolArray.push(poolTokenSymbol);
        
        for(let r = 0; r < poolSingle["principals"].length; r++){
          let poolPrinciple = parseFloat(poolSingle["principals"][r]) / (Math.pow(10, poolTokenDecimal))
          let poolLoan = parseFloat(poolSingle["loans"][r]) / (Math.pow(10, poolTokenDecimal))
          console.log("poolPrinciple", poolPrinciple);
          
          let poolDifference = poolPrinciple - poolLoan;
          // TVL currently is all assuming it's usd based
          // for non usd based coin, need to multiple by coin value
          totalTVL += poolPrinciple;
          treasuryBalance += poolDifference;
          
          poolTempSpecificTreasuryBalance += poolDifference;
          
          if(parseFloat(poolSingle["interestRates"][r]) > highestEarn){
            highestEarn = parseFloat(poolSingle["interestRates"][r]);
          }
          
          poolTempPrincipleArray.push(poolPrinciple);
          poolTempLoanArray.push(poolLoan);
        }
        
        poolName.push(poolTempNameArray);
        poolSymbol.push(poolTempSymbolArray);
        poolPrinciple.push(poolTempPrincipleArray);
        poolInterestRate.push(poolSingle["interestRates"]);
        poolInterest.push(poolSingle["interests"]);
        poolLoan.push(poolTempLoanArray);
        
        treasuryGraphDataStep1Obj[poolTokenSymbol] = i;
        treasuryGraphDataStep2Obj[poolTokenSymbol] = i+1;
        treasuryGraphDataStep3Obj[poolTokenSymbol] = i+2;
        treasuryGraphDataStep4Obj[poolTokenSymbol] = i+3;
        treasuryGraphDataFinalObj[poolTokenSymbol] = poolTempSpecificTreasuryBalance;
        
      }
      
      
      treasuryGraphData.push(treasuryGraphDataStep1Obj);
      treasuryGraphData.push(treasuryGraphDataStep2Obj);
      treasuryGraphData.push(treasuryGraphDataStep3Obj);
      treasuryGraphData.push(treasuryGraphDataStep4Obj);
      treasuryGraphData.push(treasuryGraphDataFinalObj);
      console.log("treasuryGraphData", treasuryGraphData);
      console.log("treasuryGraphDataFinalObj", treasuryGraphDataFinalObj);
      
      highestEarn = highestEarn/100;
      
      console.log("totalTVL", totalTVL);
      console.log("poolInterestRate", poolInterestRate);
      console.log("poolInterest", poolInterest);
      console.log("poolLoan", poolLoan);
      console.log("poolPrinciple", poolPrinciple);
      
      let poolMap = yield call(contract.methods.poolMap("0x74A648D5fb22df35a8bfc500940399d80df468e0").call);
      console.log("poolMap", poolMap)
      
      let getPoolInfo = yield call(contract.methods.getPoolInfo("0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49").call);
      console.log("getPoolInfo", getPoolInfo)
      
      let adapterArray = [];
      let adapterBaseTokens = [];
      let adapterBaseTokensSelect = [];
      let adapterBaseTokensPairSuite = [];
      
      for(let i = 0; i < 100; i++){
        try{
          let adapters = yield call(contract.methods.adapters(i).call);
          console.log("adapters", adapters)
          
          let abiAdapterCompound = JSON.parse(compoundAdapter_abi, 'utf-8');
          let contractAdapterCompound;
          
          let adapterMap = yield call(contract.methods.adapterMap(adapters).call);
          console.log("adapterMap", adapterMap)
          
          
          let baseTokens = [];
          let baseTokensSelect = [];
          let baseTokensWithSymbol = [];
          
          let tokenPairs = [];
          let baseTokenPairs = [];
          
          let selectedAdapter;
          
          if(adapters == "xxx"){
            contractAdapterCompound = new web3.eth.Contract(abiAdapterCompound, adapters)
            selectedAdapter = contractAdapterCompound;
          }else{
            contractAdapterCompound = new web3.eth.Contract(abiAdapterCompound, adapters)
            selectedAdapter = contractAdapterCompound;
          }
          console.log("contractAdapterCompound", contractAdapterCompound)
          console.log("selectedAdapter", selectedAdapter)
          
          if(adapterMap){
          
            let totalLoan = yield call(selectedAdapter.methods.totalLoan("0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49").call);
            console.log("totalLoan", totalLoan)
            
            for(let x = 0; x < 100; x++){
              try{
                let bt = yield call(selectedAdapter.methods.baseTokens(x).call);
                let btM = yield call(selectedAdapter.methods.baseTokenMap(bt).call);
                
                if(btM){
                  baseTokens.push(bt);
                }
              }catch{
                break;
              }
            }
            
            console.log("baseTokens", baseTokens);
            
            for(let d = 0; d < baseTokens.length; d++){
              let tP = yield call(selectedAdapter.methods.tokenPairs(baseTokens[d]).call);
              console.log("tP", tP);
              
              tokenPairs.push(tP);
              baseTokenPairs.push([baseTokens[d], tP])
            }
            
            console.log("tokenPairs", tokenPairs);
            console.log("baseTokenPairs", baseTokenPairs);
            
            
            
            for(let x = 0; x < baseTokens.length; x++){
              let baseTokenSingleArray = [];
              let baseTokenSingleSelectArray = [];
              
              let sym;
              let bt = baseTokens[x];
              console.log("bt", bt)
              console.log("poolTokenAddress", poolTokenAddress)
              console.log("poolSymbol", poolSymbol)
              
              for(let z = 0; z < poolTokenAddress.length; z++){
                if(poolTokenAddress[z] == bt){
                  // match
                  baseTokenSingleArray.push([poolSymbol[z][0], bt])
                  baseTokenSingleSelectArray.push(poolSymbol[z][0])
                  
                  break;
                }
              }
              console.log("baseTokenSingleArray", baseTokenSingleArray)
              
              baseTokensSelect.push(baseTokenSingleSelectArray)
              baseTokensWithSymbol.push(baseTokenSingleArray);
              
            }
            
            adapterArray.push(adapters);
            adapterBaseTokens.push(baseTokensWithSymbol)
            adapterBaseTokensSelect.push(baseTokensSelect)
            
            adapterBaseTokensPairSuite.push([adapters, baseTokenPairs, baseTokensSelect])
            
          }
        }catch{
          break;
        }
      }
      
      console.log("adapterArray", adapterArray)
      console.log("adapterBaseTokens", adapterBaseTokens)
      console.log("adapterBaseTokensSelect", adapterBaseTokensSelect)
      console.log("adapterBaseTokensPairSuite", adapterBaseTokensPairSuite)
      
      
      
      
      
      // let poolsTest = yield call(contractTest.methods.pools(0).call);
      // console.log("poolsTest", poolsTest)
      // 
      // let poolMapTest = yield call(contract.methods.poolMap("0x74A648D5fb22df35a8bfc500940399d80df468e0").call);
      // console.log("poolMapTest", poolMapTest)
      
      // to get all stakes given the lender
      // getStakeIds(address lender)
      
      // you can use this to get info of each stake
      // mapping(address => uint[]) lenderStakeMap; 
      
      // to get all stakes a lender has in a pool
      // mapping(address => mapping (address => Stake[3])) public stakeMap;
      // stakeMap[pool][lender] returns a array of stakes for each tranche of the pool
      
      // let pools = yield call(contract.methods.pools(0).call);
      // console.log("pools", pools)
      // 
      // 
      // let poolMap = yield call(contract.methods.poolMap().call);
      // console.log("poolMap", poolMap)
      
      let getStakeIds = yield call(contract.methods.getStakeIds(addressUser).call);
      console.log("getStakeIds", getStakeIds)
      
      let currPositionId = yield call(contract.methods.CURR_POSITION_ID().call);
      console.log("currPositionId", currPositionId)
      
      let positionCounter = yield call(contract.methods.POSITION_COUNTER().call);
      console.log("positionCounter", positionCounter)
      
      
      let positionMap = yield call(contract.methods.positionMap(positionCounter).call);
      console.log("positionMap", positionMap)
      
      let positionMap2 = yield call(contract.methods.positionMap("0xD6D670fe8E90fAd4180128BCF4383db4e4079b00").call);
      console.log("positionMap2", positionMap2)
      
      let positionMap3 = yield call(contract.methods.positionMap("0x2fB298BDbeF468638AD6653FF8376575ea41e768").call);
      console.log("positionMap3", positionMap3)
      
      let positionMap4 = yield call(contract.methods.positionMap("0x542f8a5E1cD31CB4CE0fE08474861e33B490E39b").call);
      console.log("positionMap4", positionMap4)
      
      
      // let borrowerPositionMap = yield call(contract.methods.borrowerPositionMap(addressUser).call);
      // console.log("borrowerPositionMap", borrowerPositionMap)
      
      
      // let stakeMap = yield call(contract.methods.stakeMap(nutmegErc20Address, addressUser, 0).call);
      // console.log("stakeMap", stakeMap)
      
      // let lenderStakeMap = yield call(contract.methods.lenderStakeMap(0).call);
      // console.log("lenderStakeMap", lenderStakeMap)
      
      let governorNut = yield call(contractNut.methods.governor().call);
      console.log("governorNut", governorNut)
      
      let distributorNut = yield call(contractNut.methods.distributor().call);
      console.log("distributorNut", distributorNut)
      
      let totalSupplyNut = yield call(contractNut.methods.totalSupply().call);
      console.log("totalSupplyNut", totalSupplyNut)
      
      let decimalNut = yield call(contractNut.methods.decimals().call);
      console.log("decimalNut", decimalNut)
      
      let balanceOfNut = yield call(contractNut.methods.balanceOf(addressUser).call);
      console.log("balanceOfNut", balanceOfNut)
      
      // let blockHeight = yield call(getBlockHeight, "ropsten");
      let blockHeight = yield call(getBlockHeight, "rinkeby");
      console.log("blockHeight", blockHeight)
      
      // let d_DIST_START_BLOCK = yield call(contractNutDistributor.methods.DIST_START_BLOCK().call);
      // console.log("d_DIST_START_BLOCK", d_DIST_START_BLOCK)
      
      
      // let d_totalNutMap = yield call(contractNutDistributor.methods.totalNutMap("0x35b9f43f9ec7aef35bff4f3330ef74df95ee9364", 0).call);
      // console.log("d_totalNutMap", d_totalNutMap)
      
      let d_NUM_EPOCH = yield call(contractNutDistributor.methods.NUM_EPOCH().call);
      console.log("d_NUM_EPOCH", d_NUM_EPOCH)
      
      let distributionEpoch = 0;
      
      for(let i = 0; i < d_NUM_EPOCH; i++){
        let epochCheck = yield call(contractNutDistributor.methods.echoMap(i).call);
        console.log("epochCheck", epochCheck["endBlock"])
        if(blockHeight < epochCheck["endBlock"]){
          distributionEpoch = i
          
          break;
        }
      }
      
      let d_echoMap = yield call(contractNutDistributor.methods.echoMap(distributionEpoch).call);
      console.log("d_echoMap", d_echoMap)
      
      let distributionAmount = d_echoMap["amount"] / (Math.pow(10, decimalNut))
      
      
      yield put(getPoolName(poolName));
      yield put(getPoolSymbol(poolSymbol));
      // yield put(getPoolInterestRate(poolInterestRate));
      yield put(getPoolPrincipal(poolPrinciple));
      yield put(getPoolInterestRate(poolInterestRate));
      yield put(getTotalTVL(totalTVL));
      yield put(getTreasuryBalance(treasuryBalance));
      yield put(getDashboardInfo(highestEarn));
      
      
      yield put(getTokenDistributionInfoSuccess([distributionEpoch, distributionAmount, blockHeight]));
      
      
      // yield put(getPoolsData([getPools, totalTVL, poolInterestRate, poolInterest, poolLoan]));
      yield put(getPoolAddress(getPools, poolTokenAddress));
      yield put(getAdapters(adapterArray, adapterBaseTokens, adapterBaseTokensSelect, adapterBaseTokensPairSuite));
      
      yield put(getTvlGraph(tvlGraphData));
      yield put(getTreasuryGraph(treasuryGraphData));
      
      
      // console.log("open position")
      // 
      // let adapterAddress = adapterBaseTokensPairSuite[1][0]; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"
      // let baseToken = adapterBaseTokensPairSuite[1][1][0][0]; //"0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49";
      // let collateralToken = adapterBaseTokensPairSuite[1][1][0][1]; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"; //"0x542f8a5E1cD31CB4CE0fE08474861e33B490E39b"; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"
      // 
      // let collateralAmount = '100000000000000000';
      // let borrowAmount = '200000000000000000';
      // 
      // console.log("open position")
      // console.log("adapterAddress", adapterAddress)
      // console.log("baseToken", baseToken)
      // console.log("collateralToken", collateralToken)
      // 
      // let getMaxBorrowAmount = yield call(contract.methods.getMaxBorrowAmount(baseToken, collateralAmount).call);
      // console.log("getMaxBorrowAmount", getMaxBorrowAmount)
      // console.log("open position")
      // 
      // // adapterAddress = "0xf42eAe0DeC53625cbEf05FA6EddCec89eEaCcc41"; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"
      // // baseToken = "0xEe8502c48dB57115221bA5EdAe181C0425cf8043";
      // // collateralToken = "0x2fB298BDbeF468638AD6653FF8376575ea41e768"; //"0x542f8a5E1cD31CB4CE0fE08474861e33B490E39b"; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"
      // 
      // // address baseToken, address collToken, uint baseAmt, uint borrowAmt
      // console.log("stakeData", positionCounter, adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount)
      // const stakeData = contract.methods.openPosition(0, adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount).encodeABI();
      // console.log("stakeData", positionCounter, adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount)
      // 
      // // openPosition(0, '0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f', '0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49', '0xD6D670fe8E90fAd4180128BCF4383db4e4079b00', '100000000000000000', '200000000000000000');
      // 
      // console.log("stakeData", stakeData)
      // 
      // window.ethereum.enable();
      // 
      // const Tx = require ('ethereumjs-tx').Transaction;
      // 
      // console.log("ethereum", ethereum)
      // 
      // let txCount = yield call(web3.eth.getTransactionCount, addressUser);
      // console.log("txCount", txCount)
      // 
      // let gasMode = farmInfo["gasMode"];
      // 
      // let gas = yield call(getGasPrice, gasMode);
      // console.log("gas", gas)
      // 
      // 
      // addressUser = "0x8099E1f8B72Dd1881e4ac588722078408543CB2E";
      // 
      //   const txObjDeposit = {
      //       nonce:      web3.utils.toHex(txCount),
      //       to:         nutmegAddress,
      //       from:       addressUser,
      //       value:      web3.utils.toHex(web3.utils.toWei('0', 'ether')),
      //       gasLimit:   web3.utils.toHex(2100000),
      //       gasPrice:   web3.utils.toHex(web3.utils.toWei(gas, 'gwei')), //30
      //       data: stakeData
      //   };
      //   console.log("txObjDeposit", txObjDeposit)
      // 
      //   let txHash = ""
      //   txHash = yield call(sendTx, txObjDeposit);
      //   console.log("txHash", txHash)
      // 
      //   // yield put(blockchainTransactionLoading());
      //   // yield put(updateLoadingScreen(["Farming", txHash]));
      // 
      //   let txConfirmation = null;
      // 
      //   for(var i = 0; i < 50; i++){
      //     console.log("loop", i)
      // 
      //     yield delay(10000);
      //     txConfirmation = yield call(web3.eth.getTransactionReceipt, txHash);
      //     // let txConfirmation = yield call(web3.eth.getTransactionReceipt, "0xf71304de0fe0b850540968a0a1d046088eef9f28c99c042b947f28905b842101");
      //     console.log("txConfirmation", txConfirmation)
      // 
      //     if(txConfirmation !== null){
      //       yield put(blockchainTransactionLoaded());
      // 
      //       break;
      //     }
      //   }
      // 
      // 
      //   // console.log("ethResponse", ethResponse);
      //   console.log("txHash", txHash);
    
        // yield put(updateLoadingScreen(["Depositing Funds", txHash]));
    
      
      // distributionToken: 0,
      // distributionEpoch: 0,
      // blockHeight: 0,
      
      yield put(loaded());
    }else{
      console.log("invalidNetwork");
      yield put(invalidNetwork());
      
      yield put(loaded());
    }
  }else{
    console.log("initial loaded");
  }
}

export function* _farm(data) {
  console.log("_farm");
  yield put(loading());
  
  let farmInfo = yield select(makeSelectEarnPage());
  let farmActualInfo = yield select(makeSelectFarmPage());
  
  web3 = new Web3(ethereum);
  
  let addressUser = farmInfo["selectedAddress"];
  let assetType = farmInfo["asset"]; 
  let vaultBalance = farmInfo["vaultBalance"];
  
  let selectedAllowanceAsset = data["asset"];
  let selectedAllowanceAssetNum = data["assetNum"];
  console.log("data", data);
  console.log("selectedAllowanceAsset", selectedAllowanceAsset);
  console.log("selectedAllowanceAssetNum", selectedAllowanceAssetNum);
  
  let borrowAmount = farmInfo["borrowAmount"];
  let collateralAmount = farmInfo["collateralAmount"];
  
  let adapters = farmInfo["adapters"];
  let adapterSelected = farmInfo["adapterSelected"];
  // need a selected adapter var
  
  console.log("adapters", adapters)
  console.log("adapterSelected", adapterSelected)
  
  let selectedAdapterAddress = adapters[adapterSelected];
  
  let poolTokenAddress = farmInfo["poolTokenAddress"];
  console.log("poolTokenAddress", poolTokenAddress)
  
  // currently only have adapter address
  // need to wait for adapter oublic var upgrade
  // put base token and collateral token info into adapter array
  // retrieve from adapter;
  let baseToken = poolTokenAddress[farmActualInfo["assetNumSelectedForBorrow"]];
  let collateralToken = poolTokenAddress[farmActualInfo["assetNumSelectedForCollateral"]];
  console.log("baseToken", baseToken)
  console.log("collateralToken", collateralToken)
  
  let abiToken = "";
  let abiAdapter = "";
  let tokenAddress = "";
  let adapterAddress = "";
  let decimalBorrow = "";
  let decimalCollateral = "";
  let assetNum = 0;
  
  const BN = web3.utils.BN;
  
  try{
  
    for(var i = 0; i < vaultBalance.length; i++){
      console.log("i", i)
      console.log("assetType[i]", assetType)
  
      if(vaultBalance[i][1] !== ""){
        abiToken = mainnet_token_usdt; 
        
  
        tokenAddress = assetType[selectedAllowanceAssetNum][1];
        adapterAddress = vaultBalance[selectedAllowanceAssetNum][1];
        decimalBorrow = 18; //vaultBalance[selectedAllowanceAssetNum][2];
        decimalCollateral = 18; //vaultBalance[selectedAllowanceAssetNum][2];
        assetNum = selectedAllowanceAssetNum;
  
        console.log("selectedAllowanceAsset", selectedAllowanceAsset)
        console.log("tokenAddress", tokenAddress)
  
        break;
      }
    }
  
  
    let abiArrayToken = JSON.parse(abiToken, 'utf-8');
    console.log("abiArrayToken", abiArrayToken)
  
  
    let contractToken = new web3.eth.Contract(abiArrayToken, tokenAddress)
    console.log("contractToken", contractToken)
    
    
    let abiArrayNutmeg = JSON.parse(nutmeg_abi, 'utf-8');
    console.log("abiArrayNutmeg", abiArrayNutmeg)
    
    
    
    
    let nutmegAddress = farmInfo["addressNutmeg"]; 
    let nutmegTestAddress = farmInfo["addressTestNutmeg"];
    let selectedErc20Address = farmInfo["asset"][selectedAllowanceAssetNum][1];
    
    let contract = new web3.eth.Contract(abiArrayNutmeg, nutmegAddress)
    console.log("contract", contract)
    
    // let abiAdapter = JSON.parse(compoundAdapter_abi, 'utf-8');
    // let contractAdapter = new web3.eth.Contract(abiAdapter, selectedAdapterAddress)
    // console.log("contractAdapter", contractAdapter)
    
    
    adapterAddress = selectedAdapterAddress;
  
    
    
    borrowAmount = (borrowAmount * Math.pow(10, decimalBorrow));
    collateralAmount = (collateralAmount * Math.pow(10, decimalCollateral));
    
    borrowAmount = 1; //new BigNumber(borrowAmount)
    collateralAmount = 1; //new BigNumber(collateralAmount)
  
    console.log("borrowAmount", borrowAmount)
    console.log("collateralAmount", collateralAmount)
    
    
    let getMaxBorrowAmount = yield call(contract.methods.getMaxBorrowAmount(baseToken, collateralAmount).call);
    console.log("getMaxBorrowAmount", getMaxBorrowAmount)
    
    // adapterAddress = "0xf42eAe0DeC53625cbEf05FA6EddCec89eEaCcc41"; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"
    // baseToken = "0xEe8502c48dB57115221bA5EdAe181C0425cf8043";
    // collateralToken = "0x2fB298BDbeF468638AD6653FF8376575ea41e768"; //"0x542f8a5E1cD31CB4CE0fE08474861e33B490E39b"; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"
    
    adapterAddress = farmInfo["adapterAddressSelected"]; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"; //"0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f"
    baseToken = farmActualInfo["addressSelectedForBorrow"]; //"0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49";
    collateralToken = farmActualInfo["addressExternalCollateral"]; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"; //"0x542f8a5E1cD31CB4CE0fE08474861e33B490E39b"; //"0xD6D670fe8E90fAd4180128BCF4383db4e4079b00"
    
    collateralAmount = farmActualInfo["collateralProvidedAmount"]; //'100000000000000000';
    borrowAmount = farmActualInfo["borrowAmount"]; //'200000000000000000';
    
    console.log("stakeData", adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount)
    
    let abi_erc = mainnet_token_usdt;
    
    let abiArrayERC = JSON.parse(abi_erc, 'utf-8');
    console.log("abiArrayERC", abiArrayERC)
    
    let contractBaseToken = new web3.eth.Contract(abiArrayERC, baseToken)
    let contractCollateralToken = new web3.eth.Contract(abiArrayERC, collateralToken)
    
    let assetBaseTokenDecimal= yield call(contractBaseToken.methods.decimals().call);
    let assetCollateralTokenDecimal= yield call(contractCollateralToken.methods.decimals().call);
    
    const BN = web3.utils.BN;
    
    let amtSuffixBaseToken = new BN(10).pow(new BN(assetBaseTokenDecimal));
    let amtSuffixCollateralToken = new BN(10).pow(new BN(assetCollateralTokenDecimal));
    
    borrowAmount = borrowAmount * amtSuffixBaseToken;
    collateralAmount = collateralAmount * amtSuffixCollateralToken;
    // let tokenAmt = (withdrawAmount * Math.pow(10, decimal));
    
    console.log("collateralAmount", collateralAmount)
    
    console.log("stakeData", adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount)
    
    // address baseToken, address collToken, uint baseAmt, uint borrowAmt
    const stakeData = contract.methods.openPosition(0, adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount).encodeABI();
    console.log("stakeData", adapterAddress, baseToken, collateralToken, collateralAmount, borrowAmount)
    
    // openPosition(0, '0x346efb0F7C8fcB9F0e896Bcf5bf20AF3f3bd8E6f', '0xf373d2eADAb2522CFA0912aD7f61D9c8adf1Ab49', '0xD6D670fe8E90fAd4180128BCF4383db4e4079b00', '100000000000000000', '200000000000000000');
    
    console.log("stakeData", stakeData)
  
    window.ethereum.enable();
  
    const Tx = require ('ethereumjs-tx').Transaction;
  
    console.log("ethereum", ethereum)
  
    let txCount = yield call(web3.eth.getTransactionCount, addressUser);
    console.log("txCount", txCount)
  
    let gasMode = farmInfo["gasMode"];
  
    let gas = yield call(getGasPrice, gasMode);
    console.log("gas", gas)
  
    if (txCount >= 0) {
      const txObjDeposit = {
          nonce:      web3.utils.toHex(txCount),
          to:         nutmegAddress,
          from:       addressUser,
          value:      web3.utils.toHex(web3.utils.toWei('0', 'ether')),
          gasLimit:   web3.utils.toHex(2100000),
          gasPrice:   web3.utils.toHex(web3.utils.toWei(gas, 'gwei')), //30
          data: stakeData
      };
      console.log("txObjDeposit", txObjDeposit)
  
      let txHash = ""
      txHash = yield call(sendTx, txObjDeposit);
      console.log("txHash", txHash)
      
      yield put(blockchainTransactionLoading());
      yield put(updateLoadingScreen(["Farming", txHash]));
      
      let txConfirmation = null;
      
      for(var i = 0; i < 50; i++){
        console.log("loop", i)
        
        yield delay(10000);
        txConfirmation = yield call(web3.eth.getTransactionReceipt, txHash);
        // let txConfirmation = yield call(web3.eth.getTransactionReceipt, "0xf71304de0fe0b850540968a0a1d046088eef9f28c99c042b947f28905b842101");
        console.log("txConfirmation", txConfirmation)
        
        if(txConfirmation !== null){
          yield put(blockchainTransactionLoaded());
        
          break;
        }
      }
      
      
      // console.log("ethResponse", ethResponse);
      console.log("txHash", txHash);
  
      // yield put(updateLoadingScreen(["Depositing Funds", txHash]));
  
      yield delay(100000);
      yield put(farmSuccess(assetNum, depositAmount, txHash, "selectedTrancheValue"));
      yield put(updateLoadingScreen(["", ""]));
  
      yield put(loaded());
  
    }else{
      console.log('Failed in getting tx count');
  
      yield put(loaded());
    }
  
  }catch(err){
    console.error(err.message)
    yield put(farmError());
    yield put(loaded());
  }
  
  // Nutmeg.execute(0 or pos, adapter.address, openPosition.contract.method(token, ctoken, collateral, borrow))
  // openPosition
}

export function* _redeem(data) {
  console.log("_redeem");
  yield put(loading());
  
  // TestNutmeg.closePosition(positionId, adapter)
  
  yield put(redeemSuccess());
  yield put(loaded());
}

export function* _unstake(data) {
  console.log("_unstake");
  yield put(loading());
  
  yield put(unstakeSuccess());
  yield put(loaded());
  
}

export function* _changeAsset(data) {
  let earnInfo = yield select(makeSelectEarnPage());
  
  // console.log("data", data);
  // console.log("earnInfo", earnInfo);
  console.log("earnInfo", earnInfo["poolSymbol"]);
  console.log("earnInfo", earnInfo["poolSymbol"][data["assetNum"]]);
  let asset = earnInfo["poolSymbol"][data["assetNum"]][0]; 
  let assetNum = data["assetNum"];
  console.log("data", asset, assetNum);
  
  yield put(changeAssetSuccess(asset, assetNum));
}


function sendTx(txObj){
  return new Promise((resolve, reject) => {
    ethereum.send({
      method: 'eth_sendTransaction',
      params: [txObj], //[txObjApprove], //[txObjDeposit]
    }, (error, response) => {
      if (error) {
        console.error(error)
        return reject(error);
        // getAccountsResults.innerHTML = `Error: ${error}`
      } else {
        console.log(response)
        console.log(response.result) // tx hash
        // console.log(response.result[0])
        
        return resolve(response.result);
      }
    })
    
  });
}

function shortenAddress(addr){
  let addressStart = addr.substr(0, 5);
  let addressEnd = addr.substr(addr.length - 5, 5);

  let address = addressStart + "..." + addressEnd;
  console.log("addressShorten", address);

  return address
}