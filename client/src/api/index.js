import axios from "axios";
import FormData from "form-data";
import qs from "query-string";
const httpClient = axios.create({
  baseURL: "http://localhost:3004/api",
});

export const createUser = (data) => {
  const form = new FormData();
  form.append("name", data.name);
  form.append("login", data.login);
  form.append("password", data.password);
  form.append("avatar", data.avatar);
  return httpClient.post("/users", form, {
    headers: {
      "Content-Type": "multipart/form/data",
    },
  });
};
export const getAllUsers = ({ limit, offset }) =>
  httpClient.get(`/users?${qs.stringify({ limit, offset })}`);

export const getUserById = ({ userId }) => httpClient.get(`/users/${userId}`);

export const deleteUser = (id) => httpClient.delete(`/users/${id}`);

export const updateUser = ({ data, userId }) => {
  const form = new FormData();
  form.append("login", data.login);
  form.append("name", data.name);
  form.append("password", data.password);
  form.append("avatar", data.avatar);

  return httpClient.patch(`/users/${userId}`, form, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
export const createTask = ({ data, userId }) => {
  return httpClient.post(`/users/${userId}/tasks`, data);
};

export const getTaskUser = ({ userId }) =>
  httpClient.get(`/users/${userId}/task`);

export const getAllTasks = () => httpClient.get("/tasks");

export const deleteUserTask = ({ userId, taskId }) =>
  httpClient.delete(`/users/${userId}/task/${taskId}`);

export const updateUserTask = ({ values, userId, taskId }) =>
  httpClient.patch(`/users/${userId}/task/${taskId}`, values);
