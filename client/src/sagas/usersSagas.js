import { put } from "redux-saga/effects";
import {
  createUserSuccess,
  createUserError,
  getUsersSuccess,
  getUsersError,
  getUserByIdSuccess,
  getUserByIdError,
  deleteUserByIdError,
  deleteUserByIdSuccess,
  updateUserError,
  updateUserSuccess,
  getUserByIdRequest,
} from "../actions/usersCreators";
import {
  createUser,
  getAllUsers,
  getUserById,
  deleteUser,
  updateUser,
} from "../api";

export function* createUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield createUser(action.payload.values);
    yield put(createUserSuccess(user));
  } catch (error) {
    yield put(createUserError(error));
  }
}
export function* getAllUsersSaga(action) {
  try {
    const {
      data: {
        data: { users, totalUsers },
      },
    } = yield getAllUsers(action.payload);
    yield put(getUsersSuccess({ users, totalUsers }));
  } catch (error) {
    yield put(getUsersError(error));
  }
}
export function* getUserByIdSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield getUserById(action.payload);
    yield put(getUserByIdSuccess({ user }));
  } catch (error) {
    yield put(getUserByIdError({ error }));
  }
}

export function* deleteUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield deleteUser(action.payload.id);
    yield put(deleteUserByIdSuccess({ user }));
  } catch (error) {
    yield put(deleteUserByIdError({ error }));
  }
}
export function* updateUserSaga(action) {
  try {
    const {
      data: { data: user },
    } = yield updateUser({
      data: action.payload.values,
      userId: action.payload.userId,
    });
    console.log(user);
    yield put(updateUserSuccess(user));
    yield put(getUserByIdRequest({ userId: action.payload.userId }));
    console.log(user);
  } catch (error) {
    yield put(updateUserError(error));
  }
}
