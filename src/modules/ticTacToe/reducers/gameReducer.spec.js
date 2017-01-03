import { expect } from 'chai';

import initialState from '../moduleState';
import { placeMark, switchPlayers } from './gameReducer';
import { X, O } from '../constants/marks';

describe('placeMark reduction', () => {
    let state;
    beforeEach(() => {
      const action = { type: '', payload: {rowIndex: 0, colIndex: 1}};
      state = placeMark(initialState, action);
    });
    it('placeMark should place mark to the right board', () => {
      expect(state.getIn(['board', 0, 1])).to.equal(X);
    });
    it('should increase number of moves played', () => {
      expect(state.get('numberOfMoves')).to.equal(1);
    });
});

describe('switchPlayers reduction', () => {
  let state;
  beforeEach(() => {
    const action = { type: '', payload: {}};
    state = switchPlayers(initialState, action);
  });
  it('should set next player from X to O', () => {
    expect(state.get('nextToPlay')).to.equal(O);
  });
});