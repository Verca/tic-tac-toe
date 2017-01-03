import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

class IndexComponent extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>);
  }
}

export default connect()(IndexComponent);
