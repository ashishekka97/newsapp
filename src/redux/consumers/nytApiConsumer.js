import axios from 'axios';
import { key as APIkey} from '../../config/nytAPIkey';

export function fetchTopStories(section = 'home') {
  return axios.get(`https://api.nytimes.com/svc/topstories/v2/${section}.json?api-key=${APIkey}`)
  .then(response => response.data.results)
}

export function fetchArticle(title = 'The Most Powerful Lightning Strikes in Unexpected Places') {
  return axios.get(`https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${title}&api-key=${APIkey}`)
  .then(response => response.data.response.docs[0])
}