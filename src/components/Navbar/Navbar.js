import React from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-router-dom';

const Navbar = (props) => {
  return (
    <div className={styles.navbar}>
      <ul className={styles.links}>
        <li className={styles.link}><Link to="/">Home</Link></li>
      </ul>
    </div>
  )
}

export default Navbar;