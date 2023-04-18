import React from 'react';
import { useSelector } from 'react-redux';

const SinglePost = ({ match }) => {
  const { postId } = match.params;
  const post = useSelector((state) => state.posts.find((post) => post.id === postId));

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.author}</p>
      <p>{post.publishedDate}</p>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default SinglePost;