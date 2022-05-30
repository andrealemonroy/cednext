import React from "react";

const Blog = ({ blogData }) => {
  return (
    <div className="flex flex-wrap">
      {blogData?.map((item, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
          <img
            className="w-full"
            src="https://cuantoestaeldolar.pe/blog/wp-content/uploads/2022/04/Tipodecambio.png"
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{item.highlight}</div>
            <p className="text-gray-700 text-base">
              {item.title.rendered}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
