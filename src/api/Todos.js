import { baseUrl } from "./base";

export function getTodos(options) {
  return baseUrl.get("todos", options).then((res) => res.data);
}
