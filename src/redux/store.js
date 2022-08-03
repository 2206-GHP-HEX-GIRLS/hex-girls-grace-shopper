import { applyMiddleware } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { composeWithDevTools } from 'redux-devtools-extension';
import axios from 'axios';
import rootReducer from '../reducers';
import loggingMiddleware from 'redux-logger';
import thunkMiddleware from 'redux-thunk';

export default configureStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(
      thunkMiddleware.withExtraArgument({ axios }),
      loggingMiddleware
    )
  )
);
