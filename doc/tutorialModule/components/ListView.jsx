/* eslint no-undef:0, 'react/self-closing-comp':0, no-unused-vars:0 */
import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import classNames from 'classnames';

import moduleName from '../moduleName';
import styles from '../styles/listView.less';

class ListView extends React.Component {
  static propTypes = {
    // place your code here
  }

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // always leave shallowCompare in here
    return shallowCompare(this, nextProps, nextState);
  }

  // renderList() {
  //  // place your code here
  // }

  render() {
    return (
      <div>
        <h2 className={styles.viewTitle}>Tutorial list component</h2>
        <div className={classNames('col-xs-6', styles.listView)}>

        </div>
      </div>);
  }
}

export default connect((appState) => {
  const moduleState = appState[moduleName];
  return {
  // place your code here
  };
})(ListView);
