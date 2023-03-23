import http from "./BaseService";

export const listPosts = () => http.get("/posts");

export const detailPost = (id) => {
  return http.get(`/posts/${id}`, {
    params: {
      _embed: "comments",
    },
  });
};
