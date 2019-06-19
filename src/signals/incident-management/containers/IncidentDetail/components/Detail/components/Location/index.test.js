import React from 'react';
import { shallow } from 'enzyme';

import stadsdeelList from 'signals/incident-management/definitions/stadsdeelList';

import Location from './index';

jest.mock('../../../MapDetail', () => () => 'MapDetail');

describe('<Location />', () => {
  let props;

  beforeEach(() => {
    props = {
      incident: {
        location: {
          extra_properties: null,
          geometrie: {
            type: 'Point',
            coordinates: [
              4.913291931152344,
              52.36582256756977
            ]
          },
          buurt_code: 'A08d',
          created_by: null,
          address: {
            postcode: '1018DH',
            huisletter: '',
            huisnummer: '48',
            woonplaats: 'Amsterdam',
            openbare_ruimte: 'Plantage Middenlaan',
            huisnummer_toevoeging: ''
          },
          stadsdeel: 'A',
          bag_validated: false,
          address_text: 'Plantage Middenlaan 48 1018DH Amsterdam',
          id: 3158
        }
      },
      stadsdeelList,
      onShowLocation: jest.fn(),
      onEditLocation: jest.fn()
    };
  });

  it('should render correctly with address', () => {
    const wrapper = shallow(
      <Location {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly without address (only geo)', () => {
    props.incident.location.address = undefined;
    props.incident.location.address_text = undefined;
    const wrapper = shallow(
      <Location {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });

  it('should render correctly with address and huisletter and huisnummer_toevoeging', () => {
    props.incident.location.address.huisletter = 'A';
    props.incident.location.address.huisnummer_toevoeging = '3';

    const wrapper = shallow(
      <Location {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
