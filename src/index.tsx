import * as React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import LoginComponent from './components/Login';
import Portal from './components/Portal';
import store from './store';
import './styles/index.css';
import { ConnectedRouter } from 'connected-react-router';
import { History } from 'history';
import { history } from './store/store'
import { Switch, Route } from 'react-router-dom';

interface AppHistory {
  historyAttr: History
}

const renderApp = (Login: any, { historyAttr }: AppHistory) => {
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <div>
          <Switch>
            <Route exact path="/" render={() => (<Login />)} />
            <Route exact path="/portal" render={() => (<Portal />)} />
            <Route render={() => (<div>Miss</div>)} />
          </Switch>
        </div>
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
}

const historyIn: AppHistory = {
  historyAttr: history
}

renderApp(LoginComponent, historyIn);

if (module.hot) {
  module.hot.accept('./components/Login', () => {
    const NextApp = require('./components/Login').default;
    renderApp(NextApp, historyIn);
  });
}
