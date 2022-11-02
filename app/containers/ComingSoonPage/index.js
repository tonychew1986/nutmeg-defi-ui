/**
 *
 * ComingSoonPage
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
import makeSelectComingSoonPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';

import Style from './Style';

export function ComingSoonPage() {
  useInjectReducer({ key: 'comingSoonPage', reducer });
  useInjectSaga({ key: 'comingSoonPage', saga });

  return (
    <Style>
      This feature will be available soon. Stay tuned for updates.
    </Style>
  );
}

ComingSoonPage.propTypes = {
  dispatch: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  comingSoonPage: makeSelectComingSoonPage(),
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

export default compose(withConnect)(ComingSoonPage);
