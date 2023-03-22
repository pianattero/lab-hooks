import http from "./BaseService";

export const listComments = () => http.get("/comments");
