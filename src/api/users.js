import { baseUrl } from "./base";

export function getUsers(options) {
  return baseUrl.get(options).then((res) => res.data);
}

export function getSingleUser(userId, options) {
  return baseUrl.get(`users/${userId}`, options).then((res) => res.data);
}
