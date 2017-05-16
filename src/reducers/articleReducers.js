const initialState = {
  articleName: 'article1',
  published: 'datePublished',
  category: 'Sci-Fi'
};

export default (state = initialState, action) => {
  switch(action) {
  case 'ADD_ARTICLE':
    return state; 
  default:
    return state; // new state;
  }

};
