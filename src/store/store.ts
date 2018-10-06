import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import rootReducer from './root-reducer';
import rootEpic from './root-epic';
import services from '../services';
import { createBrowserHistory, History } from 'history';
import { connectRouter, routerMiddleware } from 'connected-react-router'

export const epicMiddleware = createEpicMiddleware(rootEpic, {
  dependencies: services,
});

export const history: History = createBrowserHistory()

function configureStore(initialState?: object) {
  // configure middlewares
  // const middlewares = [epicMiddleware];
  // compose enhancers
  // const enhancer = composeEnhancers(applyMiddleware(...middlewares));
  // create store
  return createStore(connectRouter(history)(rootReducer), initialState!, compose(
    applyMiddleware(
      routerMiddleware(history) // for dispatching history
      // other middleware here...
    )
  ));
}

// pass an optional param to rehydrate state on app start
const store = configureStore();

// export store singleton instance
export default store;
