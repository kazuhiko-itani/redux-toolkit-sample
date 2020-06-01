import { TodoList } from "./TodoList";
import { connect } from "react-redux";
import { addTask, clearTask } from "./Module";
import { ReduxState, ReduxAction } from "../Store";
import { Dispatch } from "../Store";

export class ActionDispatcher {
  constructor(private dispatch: (action: ReduxAction) => void) {
    this.dispatch = dispatch;
  }

  public addTask(task: string) {
    this.dispatch(addTask({ task }));
  }

  public clearTask() {
    this.dispatch(clearTask());
  }
}

export default connect(
  (state: ReduxState) => ({ value: state.todo }),
  (dispatch: Dispatch) => ({
    actions: new ActionDispatcher(dispatch)
  })
)(TodoList);
