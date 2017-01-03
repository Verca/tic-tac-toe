import { expect } from 'chai';
import Immutable from 'immutable';
import initialState from '../moduleState';
import { loadItems, displayItems } from './listReducer';

describe('displayItems reduction', () => {
    let state;
    const data = [{id: '0', name: 'abc'}, {id: '2', name: 'cde'}];
    beforeEach(() => {
      const action = {
        type: '',
        payload: data};
      state = displayItems(initialState, action);
    });
    it('should set loading to false', () => {
      expect(state.get('loading')).not.to.be.true;
    });
    it('should merge new items into item list in the state', () => {
      const expectedState = initialState.get('items').concat(Immutable.fromJS(data));
      expect(state.get('items').toString()).to.equal(expectedState.toString());
    });
});

describe('loadItems reduction', () => {
  let state;
  beforeEach(() => {
    const action = { type: '', payload: {}};
    state = loadItems(initialState, action);
  });
  it('should set loading to true', () => {
    expect(state.get('loading')).to.be.true;
  });
});