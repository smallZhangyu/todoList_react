import { initContent } from './actionType';

const defaultState = {};

export default (state = defaultState, action) => {
  const newState = state;

  switch (action.type) {
    case initContent:
      return newState;

    default:
      return newState;
  }
}
