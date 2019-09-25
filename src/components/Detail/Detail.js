import React from 'react';
import styles from './Detail.module.css';
import LinkButton from '../LinkButton/LinkButton';

const Detail = (props) => {
  console.log(props);
  const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg';

  const imgSource = 
  props.article ? props.article.multimedia ? props.article.multimedia[9] ? 
  'http://nyt.com/' + props.article.multimedia[9].url 
  : defaultImg : defaultImg : defaultImg;

  return (
    <div className={styles.detailWrapper}>
      <img src = {imgSource} className={styles.detailImage} alt='img'/>
      <div className={styles.detailContent}>
        <div className={styles.detailTitle}>
          { props.article ? props.article.headline ? props.article.headline.main : 'Title' : 'Title' }
        </div>

        <div className={styles.detailText}>
          { props.article ? props.article.abstract : 'Abstract'}
        </div>

        <div className={styles.detailText}>
          { props.article ? props.article.lead_paragraph : 'Lead_Paragraph'}
        </div>
      </div>

      <LinkButton name='Read More...' target={props.article ? props.article.web_url : "#"} />
    </div>
  )
}

export default Detail