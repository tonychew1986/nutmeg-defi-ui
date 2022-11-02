/**
 *
 * Asynchronously loads the component for PortfolioPage
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
