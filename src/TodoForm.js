import React from 'react';
import TextField from '@material-ui/core/TextField';
import * as actions from './redux/actions';
import { connect } from 'react-redux';

const TodoForm = ({ value, updateValue, saveTodo }) => (
  <form
    onSubmit={e => {
      e.preventDefault();
      saveTodo();
    }}>
    <TextField 
      type='text' 
      placeholder='Add to do' 
      margin="normal"
      onChange={e => updateValue(e.target.value)}
      value={value}
    />
  </form>
);

const mapStateToProps = ({ todoReducer }) => {
  console.log(todoReducer);
  const { value } = todoReducer;
  return { value };
};

export default connect(mapStateToProps, actions)(TodoForm);  //Currying