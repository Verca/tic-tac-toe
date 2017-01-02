import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import { Link } from 'react-router';

class Menu extends React.Component {

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <ul>
          <li><Link to="/tic-tac-board">TicTacToe</Link></li>
          <li>Chart</li>
        </ul>
      </div>);
  }
}

export default connect()(Menu);
