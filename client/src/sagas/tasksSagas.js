import { put } from "redux-saga/effects";
import {
  getTaskUser,
  createTask,
  deleteUserTask,
  updateUserTask,
  getAllTasks,
} from "../api";
import {
  getTaskUserSuccess,
  getTaskUserError,
  createTaskSuccess,
  createTaskError,
  deleteUserTaskSuccess,
  deleteUserTaskError,
  updateUserTaskSuccess,
  updateUserTaskError,
  getTaskUserRequest,
  getTasksError,
  getTasksSuccess,
} from "../actions/taskCreators";

export function* getTaskUserSaga(action) {
  try {
    const {
      data: { data: tasks },
    } = yield getTaskUser(action.payload);
    yield put(getTaskUserSuccess({ tasks }));
  } catch (error) {
    yield put(getTaskUserError({ error }));
  }
}
export function* createTaskSaga(action) {
  try {
    const {
      data: { data },
    } = yield createTask({
      data: action.payload.values,
      userId: action.payload.userId,
    });
    yield put(createTaskSuccess(data));
  } catch (error) {
    yield put(createTaskError({ error }));
  }
}
export function* deleteUserTaskSaga(action) {
  console.log(action.payload);
  try {
    const {
      data: { data },
    } = yield deleteUserTask({
      userId: action.payload.userId,
      taskId: action.payload.taskId,
    });
    yield put(deleteUserTaskSuccess(data));
  } catch (error) {
    yield put(deleteUserTaskError({ error }));
  }
}

export function* updateUserTaskSaga(action) {
  console.log(action.payload);
  try {
    const {
      data: { data },
    } = yield updateUserTask({
      values: action.payload.values,
      userId: action.payload.userId,
      taskId: action.payload.taskId,
    });
    yield put(updateUserTaskSuccess(data));
    yield put(getTaskUserRequest({ userId: action.payload.userId }));
  } catch (error) {
    yield put(updateUserTaskError({ error }));
  }
}
export function* getAllTasksSaga(action) {
  console.log(action.payload);
  try {
    const {
      data: { data },
    } = yield getAllTasks();

    yield put(getTasksSuccess(data));
  } catch (error) {
    yield put(getTasksError({ error }));
  }
}
