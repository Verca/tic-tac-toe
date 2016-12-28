import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

import Menu from './Menu';

class Application extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <Menu />
        {this.props.children}
      </div>);
  }
}

export default connect(
  () => ({
  }))(Application);
