export default (state = {}, action) => {
  switch(action.type) {

  case 'ADD_ARTICLES':
    return state; 

  case 'ADD_ARTICLES_FULFILLED':
    return {
      ...state,
      ...action.payload,
      startIndex: (state.startIndex || 0 ) + action.payload.count,
      data: Object.assign([], state.data).concat(action.payload.data).map((data) => {
        data.display = 'none';
        return data;
      })
    };

  case 'ADD_ARTICLES_REJECTED':
    return state;   

  case 'TOGGLE_ARTICLE':
    var toggleState = {
      ...state,
    };
    toggleState.data[action.payload].display = state.data[action.payload].display === 'none' ? 'block' : 'none';
    return toggleState;

  default:
    return state; // new state;
  }

};
