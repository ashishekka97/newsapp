import React from 'react';
import styles from './Loader.module.css';
import { Rolling } from 'react-loading-io';

const Loader = (props) => {
  return (
    <Rolling className={styles.loader} color='rgb(55, 71, 79)' size={64}/>
  )
}

export default Loader;