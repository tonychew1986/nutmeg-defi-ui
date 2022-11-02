import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the farmPage state domain
 */

const selectFarmPageDomain = state => state.farmPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by FarmPage
 */

const makeSelectFarmPage = () =>
  createSelector(
    selectFarmPageDomain,
    substate => substate,
  );

// export default makeSelectFarmPage;
export { 
  selectFarmPageDomain,
  makeSelectFarmPage 
};