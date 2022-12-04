import React from "react";
import PostItem from "src/shared/PostItem";

const PostList = ({ postList }) => {
  const {
    data: { docs },
  } = postList;

  return (
    <div className="grid grid-cols-3 gap-4">
      {docs.map((post) => (
        <PostItem key={post._id} post={post} />
      ))}
    </div>
  );
};

export default PostList;
