import React from 'react';
import Articles from '../../components/Articles/Articles';
import styles from './Content.module.css';
import { connect } from 'react-redux';
import { getTopStories } from '../../redux/actions';
import Loader from '../../components/Loader/Loader';

const defaultSection = 'home';

class Content extends React.Component {
  state = {
    section: defaultSection
  }

  componentDidMount() {
    const section = this.props.match.params ? this.props.match.params.section : defaultSection;
    this.props.loadStories(section);
  }

  componentDidUpdate() {
    if (this.props.match.params.section !== this.state.section) {
      const section = this.props.match.params.section;
      this.setState({ section })
      this.props.loadStories(section);
    }
  }

  render() {
    return (
      <div className={styles.home}>
        { this.props.stories.isLoading ? <Loader /> : <Articles data={this.props.stories.stories}/> }
      </div>
    )
  }
}

function mapStateToProps(state) {
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