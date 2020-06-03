import { ActionDispatcher } from "../../src/Pages/Container";
import { addTask, clearTask } from "../../src/Pages/Module";

function mockDispatch(): jest.Mock<void, [any]> {
  return jest.fn((action: any) => {
    return;
  });
}

function initActionDispatcher(mockDispatch: any): any {
  return new ActionDispatcher(mockDispatch);
}

test("addTask", () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);

  const newTask = "test task";

  actionDispatcher.addTask(newTask);
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject(addTask({ task: newTask }));
});

test("clearTask", () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);

  actionDispatcher.clearTask();
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject(clearTask());
});

test("asyncAddTask", async () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);

  const newTask = "test task";

  await actionDispatcher.addTask(newTask);
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject(addTask({ task: newTask }));
});

test("asyncClearTask", async () => {
  const dispatch = mockDispatch();
  const actionDispatcher = initActionDispatcher(dispatch);

  await actionDispatcher.clearTask();
  expect(dispatch.mock.calls.length).toBe(1);
  expect(dispatch.mock.calls[0][0]).toMatchObject(clearTask());
});
