// src/redux/reducers/taskReducer.js
import { ADD_TASK, TOGGLE_TASK, EDIT_TASK } from '../actions/taskActions';

const initialState = [];

const taskReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TASK:
      return [...state, action.payload];
    case TOGGLE_TASK:
      return state.map(task =>
        task.id === action.payload ? { ...task, isDone: !task.isDone } : task
      );
    case EDIT_TASK:
      return state.map(task =>
        task.id === action.payload.id ? { ...task, description: action.payload.description } : task
      );
    default:
      return state;
  }
};

export default taskReducer;
