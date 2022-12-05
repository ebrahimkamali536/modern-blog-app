import axios from "axios";
import React, { useEffect } from "react";
import http from "src/services/httpService";

const SinglePost = ({ data }) => {
  console.log(data);
  return (
    <div className="flex">
      <div>
        <div></div>
        <div>
          <h1>{data.title}</h1>
          <p>{data.text}</p>
          <div className="flex items-center justify-between">
            <div>interaction button</div>
            <div>
              share button
              <button>copy link</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        related post
      </div>
    </div>
  );
};

export default SinglePost;

export async function getServerSideProps({ query }) {
  const {
    data: { data },
  } = await http.get(`/posts/${query.postSlug}`);

  return {
    props: {
      data,
    },
  };
}
