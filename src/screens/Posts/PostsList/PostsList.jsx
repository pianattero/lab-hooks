import "./PostList.css";
import React, { useEffect, useState } from "react";
import { listPosts } from "../../../services/PostService.js";
import { PostItem } from "../PostItem/PostItem.jsx";
import { Link } from "react-router-dom";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="PostList">
      {posts.length > 0
        ? posts.map((post) => {
            return (
              <div>
                <PostItem {...post} key={post.id} />
                <Link
                  style={{ textDecoration: "none" }}
                  to={`${post.id}?_embed=comments`}
                >
                  View Comments{" "}
                </Link>
              </div>
            );
          })
        : null}
    </div>
  );
};
