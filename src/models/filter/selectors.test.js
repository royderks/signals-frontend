import { fromJS } from 'immutable';
import makeSelectFilter from './selectors';


describe('makeSelectFilter', () => {
  const selector = makeSelectFilter();
  it('should select the filter', () => {
    const filter = {
      foo: 'bar'
    };

    const mockedState = fromJS({
      filter
    });
    expect(selector(mockedState)).toEqual(filter);
  });
});
