import { takeEvery } from 'redux-saga/effects';
import * as types from '../actions/types';
import { topStories, article } from './nytSagas';

export default function * rootSaga() {
  yield takeEvery(types.TOP_STORIES_REQUEST, topStories);
  yield takeEvery(types.ARTICLE_REQUEST, article);
}