import { baseUrl } from "./base";

export function getPosts(options) {
  return baseUrl.get(options).then((res) => res.data);
}

export function getSinglePost(postId, options) {
  return baseUrl.get(`posts/${postId}`, options).then((res) => res.data);
}

export function getComments(postId, options) {
  return baseUrl
    .get(`comments?postId=${postId}`, options)
    .then((res) => res.data);
}
