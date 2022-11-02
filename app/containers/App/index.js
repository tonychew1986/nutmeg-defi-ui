/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 */

import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';

// import reducer from './reducer';
// import saga from './saga';
import reducerWallet from '../EarnPage/reducer';
import sagaWallet from '../EarnPage/saga';

import { Switch, Route } from 'react-router-dom';
import { HashRouter as Router } from 'react-router-dom';


import HomePage from 'containers/HomePage/Loadable';
import DashboardPage from 'containers/DashboardPage/Loadable';
import EarnPage from 'containers/EarnPage/Loadable';
import FarmPage from 'containers/FarmPage/Loadable';
import FaqPage from 'containers/FaqPage/Loadable';
import PortfolioPage from 'containers/PortfolioPage/Loadable';
import CommunityPage from 'containers/CommunityPage/Loadable';
import ComingSoonPage from 'containers/ComingSoonPage/Loadable';

import NotFoundPage from 'containers/NotFoundPage/Loadable';

import Navigation from '../../components/Navigation';
import NavigationSide from '../../components/NavigationSide';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import TransactionWait from '../../components/TransactionWait';
import InvalidNetworkScreen from '../../components/InvalidNetworkScreen';

import Popup from "reactjs-popup";
import 'reactjs-popup/dist/index.css';

import GlobalStyle from '../../global-styles';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
  connectMetamask,
  selectPage,
  toggleGas,
  updateTVL,
} from '../EarnPage/actions';

import {
  makeSelectEarnPage
} from '../EarnPage/selectors';

// export default function App() {
export function App({
  onConnectMetamask,
  onSelectPage,
  onToggleGas,
  earnPage,
  onUpdateTVL,
}) {
  
  // useInjectReducer({ key: 'app', reducer });
  // useInjectSaga({ key: 'app', saga });
  useInjectReducer({ key: 'earnPage', reducer: reducerWallet });
  useInjectSaga({ key: 'earnPage', saga: sagaWallet });

  useEffect(() => {
    if(earnPage.initialLoaded == false){
      onUpdateTVL();
    }
  })
  
  return (
    <Router>
      <LoadingScreen loading={earnPage.loading} />
      
      <TransactionWait txHash={earnPage.blockchainTransactionHash} txAction={earnPage.blockchainTransactionAction} />
      
      <Navigation currentPage={earnPage.currentPage} address={earnPage.selectedAddress} network={earnPage.network} addressShorten={earnPage.selectedAddressShorten} onConnectMetamask={onConnectMetamask} onSelectPage={onSelectPage} balanceNUT={earnPage.balanceNUT} />
      
      <NavigationSide currentPage={earnPage.currentPage} onSelectPage={onSelectPage} />
      
      <div className={(earnPage.networkValid == false) ? "" : "hide"}>
        <InvalidNetworkScreen />
      </div>
      
      <div className={(earnPage.network == "mainnet") ? "page pagePadTop" : "page"}>
        <Switch>
          <Route exact path="/" component={DashboardPage} />
          <Route exact path="/earn" component={EarnPage} />
          <Route exact path="/farm" component={FarmPage} />
          
          <Route exact path="/portfolio" component={PortfolioPage} />
          <Route exact path="/faq" component={FaqPage} />
          <Route exact path="/community" component={CommunityPage} />
          
          
          <Route component={NotFoundPage} />
        </Switch>
      </div>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange
        draggable
        pauseOnHover
      />
      <Footer />
      <GlobalStyle />
    </Router>
  );
}


App.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  earnPage: makeSelectEarnPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
    onConnectMetamask: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(connectMetamask(evt));
    },
    onSelectPage: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(selectPage(evt));
    },
    onToggleGas: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(toggleGas(evt));
    },
    onUpdateTVL: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(updateTVL(evt));
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(App);
