import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectLoading, makeSelectError } from 'containers/App/selectors';
import makeSelectOverviewPage from './selectors';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import './style.scss';

import { requestIncidents, selectIncident, filterIncidents } from './actions';
import FilterComponent from './components/FilterComponent';
import ListComponent from './components/ListComponent';


export class OverviewPage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);
    this.onFilterIncidents = this.onFilterIncidents.bind(this);
    this.requestIncidents = this.props.requestIncidents.bind(this);
    this.filterIncidents = this.props.filterIncidents.bind(this);
    this.selectIncident = this.props.selectIncident.bind(this);
  }

  componentWillMount() {
    this.props.requestIncidents();
  }

  onFilterIncidents(filter) {
    this.filterIncidents(filter);
    this.props.requestIncidents();
  }

  render() {
    const { incidents, selectedIncident, filter } = this.props.overviewpage;
    const { loading } = this.props;
    return (
      <div className="overview-page container">

        <FormattedMessage {...messages.header} /> - loading: {loading.toString()}
        <div>
          <FilterComponent filterIncidents={this.onFilterIncidents} />
          <ListComponent selectIncident={this.selectIncident} incidents={incidents} />
        </div>
        <br />Selected incident:
        <br />{JSON.stringify(selectedIncident)}
        <hr />
        <br /><input type="button" onClick={this.requestIncidents} value="Refresh" />
        <hr />
        <br />{JSON.stringify(filter)}
        <hr />

      </div>
    );
  }
}

OverviewPage.propTypes = {
  overviewpage: PropTypes.object.isRequired,
  loading: PropTypes.bool,
  // error: PropTypes.oneOfType([
  //   PropTypes.object,
  //   PropTypes.bool,
  // ]),

  requestIncidents: PropTypes.func.isRequired,
  selectIncident: PropTypes.func.isRequired,
  filterIncidents: PropTypes.func.isRequired
};

const mapStateToProps = createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  overviewpage: makeSelectOverviewPage(),
});

function mapDispatchToProps(dispatch) {
  return {
    requestIncidents: (filter) => dispatch(requestIncidents(filter)),
    selectIncident: (incident) => dispatch(selectIncident(incident)),
    filterIncidents: (incident) => dispatch(filterIncidents(incident)),
  };
}

const withConnect = connect(mapStateToProps, mapDispatchToProps);

const withReducer = injectReducer({ key: 'overviewPage', reducer });
const withSaga = injectSaga({ key: 'overviewPage', saga });

export default compose(
  withReducer,
  withSaga,
  withConnect,
)(OverviewPage);
