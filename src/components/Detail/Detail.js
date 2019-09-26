import React from 'react';
import styles from './Detail.module.css';
import LinkButton from '../LinkButton/LinkButton';

const Detail = (props) => {
  const defaultImg = 'https://upload.wikimedia.org/wikipedia/commons/b/b9/No_Cover.jpg';
  const imgSource = props.article ? props.article.multimedia ? props.article.multimedia[9] ? 'http://nyt.com/' + props.article.multimedia[9].url : defaultImg : defaultImg : defaultImg;
  const defaultTitle = 'Title';
  const defaultAbstract = 'Abstarct';
  const defaultPara = 'Starting Paragraph';

  return (
    <div className={styles.detailWrapper}>

      <img src ={imgSource} className={styles.detailImage} alt='img'/>

      <div className={styles.detailContent}>

        <div className={styles.detailTitle}>
          {props.article ? props.article.headline ? props.article.headline.main : defaultTitle : defaultTitle}
        </div>

        <div className={styles.detailText}>
          {props.article ? props.article.abstract : defaultAbstract}
        </div>

        <div className={styles.detailText}>
          {props.article ? props.article.lead_paragraph : defaultPara}
        </div>

      </div>

      <LinkButton name='Read More...' target={props.article ? props.article.web_url : "#"} />

    </div>
  )
}

export default Detail