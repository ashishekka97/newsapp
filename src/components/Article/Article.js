import React from 'react';
import styles from './Article.module.css';

const Article = (props) => {
  const multimedia = props.data.multimedia;
  const defautImage = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg';
  const imgSource = multimedia.length > 0 ? multimedia[4] ? multimedia[4].url : defautImage: defautImage;
  return (
    <div className={styles.article}>
      <img src={imgSource} alt={'img'} className={styles.articleImage}/>
      <div className={styles.articleAbout}>
        <div className={styles.articleTitle}>
          {props.data.title}
        </div>
      </div>
    </div>
  )
}

export default Article;