import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';

class Home extends React.Component {
  shouldComponentUpdate(nextProps, nextState) {
    // always leave shallowCompare in here
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <h2>Dashboard page</h2>
      </div>);
  }
}

export default connect()(Home);
