import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Actions from '../actions/actionsTest';
import moduleName from '../moduleName';

import { EMPTY } from '../constants/marks';
import styles from '../styles/game.less';

const TIE_MSG= 'It\'s a tie!';
const WINNER_MSG = 'Winner is: ';
const RESET_GAME = 'Reset game';
class Board extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    winner: React.PropTypes.string.isRequired,
  }

  constructor(props) {
    super(props);

    this.onResetClicked = () => {
      this.props.dispatch(Actions.resetGame());
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  getGameResultMessage() {
    const { winner } = this.props;
    return winner === EMPTY ? TIE_MSG: WINNER_MSG + winner;
  }
  render() {
    return (
      <div className={styles.shadowBackground}>
        <div className={styles.editItemModal}>
          <h2>{this.getGameResultMessage()}</h2>
          <button onClick={this.onResetClicked}>{RESET_GAME}</button>
        </div>
      </div>);
  }
}

export default connect(appState => (state => {
  return {
    winner: state.get('winner'),
  };
})(appState[moduleName]))(Board);
