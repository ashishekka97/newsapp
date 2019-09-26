import {
  ARTICLE_REQUEST,
  ARTICLE_RESPONSE,
  ARTICLE_ERROR
} from '../actions/types';

const initialState = {
  article: null,
  error: null,
  isLoading : false
}

const articleReducer = (state = initialState, action) => {
  switch(action.type) {
    case ARTICLE_REQUEST: return {
      ...state,
      isLoading: true
    }

    case ARTICLE_RESPONSE: return {
      ...state,
      article: action.article,
      isLoading: false
    }

    case ARTICLE_ERROR: return {
      ...state,
      error: action.error,
      isLoading: false
    }

    default : return {
      ...state
    }
  }
}

export default articleReducer;