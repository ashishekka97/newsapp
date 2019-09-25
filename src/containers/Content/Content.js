import React from 'react';
import Articles from '../../components/Articles/Articles';
import styles from './Content.module.css';
import { connect } from 'react-redux';
import { getTopStories } from '../../actions';
import Loader from '../../components/Loader/Loader';

class Content extends React.Component {

  componentDidMount() {
    console.log(this.props)
    const section = this.props.match.params ? this.props.match.params.section : 'home';
    console.log(section);
    this.props.loadStories(section);
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
    if (nextProps.match.params.section !== this.props.match.params.section) {
      const section = nextProps.match.params.section
      this.props.loadStories(section);
      console.log('called');
    }
  }

  render() {
    return (
      <div className={styles.home}>
        {
          this.props.stories.isLoading ? <Loader />
          :
          <Articles data={this.props.stories.stories}/>
        }
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  console.log(props)
  return {
    stories: state.stories
  }
}

function mapDispatchToProps(dispatch) {
  return {
    loadStories: (section) => {
      dispatch(getTopStories(section));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (Content);