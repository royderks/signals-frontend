import makeSelectIncidentModel from './selectors';


describe('makeSelectIncidentModel', () => {
  const selector = makeSelectIncidentModel();
  it('should select the incidentModel', () => {
    const incidentModel = {
      foo: 'bar'
    };

    const mockedState = {
      incidentModel
    };
    expect(selector(mockedState)).toEqual(incidentModel);
  });
});
