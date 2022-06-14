import React from "react";

const Blog = ({ blogData }) => {
  return (
    <div className="grid gap-4 grid-cols-3">
      {blogData?.map(({id, title, author, content, date, date_gmt, excerpt, image, link, slug}, index) => (
        <div key={index} className="max-w-sm rounded overflow-hidden shadow-lg mx-2 my-2">
          <img className="w-full" src={image}/>
          <div className="px-6 py-4">
            <div className="text-xl mb-2">{title}</div>
            {/* <p className="text-gray-700 text-base" dangerouslySetInnerHTML={{ __html: excerpt }}></p> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
