/**
 * Created by Chris D on 17/12/2016.
 * Reducer Tests
 */

import expect from 'expect';
import { describe, it } from 'mocha';
import reducers from '../src/reducers';

describe('reducers', () => {
  it('should handle actions', () => {
    const state = reducers(undefined, {});
    expect(state).toEqual([]);
  });
});
