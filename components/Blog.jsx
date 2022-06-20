import React from "react";
import Image from "next/image";

const Blog = ({ blogData }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center">
      {blogData?.map((item, index) => (
        <div
          key={index}
          className="rounded overflow-hidden shadow-lg mx-2 my-2"
        >
          <div className="w-full">
            <Image src={item.image} alt={item.title} width="700" height="400" />
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.highlight}</div>
            <p className="text-gray-700 text-base">{item.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
