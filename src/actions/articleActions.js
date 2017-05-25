import requestData from '../utils/requestData';  

export function addArticles(category = 'articles', startIdx = 0, count = 10) {
  return {
    type: 'ADD_ARTICLES',
    payload: requestData(category, startIdx, count)
  };
}

export function toggleArticle(idx) {
  return {
    type: 'TOGGLE_ARTICLE',
    payload: idx
  };
}

