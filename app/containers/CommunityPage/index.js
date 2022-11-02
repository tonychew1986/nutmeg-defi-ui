/**
 *
 * CommunityPage
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
import makeSelectCommunityPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Style from './Style';

import CommunityPanel from '../../components/CommunityPanel';

export function CommunityPage() {
  useInjectReducer({ key: 'communityPage', reducer });
  useInjectSaga({ key: 'communityPage', saga });

  return (
    <Style>
      <div>
        <CommunityPanel source="Telegram" desc="Join the community discussion on Telegram" link="https://t.me/nutmeg" />
        
        <CommunityPanel source="Discord" desc="Chat with the Saffron community on Discord" link="https://discord.gg/" />
        
        <CommunityPanel source="GitHub" desc="View the code on GitHub" link="github.com/" />
      </div>
      <div className="clear"></div>
      <div>
        <CommunityPanel source="Twitter" desc="Follow Nutmeg on Twitter " link="https://twitter.com/nutmeg" />
        
        <CommunityPanel source="Medium" desc="Read more about Nutmeg on Medium" link="https://medium.com/nutmeg" />
        
        <CommunityPanel source="DeFi Pulse" desc="Check out our DeFi Pulse listing" link="https://defipulse.com/defi-list" />
      </div>
      <div className="clear"></div>
      <div>
        <CommunityPanel source="Dharma" desc="Buy NUT with USD" link="https://www.dharma.io" />
        
        <CommunityPanel source="Uniswap" desc="Swap NUT for ETH" link="https://app.uniswap.org" />
        
        <CommunityPanel source="Sushiswap" desc="Swap NUT for ETH" link="https://exchange.sushiswapclassic.org" />
      </div>
      <div className="clear"></div>
    </Style>
  );
}

CommunityPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  communityPage: makeSelectCommunityPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(withConnect)(CommunityPage);
