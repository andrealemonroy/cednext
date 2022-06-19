import React from "react";

const Title = ({ type, text, align }) => {
  return (
    <>
      {type === "h1" ? (
        <h1 className={`text-[34px] sm:text-[42px] font-bold text-${align}`}>
          {text}
        </h1>
      ) : type === "h2" ? (
        <h2 className={`text-2xl font-bold text-${align}`}>{text}</h2>
      ) : type === "h3" ? (
        <h3 className={`text-base text-lightGray text-${align}`}>{text}</h3>
      ) : type === "h4" ? (
        <h4 className={`text-[18px] text-lightGray text-${align}`}>{text}</h4>
      ) : type === "h5" ? (
        <h5 className={`text-2xl text-${align}`}>{text}</h5>
      ) : type === "h6" ? (
        <h6 className={`text-[18px] font-bold text-${align}`}>{text}</h6>
      ) : type === "h8" ? (
        <h8 className={`text-[18px] font-bold text-${align}`}>{text}</h8>
      ) : (
        <h7 className={`text-2xl font-bold text-${align}`}>{text}</h7>
      )}
    </>
  );
};

export default Title;
