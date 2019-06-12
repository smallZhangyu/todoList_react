import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers_todolist from './todoList/reducer';
import reducers_about from './about/reducer';

const reducers = combineReducers({
  reducers_todolist,
  reducers_about
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
