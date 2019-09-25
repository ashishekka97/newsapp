import { put, call } from 'redux-saga/effects';
import { fetchTopStories, fetchArticle } from '../consumers/nytApiConsumer';
import { topStoriesReceived, topStoriesError, articleReceived, articleError } from '../actions';

export function * topStories(action) {
  try {
    const stories = yield call(fetchTopStories, action.section);
    yield put(topStoriesReceived(stories));
  } catch (error) {
    yield put(topStoriesError(error));
  }
}

 export function * article(action) {
   try {
     const article = yield call(fetchArticle, action.title);
     yield put(articleReceived(article));
   } catch(error) {
     yield put(articleError(error));
   }
 }