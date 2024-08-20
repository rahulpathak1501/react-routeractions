import { baseUrl } from "./base";

export function getTodos(options) {
  return baseUrl.get(options).then((res) => res.data);
}

export function addTodos(data) {
  console.log(data);
  return baseUrl.post("/todos", data).then((res) => res.data);
}
