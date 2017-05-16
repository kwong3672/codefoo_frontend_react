import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';

import articleReducers from './reducers/articleReducers';
import videoReducers from './reducers/videoReducers';

const rootReducer = combineReducers({
  articleReducers,
  videoReducers,
});

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(logger),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
