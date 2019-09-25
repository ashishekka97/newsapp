import React from 'react';
import styles from './LinkButton.module.css';

const LinkButton = (props) => {
  return (
    <a href = {props.target} className={styles.button}>
        {props.name}
    </a>
  )
}

export default LinkButton;