import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the portfolioPage state domain
 */

const selectPortfolioPageDomain = state => state.portfolioPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by PortfolioPage
 */

const makeSelectPortfolioPage = () =>
  createSelector(
    selectPortfolioPageDomain,
    substate => substate,
  );

export default makeSelectPortfolioPage;
export { selectPortfolioPageDomain };
