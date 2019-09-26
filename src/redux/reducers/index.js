import { combineReducers } from 'redux';

import storiesReducer from './storiesReducer';
import articleReducer from './articleReducer';

const rootReducer = combineReducers({
  stories: storiesReducer,
  article: articleReducer
})

export default rootReducer;