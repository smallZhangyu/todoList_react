import React from 'react';
import { BrowserRouter as Router, Link, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './component/TodoList';
import About from './component/About';

const App = (
  <Provider store={store}>
    <Router>
      <ul>
        <li><Link to="/todoList">TodoList</Link></li>
        <li><Link to="/about">About</Link></li>
      </ul>

      <Redirect from="/" to="/todoList" />
      <Route exact path="/todoList" component={TodoList} />
      <Route exact path="/about" component={About} />
    </Router>
  </Provider>
);

export default App;
