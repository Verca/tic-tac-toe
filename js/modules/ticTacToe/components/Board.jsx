import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import _ from 'lodash';

import moduleState from '../moduleState';
import * as Marks from '../constants/marks';
import Actions from '../actions/actionsTest';
import moduleName from '../moduleName';

const NEXT_PLAYER_MSG = 'Next turn: Player ';
const GAME_NAME = 'Tic tac toe';
const X_IMG = '"/assets/img/xmark.png"';
const O_IMG = '"/assets/img/omark.png"';


class Board extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    board: React.PropTypes.instanceOf(Immutable.List).isRequired,
    nextToPlay: React.PropTypes.string.isRequired,
    children: React.PropTypes.any,
  }

  constructor(props) {
    super(props);
    this.onMarkPlaced = (rowIndex, colIndex, mark, ev) => {
      if (mark === Marks.X || mark === Marks.O) {
        return;
      }
      const markImg = this.props.nextToPlay === Marks.X ? X_IMG : O_IMG;
      ev.target.style['background-image'] = `url(${markImg})`;
      this.props.dispatch(Actions.placeMark({ rowIndex, colIndex }));
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  resetBoard() {
    if (document.getElementsByTagName('td')) {
      _.forEach(document.getElementsByTagName('td'), (element) => {
        element.style['background-image'] = '';
      });
    }
  }

  renderCells(row, rowIndex) {
    return row.map((mark, colIndex) =>
      <td key={colIndex} onClick={this.onMarkPlaced.bind(this, rowIndex, colIndex, mark)} />);
  }

  renderRows() {
    const { board } = this.props;
    return board.map((row, index) =>
      (<tr key={index}>
        {this.renderCells(row, index)}
      </tr>),
    );
  }

  render() {
    const { nextToPlay } = this.props;

    if (this.props.board === moduleState.get('board')) {
      this.resetBoard();
    }

    return (
      <div>
        <h1>{GAME_NAME}</h1>
        <h2>{NEXT_PLAYER_MSG + nextToPlay}</h2>
        <div id="table_container">
          <table>
            <tbody>
              {this.renderRows()}
            </tbody>
          </table>
        </div>
        {this.props.children}
      </div>);
  }
}

export default connect(appState => (state => {
  return {
    board: state.get('board'),
    nextToPlay: state.get('nextToPlay'),
  };
})(appState[moduleName]))(Board);
