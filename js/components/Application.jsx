import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import { NO_WINNER } from '../constants/marks';

import Board from './game/Board';
import EndGameView from './game/EndGameView';

class Application extends React.Component {
  static propTypes = {
    winner: React.PropTypes.string.isRequired,
  }
  
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const { winner } = this.props;

    return (
      <div>
        {winner !== NO_WINNER ? <EndGameView />: false}
        <Board />
      </div>);
  }
}

export default connect(
  state => ({
    board: state.get('board'),
    nextToPlay: state.get('nextToPlay'),
    winner: state.get('winner')
  }))(Application);
