import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './store';
import TodoList from './TodoList';
import About from './About';

function App() {
  return (
    <Provider store={store}>
      <Router>
        <ul>
          <li><Link to="/todoList">TodoList</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <Route path="/" component={TodoList} />
        <Route path="/about" component={About} />
      </Router>
    </Provider>
  );
}

export default App;
