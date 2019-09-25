import React from 'react';
import styles from './Details.module.css';

import { getArticle } from '../../actions';
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader';

import Detail from '../../components/Detail/Detail';

class Details extends React.Component {
  componentDidMount() {
    const title = this.props.match.params ? this.props.match.params.title : "The Most Powerful Lightning Strikes in Unexpected Places"
    this.props.loadArticle(title);
  }

  render() {
    console.log(this.props.article);
    const article = {
      ...this.props.article
    }

    return (
      <div className={styles.details}>
        {
          article.isLoading ? <Loader/>
          :
          <Detail article={article.article}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    article: state.article
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadArticle: (title) => {
      dispatch(getArticle(title))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Details);