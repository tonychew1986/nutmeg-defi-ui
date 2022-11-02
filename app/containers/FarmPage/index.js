/**
 *
 * FarmPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import {makeSelectFarmPage} from './selectors';
import {makeSelectEarnPage} from '../EarnPage/selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import {
  changeFarmAsset,
  changeFarmCollateralAsset,
  changeFarmBorrowAsset,
  changeCollateralAmount,
  changeBorrowAmount,
  updateInputValue,
} from './actions';

import {
  farm,
  // farmApprove,
  addAllowance,
  selectFarmPool,
  changeAsset,
} from '../EarnPage/actions';


import Select from 'react-select';
import CreatableSelect from 'react-select/creatable';

import FarmTokenListHeader from '../../components/FarmTokenListHeader';
import FarmTokenList from '../../components/FarmTokenList';
import AssetInput from '../../components/AssetInput';


import Style from './Style';

export function FarmPage({
  onChangeFarmAsset,
  farmPage,
  earnPage,
  onFarm,
  onAddAllowance,
  onSelectFarmPool,
  onChangeBorrowAmount,
  onChangeCollateralAmount,
  onUpdateInputValue,
  onChangeAsset,
  onChangeFarmCollateralAsset,
  onChangeFarmBorrowAsset,
}) {
  useInjectReducer({ key: 'farmPage', reducer });
  useInjectSaga({ key: 'farmPage', saga });
  
  // let trancheBalance = earnPage.trancheTotalBalance[earnPage.assetNumSelected][1][trancheValue];
  // let availableDepositBalance = earnPage.asset[earnPage.assetNumSelected][3];
  // let availableWithdrawBalance = earnPage.trancheWithdrawalBalance[earnPage.assetNumSelected][1][trancheValue];
  // let userBalance = earnPage.trancheUserBalance[earnPage.assetNumSelected][1][trancheValue];
  
  let availableBorrowBalance = earnPage.asset[earnPage.assetNumSelected][3];
  let availableCollateralBalance = earnPage.asset[earnPage.assetNumSelected][3];
  let selectedAllowance = earnPage.allowance[earnPage.assetNumSelected][1];
  

  return (
    <Style>
      <div className={(earnPage.poolInterestRate.length > 0) ? "hide" : "poolMissing"}>
        There are no available pools. Come back later.
      </div>
      <div className={(earnPage.poolInterestRate.length > 0) ? "" : "hide"}>
        <div className="trancheDesc">
          <div className="content">
            <div className="titleSuper">
              Farm
            </div>
            <div className="desc">
              Farm on leverage on selected farms to earn additional yields. Deposit & start farming.
            </div>
          </div>
          <div className="content">
            <div className="selectAsset">
              <AssetInput assetArray={earnPage.poolSymbol} onChangeAsset={onChangeFarmAsset} type="multi" />
            </div>
          </div>
        </div>
        <div className="farmLists">
          <div className="content">
            <FarmTokenListHeader />
            <FarmTokenList selectedAddress={earnPage.selectedAddress} selectedPool={earnPage.selectedPool} allowance={earnPage.allowance} poolInfo={earnPage.poolInfo} assetSelected={farmPage.assetSelected} assetNum={earnPage.assetNumSelected} onFarm={onFarm} onAddAllowance={onAddAllowance} onSelectFarmPool={onSelectFarmPool} borrowAmount={farmPage.borrowAmount} onChangeBorrowAmount={onChangeBorrowAmount} availableBorrowBalance={availableBorrowBalance} collateralAmount={farmPage.collateralAmount} onChangeCollateralAmount={onChangeCollateralAmount} availableCollateralBalance={availableCollateralBalance} onUpdateInputValue={onUpdateInputValue} poolSymbol={earnPage.poolSymbol} onChangeAsset={onChangeAsset} adapterArray={earnPage.adapters} selectedAllowance={selectedAllowance} onChangeFarmCollateralAsset={onChangeFarmCollateralAsset} onChangeFarmBorrowAsset={onChangeFarmBorrowAsset} assetSelectedForCollateral={farmPage.assetSelectedForCollateral} assetNumSelectedForCollateral={farmPage.assetNumSelectedForCollateral} adapterBaseTokens={earnPage.adapterBaseTokens} adapterBaseTokensSelect={earnPage.adapterBaseTokensSelect} assetSymbolSelected={farmPage.assetSymbolSelected} adapterBaseTokensPairSuite={earnPage.adapterBaseTokensPairSuite} maxBorrow={farmPage.maxBorrow} collateralProvidedAmount={farmPage.collateralProvidedAmount} maxBorrowBasedOnCollateral={farmPage.maxBorrowBasedOnCollateral} assetSelectedForBorrow={farmPage.assetSelectedForBorrow} addressSelectedForBorrow={farmPage.addressSelectedForBorrow} addressAdapter={earnPage.adapterAddressSelected} addressExternalCollateral={farmPage.addressExternalCollateral} />
          </div>
        </div>
        <div className="clear"></div>
      </div>
    </Style>
  );
}

//poolInfo

FarmPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  farmPage: makeSelectFarmPage(),
  earnPage: makeSelectEarnPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onChangeFarmAsset: evt => dispatch(changeFarmAsset(evt.value)),
    onChangeFarmCollateralAsset: evt => dispatch(changeFarmCollateralAsset(evt.value)),
    onChangeFarmBorrowAsset: evt => dispatch(changeFarmBorrowAsset(evt)),
    
    onChangeBorrowAmount: evt => dispatch(changeBorrowAmount(evt.target.value)),
    onChangeCollateralAmount: evt => dispatch(changeCollateralAmount(evt.target.value)),
    
    onChangeAsset: evt => dispatch(changeAsset(evt.value)),
    onFarm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(farm(evt));
    },
    onAddAllowance: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      console.log(evt)
      // dispatch(addAllowance(evt));
      // dispatch(farmApprove(evt));
    },
    onSelectFarmPool: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(selectFarmPool(evt));
    },
    onUpdateInputValue: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(updateInputValue(evt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(FarmPage);
