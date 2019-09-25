import {
  TOP_STORIES_REQUEST,
  TOP_STORIES_SUCCESS,
  TOP_STORIES_ERROR
} from '../actions/types';

const initialState = {
  stories: [],
  error: null,
  isLoading : false
}

const storiesReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOP_STORIES_REQUEST: return {
      ...state,
      isLoading: true
    }

    case TOP_STORIES_SUCCESS: return {
      ...state,
      stories: action.stories,
      isLoading: false
    }

    case TOP_STORIES_ERROR: return {
      ...state,
      error: action.error,
      isLoading: false
    }

    default : return {
      ...state
    }
  }
}

export default storiesReducer;