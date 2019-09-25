import React from 'react';
import styles from './Articles.module.css';
import Article from '../Article/Article';
import { Link } from 'react-router-dom';

const Articles = (props) => {
  return (
    <div className={styles.articles}>
      {
        props.data.map(article => {
          return <Link to={`details/${article.title}`} key={article.title}><Article data={article}/></Link>
        })
      }
    </div>
  )
}

export default Articles;