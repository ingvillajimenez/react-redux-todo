import { UPDATE_VALUE, SAVE_TODO, DELETE_TODO, TOGGLE_COMPLETED } from '../actions/actionTypes';

const INITIAL_STATE = {
  value: "",
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  // let todos = state.todos;

  switch (action.type) {
    case UPDATE_VALUE:
      return {
        ...state,
        value: action.payload
      };

    case SAVE_TODO:
      return state.value ? {
        ...state,
        todos: [...state.todos, { value: state.value, completed: false }],
        value: ''
      } : state;

    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((_, i) => i !== action.payload)
      };

    case TOGGLE_COMPLETED:
      // const todos = JSON.parse(JSON.stringify(state.todos));
      const todos = [...state.todos ];
      todos[action.payload].completed = !todos[action.payload].completed;
      return {
        ...state,
        todos
      }

    default:
      return state;
  }
};