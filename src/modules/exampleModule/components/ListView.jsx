import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import classNames from 'classnames';
import moduleName from '../moduleName';

import styles from '../styles/listView.less';
import LoadButton from './LoadButton';

class ListView extends React.Component {
  static propTypes = {
    // dispatch: React.PropTypes.func,
    items: React.PropTypes.instanceOf(Immutable.List),
  }

  constructor(props) {
    super(props);
  }

  shouldComponentUpdate(nextProps, nextState) {
    // always leave shallowCompare in here
    return shallowCompare(this, nextProps, nextState);
  }

  renderList() {
    return (
      <ul className="list-group">
        {this.props.items && this.props.items.map((item, index) => {
          return (<li className="list-group-item" key={index}>{item.get('name')}</li>);
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <h2 className={styles.viewTitle}>My example list component</h2>

        <div className={classNames('col-xs-6', styles.listView)}>
          <LoadButton />

          {this.renderList()}
        </div>
      </div>);
  }
}

export default connect((appState) => {
  const moduleState = appState[moduleName];
  return {
    items: moduleState.get('items'),
  };
})(ListView);
