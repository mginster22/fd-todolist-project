import ACTION_TYPES from "./types";

//create
export const createUserRequest = (values) => ({
  type: ACTION_TYPES.CREATE_USER_REQUEST,
  payload: { values },
});
export const createUserSuccess = (user) => ({
  type: ACTION_TYPES.CREATE_USER_SUCCESS,
  payload: { user },
});
export const createUserError = (error) => ({
  type: ACTION_TYPES.CREATE_USER_ERROR,
  payload: { error },
});

//getAllUsers
export const getUsersRequest = ({ limit, offset }) => ({
  type: ACTION_TYPES.GET_USERS_REQUEST,
  payload: { limit, offset },
});

export const getUsersSuccess = (users) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: { users },
});
export const getUsersError = (error) => ({
  type: ACTION_TYPES.GET_USERS_SUCCESS,
  payload: { error },
});
//getUser
export const getUserByIdRequest = ({ userId }) => ({
  type: ACTION_TYPES.GET_USER_BY_ID_REQUEST,
  payload: { userId },
});
export const getUserByIdSuccess = ({ user }) => ({
  type: ACTION_TYPES.GET_USER_BY_ID_SUCCESS,
  payload: { user },
});
export const getUserByIdError = ({ error }) => ({
  type: ACTION_TYPES.GET_USER_BY_ID_ERROR,
  payload: { error },
});
//deleteUserById
export const deleteUserByIdRequest = (id) => ({
  type: ACTION_TYPES.DELETE_USER_BY_ID_REQUEST,
  payload: { id },
});
export const deleteUserByIdSuccess = ({ user }) => ({
  type: ACTION_TYPES.DELETE_USER_BY_ID_SUCCESS,
  payload: { user },
});
export const deleteUserByIdError = ({ error }) => ({
  type: ACTION_TYPES.DELETE_USER_BY_ID_ERROR,
  payload: { error },
});
//set
export const setOffset = ({ offset }) => ({
  type: ACTION_TYPES.SET_OFFSET,
  payload: { offset },
});

export const setTotalUsers = ({ totalUsers }) => ({
  type: ACTION_TYPES.SET_TOTAL_USERS,
  payload: { totalUsers },
});
export const setCurrentPage = (currentPage) => ({
  type: ACTION_TYPES.SET_CURRENT_PAGE,
  payload: currentPage,
});
export const setSelectedUser = (user) => ({
  type: ACTION_TYPES.SET_SELECTED_USER,
  payload:  user ,
});

//update
export const updateUserRequset = ({ values, userId }) => ({
  type: ACTION_TYPES.UPDATE_USER_REQUEST,
  payload: { values, userId },
});
export const updateUserSuccess = (user) => ({
  type: ACTION_TYPES.UPDATE_USER_SUCCESS,
  payload: { user },
});
export const updateUserError = ({ error }) => ({
  type: ACTION_TYPES.UPDATE_USER_ERROR,
  payload: { error },
});
