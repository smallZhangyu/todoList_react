import { DELETE_LIST, CHANGE_VALUE, CREATE_LIST } from './actionType';

export const changeInputVal = (inputVal) => ({
  type: CHANGE_VALUE,
  inputVal
})

export const createList = () => ({
  type: CREATE_LIST
})

export const deleteList = (index) => ({
  type: DELETE_LIST,
  index
})
