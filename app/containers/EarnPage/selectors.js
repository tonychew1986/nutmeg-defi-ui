import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the earnPage state domain
 */

const selectEarnPageDomain = state => state.earnPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by EarnPage
 */

const makeSelectEarnPage = () =>
  createSelector(
    selectEarnPageDomain,
    substate => substate,
  );

// export default makeSelectEarnPage;

export { 
  selectEarnPageDomain,
  makeSelectEarnPage
};