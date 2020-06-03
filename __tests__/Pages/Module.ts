import {
  todoReducer,
  initialState,
  addTask,
  clearTask
} from "../../src/Pages/Module";

test("addTask", () => {
  const action = addTask({ task: "test task" });

  expect(todoReducer(initialState, action)).toMatchObject({
    ...initialState,
    todoList: [{ id: 1, task: "test task" }]
  });
});

test("clearTask", () => {
  const action = clearTask();

  expect(todoReducer(initialState, action)).toMatchObject({
    ...initialState
  });
});
