import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import Menu from './Menu';

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
        <Menu/>
        {this.props.children}
      </div>);
  }
}

export default connect(
  state => ({
    board: state.get('board'),
    nextToPlay: state.get('nextToPlay'),
    winner: state.get('winner')
  }))(Application);
