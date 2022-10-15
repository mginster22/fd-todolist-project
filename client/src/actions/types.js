const ACTION_TYPES = {
  //userFormActions
  CREATE_USER_REQUEST: "post/users/request",
  CREATE_USER_SUCCESS: "post/users/success",
  CREATE_USER_ERROR: "post/users/error",

  //userListActions
  //getAllUsers
  GET_USERS_REQUEST: "get/users/request",
  GET_USERS_SUCCESS: "get/users/success",
  GET_USERS_ERROR: "get/users/error",

  //getUserById
  GET_USER_BY_ID_REQUEST: "GET_USER_BY_ID_REQUEST",
  GET_USER_BY_ID_SUCCESS: "GET_USER_BY_ID_SUCCESS",
  GET_USER_BY_ID_ERROR: "GET_USER_BY_ID_ERROR",

  //delete
  DELETE_USER_BY_ID_REQUEST: "DELETE_USER_BY_ID_REQUEST",
  DELETE_USER_BY_ID_SUCCESS: "DELETE_USER_BY_ID_SUCCESS",
  DELETE_USER_BY_ID_ERROR: "DELETE_USER_BY_ID_ERROR",

  SET_OFFSET: "SET_OFFSET",
  SET_TOTAL_USERS: "SET_TOTAL_USERS",
  SET_CURRENT_PAGE: "SET_CURRENT_PAGE",
  SET_SELECTED_USER: "SET_SELECTED_USER",

  UPDATE_USER_REQUEST: "UPDATE_USER_REQUEST",
  UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
  UPDATE_USER_ERROR: "UPDATE_USER_ERROR",

  //TASKS
  //GET
  GET_TASK_USER_REQUEST: "GET_TASK_USER_REQUEST",
  GET_TASK_USER_SUCCESS: "GET_TASK_USER_SUCCESS",
  GET_TASK_USER_ERROR: "GET_TASK_USER_ERROR",

  GET_TASKS_REQUEST: "GET_TASKS_REQUEST",
  GET_TASKS_SUCCESS: "GET_TASKS_SUCCESS",
  GET_TASKS_ERROR: "GET_TASKS_ERROR",

  //CREATE
  CREATE_TASK_REQUEST: "CREATE_TASK_REQUEST",
  CREATE_TASK_SUCCESS: "CREATE_TASK_SUCCESS",
  CREATE_TASK_ERROR: "CREATE_TASK_ERROR",

  //DELETE
  DELETE_TASK_REQUEST: "DELETE_TASK_REQUEST",
  DELETE_TASK_SUCCESS: "DELETE_TASK_SUCCESS",
  DELETE_TASK_ERROR: "DELETE_TASK_ERROR",

  //UPDATE
  UPDATE_TASK_REQUEST: "UPDATE_TASK_REQUEST",
  UPDATE_TASK_SUCCESS: "UPDATE_TASK_SUCCESS",
  UPDATE_TASK_ERROR: "UPDATE_TASK_ERROR",
};

export default ACTION_TYPES;
