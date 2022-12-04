import React from "react";
import PostCategories from "@src/components/PostCategories";
import http from "src/services/httpService";
import DesktopSort from "@src/components/DesktopSort";
import PostList from "@src/components/PostList";

const Home = ({ postCategories, postList }) => {
  return (
    <main>
      <div className="container md:max-w-screen-xl mx-auto mt-4 grid grid-cols-12 gap-4">
        <div className="rounded-3xl col-span-3 shadow-md">
          <PostCategories postCategories={postCategories} />
        </div>
        <div className="col-span-9">
          <div className="bg-white flex items-center p-4 rounded-2xl mb-10 shadow-md ">
            <DesktopSort />
          </div>
          <div className="">
            <PostList postList={postList} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

export async function getServerSideProps(context) {
  const { data: postCategories } = await http.get("/post-category");
  const { data: postList } = await http.get("/posts");

  return {
    props: { postCategories, postList },
  };
}
