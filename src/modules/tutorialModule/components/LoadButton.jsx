import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import classNames from 'classnames';
import moduleName from '../moduleName';

import Actions from '../actions/actions';
import styles from '../styles/listView.less';

class LoadButton extends React.Component {
  static propTypes = {
    dispatch: React.PropTypes.func,
    loading: React.PropTypes.bool,
  }

  constructor(props) {
    super(props);

    this.loadItems = () => {
      this.props.dispatch(Actions.loadItems());
    };
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
    return (
      <button className={buttonStyles} disabled={this.props.loading} onClick={this.loadItems}>
        {this.props.loading ? 'Loading...' : 'Load more'}
      </button>
    );
  }
}

export default connect((appState) => {
  const moduleState = appState[moduleName];
  return {
    loading: moduleState.get('loading'),
  };
})(LoadButton);
