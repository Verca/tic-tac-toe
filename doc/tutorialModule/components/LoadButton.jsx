/* eslint no-undef:0 */
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import classNames from 'classnames';
import moduleName from '../moduleName';

import Actions from '../actions/actions';
import styles from '../styles/listView.less';

class LoadButton extends React.Component {
  static propTypes = {
    // place your code here
  }

  constructor(props) {
    super(props);

    // place your code here
  }

  shouldComponentUpdate(nextProps, nextState) {
    // always leave shallowCompare in here
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const buttonStyles = classNames(
      'btn btn-primary',
      styles.loadButton,
    );
    return (<div>
      { /* place your code here */ }
    </div>);
  }
}

export default connect((appState) => {
  const moduleState = appState[moduleName];
  return {
    // place your code here
  };
})(LoadButton);
