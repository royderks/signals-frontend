import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { bindActionCreators } from 'redux';
import isEqual from 'lodash.isequal';

import LoadingIndicator from 'shared/components/LoadingIndicator';
import { makeSelectLoading, makeSelectError, makeSelectCategories, makeSelectAccessToken } from 'containers/App/selectors';
import { requestIncident, patchIncident, dismissSplitNotification, requestAttachments, requestDefaultTexts, dismissError } from 'models/incident/actions';
import { requestHistoryList } from 'models/history/actions';
import makeSelectIncidentModel from 'models/incident/selectors';
import makeSelectHistoryModel from 'models/history/selectors';

import './style.scss';

import DetailHeader from './components/DetailHeader';
import MetaList from './components/MetaList';
import History from './components/History';
import AddNote from './components/AddNote';
import LocationForm from './components/LocationForm';
import AttachmentViewer from './components/AttachmentViewer';
import StatusForm from './components/StatusForm';
// import MapDetail from './components/MapDetail';
import Detail from './components/Detail';
import SplitNotificationBar from './components/SplitNotificationBar';
import LocationPreview from './components/LocationPreview';

export class IncidentDetail extends React.Component { // eslint-disable-line react/prefer-stateless-function
  constructor(props) {
    super(props);

    this.state = {
      previewState: props.previewState, // showLocation, editLocation, editStatus, showImage
      attachment: props.attachment
    };

    this.onThor = this.onThor.bind(this);
    this.onDismissSplitNotification = this.onDismissSplitNotification.bind(this);
    this.onShowLocation = this.onShowLocation.bind(this);
    this.onEditLocation = this.onEditLocation.bind(this);
    this.onEditStatus = this.onEditStatus.bind(this);
    this.onShowAttachment = this.onShowAttachment.bind(this);
    this.onCloseAll = this.onCloseAll.bind(this);
  }


  componentDidMount() {
    this.props.onRequestIncident(this.props.id);
    this.props.onRequestHistoryList(this.props.id);
    this.props.onRequestAttachments(this.props.id);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.id !== this.props.id) {
      this.props.onRequestIncident(this.props.id);
    }

    if (this.props.incidentModel.incident) {
      const category = this.props.incidentModel.incident.category;
      if (!isEqual(prevProps.incidentModel.incident && prevProps.incidentModel.incident.category, this.props.incidentModel.incident.category)) {
        this.props.onRequestDefaultTexts({ main_slug: category.main_slug, sub_slug: category.sub_slug });
      }
    }
  }

  onThor() {
    const patch = {
      id: this.props.id,
      type: 'thor',
      patch: {
        status: {
          state: 'ready to send',
          text: 'Te verzenden naar THOR',
          target_api: 'sigmax'
        }
      }
    };

    this.props.onPatchIncident(patch);
  }

  onDismissSplitNotification() {
    this.props.onDismissSplitNotification();
  }

  onShowLocation() {
    this.setState({
      previewState: 'showLocation',
      attachment: '',
    });
  }

  onEditLocation() {
    this.setState({
      previewState: 'editLocation',
      attachment: ''
    });
  }

  onEditStatus() {
    this.setState({
      previewState: 'editStatus',
      attachment: ''
    });
  }

  onShowAttachment(attachment) {
    this.setState({
      previewState: 'showImage',
      attachment
    });
  }

  onCloseAll() {
    this.setState({
      previewState: '',
      attachment: ''
    });
  }

  render() {
    const { id, categories, accessToken, onPatchIncident, onDismissError } = this.props;
    const { list } = this.props.historyModel;
    const { incident, attachments, loading, patching, error, split, stadsdeelList, priorityList, changeStatusOptionList, statusList, defaultTexts } = this.props.incidentModel;
    const { previewState, attachment } = this.state;

    return (
      <div className="incident-detail">
        <SplitNotificationBar data={split} onClose={this.onDismissSplitNotification} />
        {loading ? <LoadingIndicator /> : (
          <div>
            {incident ?
              <DetailHeader
                incident={incident}
                baseUrl={this.props.baseUrl}
                accessToken={accessToken}
                onThor={this.onThor}
              /> : ''}

            {previewState ? (
              <div className="row">
                <div className="col-12 incident-detail__preview">
                  <button className="incident-detail__preview-close incident-detail__button--close" onClick={this.onCloseAll} />

                  {previewState === 'showImage' ? (
                    <AttachmentViewer
                      attachments={attachments}
                      attachment={attachment}
                      onShowAttachment={this.onShowAttachment}
                    />
                ) : ''}

                  {previewState === 'showLocation' ? (
                    <LocationPreview
                      incident={incident}
                      onEditLocation={this.onEditLocation}
                    />
                ) : ''}

                  {previewState === 'editLocation' ? (
                    <LocationForm
                      incidentModel={this.props.incidentModel}
                      onPatchIncident={onPatchIncident}
                      onClose={this.onCloseAll}
                    />
                ) : ''}

                  {previewState === 'editStatus' ?
                    <StatusForm
                      incident={incident}
                      patching={patching}
                      error={error}
                      changeStatusOptionList={changeStatusOptionList}
                      statusList={statusList}
                      defaultTexts={defaultTexts}
                      onPatchIncident={onPatchIncident}
                      onDismissError={onDismissError}
                      onClose={this.onCloseAll}
                    />
                : ''}
                </div>
              </div>
            ) :
              (
                <div className="row">
                  <div className="col-7">
                    {incident ? (
                      <div>
                        <Detail
                          incident={incident}
                          attachments={attachments}
                          stadsdeelList={stadsdeelList}
                          priorityList={priorityList}
                          onShowLocation={this.onShowLocation}
                          onEditLocation={this.onEditLocation}
                          onShowAttachment={this.onShowAttachment}
                        />

                        <AddNote
                          id={id}
                          onPatchIncident={onPatchIncident}
                        />

                        <History
                          list={list}
                        />
                      </div>
                    ) : ''}
                  </div>

                  <div className="col-4 offset-1">
                    {incident ? (
                      <MetaList
                        incident={incident}
                        priorityList={priorityList}
                        subcategories={categories.sub}
                        onPatchIncident={onPatchIncident}
                        onEditStatus={this.onEditStatus}
                      />
                    ) : ''}
                  </div>
                </div>
              )
            }


          </div>
          )}
      </div>
    );
  }
}

IncidentDetail.defaultProps = {
  previewState: '',
  attachment: ''
};

IncidentDetail.propTypes = {
  previewState: PropTypes.string,
  attachment: PropTypes.string,

  incidentModel: PropTypes.object.isRequired,
  historyModel: PropTypes.object.isRequired,
  categories: PropTypes.object.isRequired,
  accessToken: PropTypes.string.isRequired,

  id: PropTypes.string,
  baseUrl: PropTypes.string,

  onRequestIncident: PropTypes.func.isRequired,
  onPatchIncident: PropTypes.func.isRequired,
  onRequestHistoryList: PropTypes.func.isRequired,
  onRequestAttachments: PropTypes.func.isRequired,
  onRequestDefaultTexts: PropTypes.func.isRequired,
  onDismissSplitNotification: PropTypes.func.isRequired,
  onDismissError: PropTypes.func.isRequired
};

/* istanbul ignore next */
const mapStateToProps = () => createStructuredSelector({
  loading: makeSelectLoading(),
  error: makeSelectError(),
  incidentModel: makeSelectIncidentModel(),
  categories: makeSelectCategories(),
  historyModel: makeSelectHistoryModel(),
  accessToken: makeSelectAccessToken()
});

export const mapDispatchToProps = (dispatch) => bindActionCreators({
  onRequestIncident: requestIncident,
  onPatchIncident: patchIncident,
  onRequestHistoryList: requestHistoryList,
  onRequestAttachments: requestAttachments,
  onRequestDefaultTexts: requestDefaultTexts,
  onDismissSplitNotification: dismissSplitNotification,
  onDismissError: dismissError
}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(IncidentDetail);
