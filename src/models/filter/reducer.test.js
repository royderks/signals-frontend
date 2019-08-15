import { fromJS } from 'immutable';
import filterReducer from './reducer';

import {
  DEFAULT_ACTION,
} from './constants';

describe('filterReducer', () => {
  it('returns the initial state', () => {
    expect(filterReducer(undefined, {})).toEqual(fromJS({}));
  });

  it('should DEFAULT_ACTION', () => {
    expect(
      filterReducer(fromJS({}), {
        type: DEFAULT_ACTION
      }).toJS()
    ).toEqual({
      foo: 'bar'
    });
  });
});
