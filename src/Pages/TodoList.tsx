import * as React from "react";
import { ActionDispatcher } from "./Container";
import { TodoState } from "./Module";

type Props = {
  value: TodoState;
  actions: ActionDispatcher;
};

export const TodoList: React.FC<Props> = props => {
  const [task, setTask] = React.useState("");

  const addTask = () => {
    props.actions.addTask(task);
    setTask("");
  };

  const clearTask = () => {
    props.actions.clearTask();
  };

  return (
    <div>
      {props.value.todoList.map(todo => {
        return <div key={todo.id}>{todo.task}</div>;
      })}
      <input
        value={task}
        type="text"
        onChange={(e: any) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add Task</button>
      <button onClick={clearTask}>Clear Task</button>
    </div>
  );
};
