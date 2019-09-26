import {
  TOP_STORIES_REQUEST,
  TOP_STORIES_SUCCESS,
  TOP_STORIES_ERROR,

  ARTICLE_REQUEST,
  ARTICLE_RESPONSE,
  ARTICLE_ERROR
} from './types';

export const getTopStories = (section) => ({
  type: TOP_STORIES_REQUEST,
  section
})

export const topStoriesReceived = (stories) => ({
  type: TOP_STORIES_SUCCESS,
  stories
})

export const topStoriesError = (error) => ({
  type: TOP_STORIES_ERROR,
  error
})

export const getArticle = (title) => ({
  type: ARTICLE_REQUEST,
  title
})

export const articleReceived = (article) => ({
  type: ARTICLE_RESPONSE,
  article
})

export const articleError = (error) => ({
  type: ARTICLE_ERROR,
  error
})