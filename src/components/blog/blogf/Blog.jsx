import React from "react";
import Title from "../../home/title/Title";
import { blogImgOne, blogImgTwo, blogImgThree } from "../../../assets";
import BlogCard from "../blogcard/BlogCard";
import "./Blog.css";
const Blog = () => {
  return (
    <div>
      <Title title="Latest" subTitle="Posts" />
      <div className="blog">
        <div className="blog-1">
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 15, 2020"
            subTitle="How to become a creative designer"
            category="Documentation"
          />
          <BlogCard
            image={blogImgThree}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="July 13, 2020"
            subTitle="Designer Conference at Florida, USA 2020"
            category="Documentation"
          />
        </div>
        <div className="blog-1">
          <BlogCard
            image={blogImgThree}
            title="July 13, 2020"
            subTitle="Designer Conference at Florida, USA 2020"
            category="Documentation"
          />
          <BlogCard
            image={blogImgTwo}
            title="July 14, 2020"
            subTitle="Designers thoughts about mobile UI templates"
            category="Travel"
          />
          <BlogCard
            image={blogImgOne}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
          <BlogCard
            image={blogImgThree}
            title="September 16, 2020"
            subTitle="UI & UX Conference at Lviv 2022"
            category="Travel"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
