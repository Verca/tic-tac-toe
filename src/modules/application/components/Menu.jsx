import React from 'react';
import shallowCompare from 'react-addons-shallow-compare';
import { connect } from 'react-redux';
import { Link, IndexLink } from 'react-router';
import styles from '../styles/styles.less';

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
        <ul className={styles.menu}>
          <li><IndexLink to="/" className={styles.menuLink} activeClassName={styles.active}>Home</IndexLink></li>
          <li><Link to="/example" className={styles.menuLink} activeClassName={styles.active}>exampleModule</Link></li>
        </ul>
      </div>);
  }
}

export default connect()(Menu);
