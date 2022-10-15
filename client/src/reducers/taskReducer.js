import ACTION_TYPES from "../actions/types";
import { produce } from "immer";

const handlerRequest = produce((draftState, action) => {
  draftState.isFetching = true;
});
const handlerError = produce((draftState, action) => {
  draftState.error = action.payload.error;
});

const initialState = {
  isFetching: false,
  error: null,
  selectedTask: [],
};

const handlers = {
  //CREATE
  [ACTION_TYPES.CREATE_TASK_REQUEST]: handlerRequest,
  [ACTION_TYPES.CREATE_TASK_ERROR]: handlerError,
  [ACTION_TYPES.CREATE_TASK_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
    draftState.selectedTask.push(action.payload.task);
  }),
  //GETALLUSERS
  [ACTION_TYPES.GET_TASK_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_TASK_USER_ERROR]: handlerError,
  [ACTION_TYPES.GET_TASK_USER_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
    draftState.selectedTask = action.payload.tasks;
  }),
  [ACTION_TYPES.DELETE_TASK_REQUEST]: handlerRequest,
  [ACTION_TYPES.DELETE_TASK_ERROR]: handlerError,
  [ACTION_TYPES.DELETE_TASK_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
  }),
  [ACTION_TYPES.UPDATE_TASK_REQUEST]: handlerRequest,
  [ACTION_TYPES.UPDATE_TASK_ERROR]: handlerError,
  [ACTION_TYPES.UPDATE_TASK_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
  }),
  [ACTION_TYPES.GET_TASKS_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_TASKS_ERROR]: handlerError,
  [ACTION_TYPES.GET_TASKS_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
    draftState.selectedTask = [];
    draftState.selectedTask.push(...action.payload);
  }),
  //GETUSERBYID
};

function taskReducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default taskReducer;
