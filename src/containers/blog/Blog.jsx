import React from "react";
import Article from "../../components/article/Article";
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import "./blog.css";

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">
      Discover the Steps to Latest in Online Security on our Blog.
      </h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article
          imgUrl={blog01}
          date="Sep 26, 2021"
          text="Navigating Public Wi-Fi Safely: The Sneak2.0 Advantage"
        />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article
          imgUrl={blog02}
          date="Sep 26, 2021"
          text="VPN Sneak: Your Guide to Choosing the Right Server"
        />
        <Article
          imgUrl={blog03}
          date="Sep 26, 2021"
          text="Behind the Scenes: Sneak Android App v7.7.0"
        />
        <Article
          imgUrl={blog04}
          date="Sep 26, 2021"
          text="The ABCs of Online Privacy: A VPN Sneak Perspective"
        />
        <Article
          imgUrl={blog05}
          date="Sep 26, 2021"
          text="Empowering Digital Education with VPN Sneak"
        />
      </div>
    </div>
  </div>
);

export default Blog;
