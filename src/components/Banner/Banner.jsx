import React from "react";
import BannerImg from "../../assets/pngwing 1.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-2 bg-[#F5F5F5] p-10 rounded-lg px-30">
      <div className="flex flex-col justify-center items-start gap-5  ">
        <h1 className="text-[50px] font-bold leading-snug">
          Books to freshen up your bookshelf
        </h1>
        <button className="btn btn-success text-white">View the list</button>
      </div>
      <div className="flex items-center justify-end p-5">
        <img src={BannerImg} alt="" />
      </div>
    </div>
  );
};

export default Banner;
