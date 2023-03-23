import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { detailPost } from "../../../services/PostService";
import { PostItem } from "../PostItem/PostItem";

export const PostDetail = () => {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const { postId } = useParams();

  useEffect(() => {
    detailPost(postId)
      .then((post) => {
        setPost(post);
        setComments(post.comments);
      })
      .catch((err) => console.error(err));
  }, [postId]);

  return (
    <div>
      <PostItem {...post} />
      <div>
        {comments.map((comment) => {
          return (
            <div>
              <h3> {comment.name} </h3>
              <h5> {comment.email} </h5>
              <p>{comment.body} </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
