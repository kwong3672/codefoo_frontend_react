import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import logger from 'redux-logger';
import promise from 'redux-promise-middleware';

import articles from './reducers/articleReducers';
import videos from './reducers/videoReducers';
import app from './reducers/appReducers';

const rootReducer = combineReducers({
  articles,
  videos,
  app
});

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(logger, promise()),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
