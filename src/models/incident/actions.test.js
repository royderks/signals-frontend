import { testActionCreator } from 'test/utils';

import {
  REQUEST_INCIDENT, REQUEST_INCIDENT_SUCCESS, REQUEST_INCIDENT_ERROR,
  DISMISS_SPLIT_NOTIFICATION,
  PATCH_INCIDENT, PATCH_INCIDENT_SUCCESS, PATCH_INCIDENT_ERROR
} from './constants';

import {
  requestIncident, requestIncidentSuccess, requestIncidentError,
  dismissSplitNotification,
  patchIncident, patchIncidentSuccess, patchIncidentError
} from './actions';

describe('incidentModel actions', () => {
  it('should be created', () => {
    const payload = { prop: {} };
    testActionCreator(requestIncident, REQUEST_INCIDENT, payload);
    testActionCreator(requestIncidentSuccess, REQUEST_INCIDENT_SUCCESS, payload);
    testActionCreator(requestIncidentError, REQUEST_INCIDENT_ERROR, payload);

    testActionCreator(dismissSplitNotification, DISMISS_SPLIT_NOTIFICATION);

    testActionCreator(patchIncident, PATCH_INCIDENT, payload);
    testActionCreator(patchIncidentSuccess, PATCH_INCIDENT_SUCCESS, payload);
    testActionCreator(patchIncidentError, PATCH_INCIDENT_ERROR, payload);
  });
});
