import http from "./BaseService";

export const listPosts = () => http.get("/posts");
