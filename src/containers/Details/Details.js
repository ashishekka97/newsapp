import React from 'react';
import styles from './Details.module.css';

import { getArticle } from '../../actions';
import { connect } from "react-redux";
import Loader from '../../components/Loader/Loader';

import Detail from '../../components/Detail/Detail';

const defaultTitle = "The Most Powerful Lightning Strikes in Unexpected Places";

class Details extends React.Component {
  componentDidMount() {
    const title = this.props.match.params ? this.props.match.params.title : defaultTitle;
    this.props.loadArticle(title);
  }

  render() {

    return (
      <div className={styles.details}>
        {this.props.article.isLoading ? <Loader/> : <Detail article={ this.props.article.article}/> }
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