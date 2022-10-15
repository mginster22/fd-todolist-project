import ACTION_TYPES from "./types";

//create
export const createTaskRequest = ({ userId, values }) => ({
  type: ACTION_TYPES.CREATE_TASK_REQUEST,
  payload: { userId, values },
});
export const createTaskSuccess = (task) => ({
  type: ACTION_TYPES.CREATE_TASK_SUCCESS,
  payload: { task },
});
export const createTaskError = ({ error }) => ({
  type: ACTION_TYPES.CREATE_TASK_ERROR,
  payload: { error },
});

///get
export const getTaskUserRequest = ({ userId }) => ({
  type: ACTION_TYPES.GET_TASK_USER_REQUEST,
  payload: { userId },
});
export const getTaskUserSuccess = ({ tasks }) => ({
  type: ACTION_TYPES.GET_TASK_USER_SUCCESS,
  payload: { tasks },
});
export const getTaskUserError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASK_USER_ERROR,
  payload: { error },
});

export const getTasksRequest = () => ({
  type: ACTION_TYPES.GET_TASKS_REQUEST,
});
export const getTasksSuccess = (tasks) => ({
  type: ACTION_TYPES.GET_TASKS_SUCCESS,
  payload: tasks,
});
export const getTasksError = ({ error }) => ({
  type: ACTION_TYPES.GET_TASKS_ERROR,
  payload: { error },
});

//delete
export const deleteUserTaskRequest = ({ userId, taskId }) => ({
  type: ACTION_TYPES.DELETE_TASK_REQUEST,
  payload: { userId, taskId },
});
export const deleteUserTaskSuccess = (task) => ({
  type: ACTION_TYPES.DELETE_TASK_SUCCESS,
  payload: { task },
});
export const deleteUserTaskError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_TASK_ERROR,
  payload: { error },
});

//update

export const updateUserTaskRequest = ({ userId, taskId, values }) => ({
  type: ACTION_TYPES.UPDATE_TASK_REQUEST,
  payload: { userId, taskId, values },
});
export const updateUserTaskSuccess = (task) => ({
  type: ACTION_TYPES.UPDATE_TASK_SUCCESS,
  payload: { task },
});
export const updateUserTaskError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_TASK_ERROR,
  payload: { error },
});
