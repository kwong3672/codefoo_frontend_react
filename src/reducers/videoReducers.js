const initialState = {
  videoName: 'article1',
  category: 'Sci-Fi',
  description: 'Some Description'
};

export default (state = initialState, action) => {
  switch(action) {
  case 'ADD_VIDEO':
    return state;  
  default:
    return state; // new state;
  }
};

