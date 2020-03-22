import { createStore,applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk'
import rootReducer from './reducers';
import logger from 'redux-logger'

export default createStore(
  rootReducer, 
  applyMiddleware(thunkMiddleware,logger)
);