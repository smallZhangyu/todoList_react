import { DELETE_LIST, CHANGE_VALUE, CREATE_LIST  } from './actionType';

const defaultState = {
  inputVal: '',
  todoList: ['React', 'Redux', 'React-redux']
};

export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case CHANGE_VALUE:
      newState.inputVal = action.inputVal;
      return newState;

    case CREATE_LIST:
      newState.todoList.push(newState.inputVal);
      newState.inputVal = '';
      return newState;

    case DELETE_LIST:
      newState.todoList.splice(action.index, 1);
      return newState;

    default:
      return newState;
  }

}
