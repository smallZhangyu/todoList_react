import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';
import { changeInputVal, createList, deleteList } from '../store/todoList/createActions';

class TodoList extends Component {
  render() {
    const { inputVal, todoList, handleChangeVal, handleCreate, handleDelete } = this.props;

    return (
      <Fragment>
        <div>
          <input type="text" value={inputVal} onChange={handleChangeVal} />
          <input type="button" value="Create" onClick={handleCreate} />
        </div>
        <ul>
          {todoList.map((item, index) => <li key={index+'-'+item}>{item} <span style={{color: '#f60', cursor: 'pointer'}} onClick={handleDelete.bind(null, index)}>X</span></li>)}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    inputVal: state.reducers_todolist.inputVal,
    todoList: state.reducers_todolist.todoList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleChangeVal: (e) => {
      console.log(e.target.value);
      const action = changeInputVal(e.target.value);
      dispatch(action);
    },

    handleCreate: () => {
      const action = createList();
      dispatch(action);
    },

    handleDelete: (index) => {
      console.log(index);
      const action = deleteList(index);
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
