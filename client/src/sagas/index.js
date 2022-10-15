import { takeLatest } from "redux-saga/effects";
import ACTION_TYPES from "../actions/types";

import {
  createUserSaga,
  getAllUsersSaga,
  getUserByIdSaga,
  deleteUserSaga,
  updateUserSaga,
} from "./usersSagas";

import { getTaskUserSaga, createTaskSaga,deleteUserTaskSaga,updateUserTaskSaga,getAllTasksSaga } from "./tasksSagas";
function* rootSaga() {
  //User_Reques
  yield takeLatest(ACTION_TYPES.CREATE_USER_REQUEST, createUserSaga);
  yield takeLatest(ACTION_TYPES.GET_USERS_REQUEST, getAllUsersSaga);
  yield takeLatest(ACTION_TYPES.GET_USER_BY_ID_REQUEST, getUserByIdSaga);
  yield takeLatest(ACTION_TYPES.DELETE_USER_BY_ID_REQUEST, deleteUserSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_USER_REQUEST, updateUserSaga);

  //Task_Request
  yield takeLatest(ACTION_TYPES.GET_TASK_USER_REQUEST, getTaskUserSaga);
  yield takeLatest(ACTION_TYPES.CREATE_TASK_REQUEST, createTaskSaga);
  yield takeLatest(ACTION_TYPES.DELETE_TASK_REQUEST,deleteUserTaskSaga);
  yield takeLatest(ACTION_TYPES.UPDATE_TASK_REQUEST,updateUserTaskSaga)
  yield takeLatest(ACTION_TYPES.GET_TASKS_REQUEST,getAllTasksSaga)
}
export default rootSaga;
