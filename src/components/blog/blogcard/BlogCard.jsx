import React from "react";
import "./BlogCard.css";
const BlogCard = ({ image, title, subTitle, category }) => {
  return (
    <div className="blogcard">
      <div className="blogcard-1">
        <img className="blogcard-1-img" src={image} alt="blogImgOne" />
      </div>
      <div className="blogcard-2">
        <span className="blogcard-2-span">{title}</span>
        <h2 className="blogcard-2-h2">{subTitle}</h2>
        <p className="blogcard-2-p">{category}</p>
      </div>
    </div>
  );
};

export default BlogCard;
