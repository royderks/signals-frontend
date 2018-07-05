import { createSelector } from 'reselect';

/**
 * Direct selector to the overviewPage state domain
 */
const selectOverviewPageDomain = (state) => state.get('overviewPage');

/**
 * Other specific selectors
 */


/**
 * Default selector used by OverviewPage
 */

const makeSelectOverviewPage = () => createSelector(
  selectOverviewPageDomain,
  (substate) => substate.toJS()
);

const makeSelectFilterParams = () => createSelector(
  selectOverviewPageDomain,
  (substate) => {
    const state = substate.toJS();
    // console.log('overview', state);
    return { ...state.filter, page: state.page };
  }
);

export default makeSelectOverviewPage;
export {
  selectOverviewPageDomain,
  makeSelectFilterParams
};
