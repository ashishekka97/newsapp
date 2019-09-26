import React from 'react';
import Links from '../../components/Links/Links';
import sections from './section';
import styles from './Sidebar.module.css';

class Sidebar extends React.Component {
  render() {
    return (
      <div className={styles.sidebar}>
        <Links links={sections}/>
      </div>
    )
  }
}

export default Sidebar;