import React from "react";
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/solid";
const sortOptions = [
  { label: "پربازدیدترین", id: "most" },
  { label: "جدیدترین", id: "newest" },
  { label: "محبوب ترین", id: "popular" },
];

const DesktopSort = () => {
  return (
    <>
      <div className="flex items-center gap-x-2.5 ml-8">
        <AdjustmentsHorizontalIcon className="h-6 w-6" />
        <span>مرتب سازی:</span>
      </div>
      <ul className="flex gap-x-4">
        {sortOptions.map((option) => (
          <li key={option.id}>{option.label}</li>
        ))}
      </ul>
    </>
  );
};

export default DesktopSort;
