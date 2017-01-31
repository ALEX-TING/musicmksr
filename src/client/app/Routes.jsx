import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute} from 'react-router';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';
import App from './containers/App.jsx';
import Profile from './components/Profile.jsx';
import Sequencer from './containers/Sequencer.jsx';
import rootReducer from './reducers/rootreducer.js';
import request from 'axios';

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
const history = syncHistoryWithStore(browserHistory, store);
Appcues.anonymous();

render((
  <Provider store={store}>
    <Router history={browserHistory} onUpdate={()=>window.Appcues.start()>
      <Route path='/' activeClassName="active" component={App}>
        <Route path='/sequencer' activeClassName="active" component={Sequencer}/>
        <Route path='/profile' activeClassName="active" component={Profile}/>
      </Route>
    </Router>
  </Provider>
), document.getElementById('app'));

module.exports = store;
