import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type Todo = {
  id: number;
  task: string;
};

export type TodoState = {
  todoList: Todo[];
};

const initialState: TodoState = {
  todoList: []
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<{ task: string }>) => {
      const latestTask = state.todoList.slice(-1)[0];
      const newId = latestTask ? latestTask.id + 1 : 1;

      const newTask = {
        id: newId,
        task: action.payload.task
      };

      return {
        ...state,
        todoList: [...state.todoList, newTask]
      };
    },
    clearTask: () => ({
      ...initialState
    })
  }
});

// actions
export const { addTask, clearTask } = todoSlice.actions;

// actions type
export type TodoAction =
  | ReturnType<typeof addTask>
  | ReturnType<typeof clearTask>;

// reducer
export const todoReducer = todoSlice.reducer;
