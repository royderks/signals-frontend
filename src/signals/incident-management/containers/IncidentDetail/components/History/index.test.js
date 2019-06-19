import React from 'react';
import { shallow } from 'enzyme';

import History from './index';

describe('<History />', () => {
  it('should render correctly', () => {
    const props = {
      list: [
        {
          identifier: 'UPDATE_STATUS_6146',
          when: '2019-06-19T14:02:52.048970+02:00',
          what: 'UPDATE_STATUS',
          action: 'Update status naar: Ingepland',
          description: null,
          who: 's.l.kok@amsterdam.nl',
          _signal: 2934
        },
        {
          identifier: 'UPDATE_STATUS_6145',
          when: '2019-06-19T13:16:18.772967+02:00',
          what: 'UPDATE_STATUS',
          action: 'Update status naar: Ingepland',
          description: 'Voor het oplossen van uw melding hebben we helaas wat meer tijd nodig.\n\nDit kan een aantal oorzaken hebben:\no Als er door de aannemer gegraven moet worden, dient er eerst een bodemonderzoek te worden uitgevoerd. \no Soms moet er extra werk en aanvullende maatregelen worden ingepland. Bijvoorbeeld de verlichting boven een trambaan, dat samen met het GVB moet worden hersteld.\no Er moet materiaal besteld worden dat niet op voorraad is.\n\nU ontvangt bericht wanneer we uw melding hebben afgerond.\n\nU kunt op werkdagen tijdens kantooruren ook bellen naar telefoonnummer 020 254 5216. Heeft u een vraag over uw melding, vermeld dan het meldingsnummer.',
          who: 'sia@techtek.eu',
          _signal: 2934
        },
        {
          identifier: 'UPDATE_STATUS_6144',
          when: '2019-06-19T13:16:18.508042+02:00',
          what: 'UPDATE_STATUS',
          action: 'Update status naar: In afwachting van behandeling',
          description: '',
          who: 'sia@techtek.eu',
          _signal: 2934
        }
      ]
    };

    const wrapper = shallow(
      <History {...props} />
    );

    expect(wrapper).toMatchSnapshot();
  });
});
