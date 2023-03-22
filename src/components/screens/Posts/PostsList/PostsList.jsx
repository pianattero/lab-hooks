import React, { useEffect, useState } from "react";
import { listPosts } from "../../../../services/PostService.js";
import { PostItem } from "../PostItem/PostItem.jsx";

export const PostsList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    listPosts()
      .then((posts) => {
        setPosts(posts);
      })
      .catch((err) => console.error(err));
  }, []);
  console.log(posts);

  return (
    <div>
      {posts.length > 0
        ? posts.map((post) => {
            return <PostItem {...post} key={post.id} />;
          })
        : null}
    </div>
  );
};
