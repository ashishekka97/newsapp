import React from 'react';
import styles from './Links.module.css';
import { Link } from 'react-router-dom';

const Links = (props) => {

  function capitalize(link) {
    const linkCapitalized = link.charAt(0).toUpperCase() + link.slice(1);
    return linkCapitalized;
  }

  return (
    <div>
      <div className={styles.header}>
        Sections
      </div>
      {
        props.links ?
        <ul className={styles.links}>
          {
            props.links.map(link => {
              let route = `/${link}`;
              return (
                <li className={styles.link}  key={link}>
                  <Link to={route}>{capitalize(link)}</Link>
                </li>
              )
            })
          }
        </ul>
        :
        null
      }
    </div>
  )
}

export default Links;