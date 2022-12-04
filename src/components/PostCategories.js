import React from "react";
import { ChevronUpIcon } from "@heroicons/react/24/solid";

const PostCategories = ({ postCategories }) => {
  const { data } = postCategories;

  return (
    <>
      <div className="flex items-center justify-between text-gray-100 bg-violet-400 px-4 py-6 rounded-t-3xl">
        <h4 className="font-medium text-lg">دسته بندی مقالات</h4>
        <ChevronUpIcon className="w-6 h-6" />
      </div>
      <ul className="py-4">
        <li className="px-4 py-2 hover:bg-blue-200 hover:text-blue-600">همه مقالات</li>
        {data.map((category) => (
            <li
              className="px-4 py-2 hover:bg-blue-200 hover:text-blue-600"
              key={category._id}
            >
              {category.title}
            </li>
        ))}
      </ul>
    </>
  );
};

export default PostCategories;
