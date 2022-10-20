import ACTION_TYPES from "../actions/types";
import { produce } from "immer";

const handlerRequest = produce((draftState, action) => {
  draftState.isFetching = true;
});
const handlerError = produce((draftState, action) => {
  draftState.error = action.payload.error;
});

const initialState = {
  users: [],
  isFetching: false,
  error: null,
  selectedUser: null,
  totalUsers: null,
  offset: 0,
  currentPage: 1,
  user: null,
};

const handlers = {
  //CREATE
  [ACTION_TYPES.CREATE_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.CREATE_USER_ERROR]: handlerError,
  [ACTION_TYPES.CREATE_USER_SUCCESS]: produce((draftState, action) => {
    const { user } = action.payload;
    draftState.users.push(user);
  }),
  //GETALLUSERS
  [ACTION_TYPES.GET_USERS_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_USERS_ERROR]: handlerError,
  [ACTION_TYPES.GET_USERS_SUCCESS]: produce((draftState, action) => {
    const {
      users: { users, totalUsers },
    } = action.payload;
    draftState.isFetching = false;
    draftState.users = [];
    draftState.users.push(...users);
    draftState.totalUsers = totalUsers;
  }),
  //GETUSERBYID
  [ACTION_TYPES.GET_USER_BY_ID_ERROR]: handlerError,
  [ACTION_TYPES.GET_USER_BY_ID_REQUEST]: handlerRequest,
  [ACTION_TYPES.GET_USER_BY_ID_SUCCESS]: produce((draftState, action) => {
    const { user } = action.payload;
    draftState.isFetching = false;
    draftState.selectedUser = user;
  }),
  //DELETEUSERBYID
  [ACTION_TYPES.DELETE_USER_BY_ID_REQUEST]: handlerRequest,
  [ACTION_TYPES.DELETE_USER_BY_ID_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
    draftState.users = draftState.users.filter(
      (u) => u.id !== action.payload.user.id
    );
  }),
  [ACTION_TYPES.UPDATE_USER_REQUEST]: handlerRequest,
  [ACTION_TYPES.UPDATE_USER_ERROR]: handlerError,
  [ACTION_TYPES.UPDATE_USER_SUCCESS]: produce((draftState, action) => {
    draftState.isFetching = false;
  }),

  //SETOFFSET
  [ACTION_TYPES.SET_OFFSET]: produce((draftState, action) => {
    const { offset } = action.payload;
    draftState.offset = offset;
  }),
  [ACTION_TYPES.SET_CURRENT_PAGE]: produce((draftState, action) => {
    draftState.currentPage = action.payload;
  }),
  [ACTION_TYPES.SET_SELECTED_USER]: produce((draftState, action) => {
    draftState.user = action.payload.user;
  }),
};

function userReducer(state = initialState, action) {
  const handler = handlers[action.type];
  if (handler) {
    return handler(state, action);
  }
  return state;
}

export default userReducer;
